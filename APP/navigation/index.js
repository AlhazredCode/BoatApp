import React from "react";
import AuthStack from "../screens/stackauth/AuthStack";
import MainStack from "../screens/stacknavigation/MainStack";
import { createStackNavigator } from "@react-navigation/stack";


export default function AppNavigator() {

const Stack = createStackNavigator();


  return (
    <>
    <Stack.Navigator initialRouteName="AuthStack">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={AuthStack}
        name="AuthStack"
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainStack"
        component={MainStack}
      />

    </Stack.Navigator>
  </>
  );
}
