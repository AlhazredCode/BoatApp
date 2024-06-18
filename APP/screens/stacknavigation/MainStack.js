import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import Ride from "./Ride";
import Notifications from "./Notifications";
import Header from "../../components/Header";
import Item from "./Item"
import Details from "./Details"
import Checkout from "./Checkout";
import Payment from "./Payment";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Main}
        name="Main"
      />

      <Stack.Screen
         options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Ride"
        component={Ride}
      />

    <Stack.Screen
        options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Notifications"
        component={Notifications}
      />  

<Stack.Screen
        options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Item"
        component={Item}
      />  
<Stack.Screen
        options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Details"
        component={Details}
      />  
<Stack.Screen
        options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Checkout"
        component={Checkout}
      />  
<Stack.Screen
        options={{
          header: () => <Header typeNavigation={"secondary"} />,
        }}
        name="Payment"
        component={Payment}
      />  
    </Stack.Navigator>
  </>
  );
};

export default MainStack;
