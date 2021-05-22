import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getUsers, createUser, updateUserById } from "./src/api/ApiHandler.js"

import SexPick from "./src/views/solo/SexPick.js";
import HomeCouple from "./src/views/couple/HomeCouple.js";

import styles from "./assets/style/theme.scss"

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
        <Button title="SOLO" onPress={() => navigation.navigate('Solo')} />
        <Button title="DUO" onPress={() => navigation.navigate('Couple')} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeActivity" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={landingPage} />
        <Stack.Screen name="Solo" component={SexPick} />
        <Stack.Screen name="Couple" component={HomeCouple} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
