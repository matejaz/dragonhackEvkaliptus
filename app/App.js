import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getUserById } from "./src/api/ApiHandler.js"
import User from "./utils/User.js"

import SexPick from "./src/views/solo/SexPick.js";
import HomeSolo from "./src/views/solo/HomeSolo.js";
import HomeCouple from "./src/views/couple/HomeCouple.js";
import GameIdeas from "./src/views/couple/GameIdeas";

import Action from "./src/views/couple/Action";
import EndAction from "./src/views/couple/EndAction";
import styles from "./assets/style/theme.scss"
import Achievements from './src/views/Achievements.js';
import buttonStyles from "./assets/style/buttons.scss"
import soloLine from "./assets/media/soloLine.png"
import coupleLine from "./assets/media/coupleLine.png"
import line from "./assets/media/line.png"

export default function App() {
  const Stack = createStackNavigator();
  const [appIsReady, setAppIsReady] = useState(false);
  const [userId, setUserId] = useState("");

  //Splash
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);

        const id = await User.getId();
        setUserId(id)
        if (id !== "") {
          console.log("User ID found: ", id)
          fetchUserData(id)
        }
        else {
          console.log("No user ID found!")
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  function fetchUserData(id) {

    const userInfoResponse = getUserById(id);
    userInfoResponse.then((resp) => {
      if (resp.status === 200) {
        console.log("User data received", resp.data);
        User.setUserInfo(resp.data);
      }
      else {
        console.log("Fetching user failed", resp.status, resp.data)
      }
    })

  }

  function soloButtonPressed(navigation) {
    if (userId === "") {
      navigation.navigate('SexPick')

    }
    else {
      navigation.navigate('HomeSolo')
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      //Hide Splash
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const landingPage = ({ navigation }) => {
    return (
      <View
        style={styles.background}
        onLayout={onLayoutRootView}>
        <Text style={styles.fadedTitle}>Choose your mode</Text>
        <View style={styles.selectionView}>

          <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => soloButtonPressed(navigation)}>
            <View >
              <Image source={soloLine} title="Solo" />
            </View>
          </TouchableOpacity>


          <View style={styles.separatorLine}>
            <Image source={line} title />
          </View>


          <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate('HomeCouple')}>
            <View >
              <Image source={coupleLine} title="Couple" />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeActivity" screenOptions={{ headerShown: false }} independent={true}>
        {/* General */}
        <Stack.Screen name="LandingPage" component={landingPage} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="Action" component={Action} />
        <Stack.Screen name="EndAction" component={EndAction} />

        {/* Solo */}
        <Stack.Screen name="SexPick" component={SexPick} />
        <Stack.Screen name="HomeSolo" component={HomeSolo} />

        {/* Couple */}
        <Stack.Screen name="HomeCouple" component={HomeCouple} />
        <Stack.Screen name="GameIdeas" component={GameIdeas} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
