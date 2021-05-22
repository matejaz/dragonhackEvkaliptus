import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SexPick from "./src/views/solo/SexPick.js";
import HomeCouple from "./src/views/couple/HomeCouple.js";

import styles from "./assets/style/theme.scss"

export default function App() {
  const Stack = createStackNavigator();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
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
