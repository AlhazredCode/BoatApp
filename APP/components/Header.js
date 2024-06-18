import { View, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6, MaterialIcons, Octicons } from '@expo/vector-icons';
import {
  Box,
  HStack,
  Button,
  ButtonText,
  ButtonIcon,
  Text,
  Center,
  Icon,
  Pressable
} from "../../components/index";
import { gluestackUIConfig } from "../../components/gluestack-ui.config";
import { Background, useBackground } from "./Background";
const Colors = gluestackUIConfig.tokens.colors;
const { width: ww, height: wh } = Dimensions.get("window");

const Header = ({ typeNavigation, activePage }) => {
  const navigation = useNavigation();
  const handleAction = () => {
    if (typeNavigation === "primary") {
      navigation.goBack();
    } else if (typeNavigation === "secondary") {
      navigation.goBack();
    }
  };

  const handleNotifications = () => {
    navigation.navigate('Notifications')
  };

  const MenuIcon = () => {
    return (
      <Octicons
        name={typeNavigation === "primary" ? "three-bars" : "arrow-left"}
        size={ww * 0.06}
        color={Colors.secondary100}
      />
    );
  };

  const BoatIcon = () => {
    return (
      <FontAwesome6 name={"sailboat"} size={ww * 0.05} color={Colors.secondary400} />
    );
  };
  
  const RestaurantIcon = () => {
    return (
      <MaterialIcons name={"restaurant"} size={ww * 0.05} color={Colors.secondary400} />
    );
  };

  const NotificationsIcon = () => {
    return <Octicons name="bell" size={ww * 0.06} color={Colors.secondary50} />;
  };

  return (
    <Center>
      <Box w={ww} px h={wh * 0.075}  sx={useBackground("Header")}>
        <HStack mx={ww * 0.05} h="100%" justifyContent="space-between">
          {typeNavigation === "primary" ? (
            <Center>
              <HStack
                rounded="$lg"
                sx={useBackground("secondaryLight")}
              >
                {activePage === 0 && ( 
                  <Pressable p={ww * 0.03}>
                    <HStack>
                      <Icon as={RestaurantIcon} />
                      <Text ml={ww * 0.025} color="$text200">Eat</Text> 
                    </HStack>
                  </Pressable>
                )}
                {activePage === 1 && (
                  <Pressable p={ww * 0.03} onPress={() => navigation.navigate("Ride")}>
                    <HStack>
                      <Icon as={BoatIcon} />
                      <Text ml={ww * 0.025} color="$text200">Ride</Text>
                    </HStack>
                  </Pressable>
                )}
              </HStack>
            </Center>
          ) : ( 
            <Center>
              <Button onPress={handleAction} bg="transparent">
                <Icon as={MenuIcon} /> 
              </Button>
            </Center>
          )}
          {typeNavigation === "primary" && ( 
            <Center>
              <HStack>
                <Button onPress={handleNotifications} bg="transparent">
                  <Icon as={NotificationsIcon} />
                </Button>
              </HStack>
            </Center>
          )}
        </HStack>
      </Box>
    </Center>
  );
};

export default Header;