import { View, Dimensions } from "react-native";
import React from "react";
import {
  Box,
  HStack,
  Button,
  ButtonText,
  ButtonIcon,
  Text,
  Pressable,
  Center,
  Icon,
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { VStack } from "../../../components/index"

import Ionicons from "@expo/vector-icons/Ionicons";


const Colors = gluestackUIConfig.tokens.colors;
const { width: ww, height: wh } = Dimensions.get("window");

const SettingsScreens = {
  Ride: {
    id: 1,
    screen: "Ride",
    iconame: "boat",
    text: "Ride",
  },
  Promotions: {
    id: 2,
    screen: "PromotionsSettings",
    iconame: "boat",
    text: "Promotions",
  },
  Help: {
    id: 3,
    screen: "HelpSettings",
    iconame: "boat",
    text: "Help",
  },
  Privacy: {
    id: 4,
    screen: "PrivacySettings",
    iconame: "boat",
    text: "Privacy",
  },
  About: {
    id: 5,
    screen: "About",
    iconame: "boat",
    text: "About",
  },
};

export default function Settings() {

  return (
    <Box width={ww}>
      <VStack mx={ww * 0.05}>
        <HStack justifyContent="space-between" my={wh * 0.02}>
          <Box my={wh * 0.03}>
            <Text fontSize={wh * 0.03}>Avaro celorio</Text>
          </Box>
          <Box>
            <Text>Avaro celorio</Text>
          </Box>
        </HStack>
        {Object.entries(SettingsScreens).map(([_, item]) => (
          <Pressable
         
            key={item.id}
            py={wh * 0.02}
          >
            <HStack>
              <Ionicons
                name={item.iconame}
                size={ww * 0.06}
                color={Colors.primary950}
              />
              <Text fontSize={wh * 0.02} mx={ww * 0.02}>
                {" "}
                {item.text}
              </Text>
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </Box>
  );
}
