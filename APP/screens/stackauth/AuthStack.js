import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

const Stack = createStackNavigator();

const AuthStack = () => {
  
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Welcome}
          name="Welcome"
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
