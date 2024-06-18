import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../drawernavigation/Settings";
import Profile from "../drawernavigation/Profile";
import Home from "../drawernavigation/Home";
import Header from "../../components/Header";
import Payment from "./Payment";
const Stack = createStackNavigator();

export default function Main() {
  return (
    
      <Stack.Navigator> 
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            header: () => <Header typeNavigation={"primary"} />,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            header: () => <Header typeNavigation={"secondary"} />,
          }}
        />
      </Stack.Navigator>
  
  );
}