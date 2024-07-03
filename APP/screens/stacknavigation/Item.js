import React from "react";
import {
  Box,
  Text,
  Image,
  Center,
  HStack,
  VStack,
  ScrollView,
  Icon,
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ItemCard from "./ItemCard";
import { Dimensions } from "react-native";
import data from "../../../API/menudata.json";
import { useBackground } from "../../components/Background";
const { width: ww, height: wh } = Dimensions.get("window");
import {
  FontAwesome6,
  MaterialIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import PagerView from "react-native-pager-view";

const Tab = createMaterialTopTabNavigator();

const Colors = gluestackUIConfig.tokens.colors;

const Location = () => {
  return (
    <Ionicons
      name={"location-sharp"}
      size={ww * 0.04}
      color={Colors.secondary400}
    />
  );
};

const RateIcon = () => {
  return (
    <Octicons name={"star-fill"} size={ww * 0.04} color={Colors.info400} />
  );
};

const TimeIcon = () => {
  return <Octicons name={"clock"} size={ww * 0.04} color={Colors.warning600} />;
};

export default function Item() {
  const categories = Array.from(
    new Set(data.data.map((item) => item.category))
  );

  return (
    <>
    <SafeAreaView flex={1}>
      <Image
        bg="white"
        height={ww * 0.4}
        width={ww}
        mb={ww * 0.02}
        alt="Notification Info"
        source="https://lh3.googleusercontent.com/d/11ca9qe_XNxKWgwNIgxvPa8jQE5xzTLYf"
        alignSelf="center"
      />
      <Center>
        <Box w={ww * 0.9}>
          <Text ff="Inter-ExtraBold" fs={wh * 0.03} color="$text700">
            Restaurant Title
          </Text>
          <HStack space="xs" alignItems="center" mb={wh * 0.005}>
            <Icon as={Location} />
            <Text ff="Inter-SemiBold" fs={wh * 0.02} color="$text500">
              Restaurant Location
            </Text>
          </HStack>
          <HStack space="sm" alignItems="center" mb={wh * 0.01}>
            <Icon as={RateIcon} />
            <Text ff="Inter-Medium" fs={wh * 0.015} color="$text400">
              4.8
            </Text>
            <Icon as={TimeIcon} />
            <Text ff="Inter-Medium" fs={wh * 0.015} color="$text400">
              15m
            </Text>
            <Text
              ff="Inter-ExtraBold"
              color="$success500"
              fs={wh * 0.015}
              letterSpacing={ww * 0.005}
            >
              $$
            </Text>
          </HStack>
        </Box>
      </Center>
      <Tab.Navigator>
        {categories.map((category) => (
          <Tab.Screen
            key={category}
            name={category}
            sx={useBackground("Surfaces1")}
          >
            {(props) => <ItemCardContainer {...props} category={category} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
      </SafeAreaView>
    </>
  );
}

const ItemCardContainer = ({ category }) => {
  const filteredData = data.data.filter((item) => item.category === category);

  return (
    <ScrollView>
      <Center>
        <Box w="90%" mt={4}>
          <VStack alignItems="center">
            <ItemCard filteredData={filteredData} />
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};
