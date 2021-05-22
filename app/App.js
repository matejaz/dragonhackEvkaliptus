import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getUsers, createUser, updateUserById } from "./src/api/ApiHandler.js"

import SexPick from "./src/views/solo/SexPick.js";
import HomeSolo from "./src/views/solo/HomeSolo.js";
import HomeCouple from "./src/views/couple/HomeCouple.js";
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

  //Splash
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);

        // await updateUser();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // function newUser() {
  //   const newUser = createUser("female");
  //   newUser.then((resp) => {
  //     if (resp.status === 201) {
  //       console.log(resp.data)
  //     }
  //     else {
  //       console.log("Creating new user failed", resp.status, resp.data)
  //     }
  //   })
  // }

  // function fetchUsers() {
  //   const allUsers = getUsers();
  //   allUsers.then((resp) => {
  //     if (resp.status === 200) {
  //       console.log(resp.data)
  //     }
  //     else {
  //       console.log("Fetching user failed", resp.status, resp.data)
  //     }
  //   })
  // }

  // function updateUser() {
  //   const updatedUser = updateUserById("60a923581f21680015cd8e06", "Maša in Medved");
  //   updatedUser.then((resp) => {
  //     if (resp.status === 200) {
  //       console.log(resp.data)
  //     }
  //     else {
  //       console.log("Updating user failed", resp.status, resp.data)
  //     }
  //   })
  // }

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
        <Text style={styles.text}>Choose your mode</Text>
        <Button title="Achievements" onPress={() => navigation.navigate('Achievements')} />
        <View style={styles.selectionView}>

          <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate('Solo')}>
            <View >
              <Image source={soloLine} title="Solo" />
            </View>
          </TouchableOpacity>


          <View style={styles.separatorLine}>
            <Image source={line} title />
          </View>


          <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate('HomeCouple')}>
            <View >
              <Image source={coupleLine} title="HomeCouple" />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeActivity" screenOptions={{ headerShown: false }} independent={true}>
        <Stack.Screen name="LandingPage" component={landingPage} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="Solo" component={SexPick} />
        <Stack.Screen name="Action" component={Action} />
        <Stack.Screen name="HomeCouple" component={HomeCouple} />
        <Stack.Screen name="EndAction" component={EndAction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
