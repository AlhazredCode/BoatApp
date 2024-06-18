import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./APP/navigation/index";
import {GluestackUIProvider} from './components/index'
import { useFonts } from 'expo-font';
import { LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import loadFonts from "./APP/fonts/fonts"

export default function App() {
  LogBox.ignoreAllLogs();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    async function loadAppResources() {
      try {
        await loadFonts();
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error(error);
      }
    }

    loadAppResources();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }



  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <GluestackUIProvider colorMode={theme}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </GluestackUIProvider>
    </View>
  );
}
