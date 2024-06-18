import React from "react";
import { Dimensions } from "react-native";
import {
  Box,
  Text,
  Center,
  Button,
  ButtonText,
  ScrollView,
  HStack,
  VStack,
  Image,
  Input,
  InputField,
  InputIcon,
  Pressable,
  Icon,
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";

import { useNavigation } from "@react-navigation/native";
import { Background, useBackground } from "../../components/Background";
import restaurantData from "../../../API/restaurantdata.json";
import categoriesData from "../../../API/categoriesdata.json";

import {
  FontAwesome6,
  MaterialIcons,
  Octicons,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const { width: ww, height: wh } = Dimensions.get("window");
const data = restaurantData.Restaurants;
const categories = categoriesData.notifications;
const Colors = gluestackUIConfig.tokens.colors;

const SearchIcon = () => {
  return (
    <Octicons name={"search"} size={ww * 0.05} color={Colors.primary800} />
  );
};

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
  return (
    <Octicons name={"clock"} size={ww * 0.04} color={Colors.warning600} />
  );
};

const RestaurantIcon = () => {
  return (
    <MaterialIcons
      name={"restaurant"}
      size={ww * 0.05}
      color={Colors.secondary300}
    />
  );
};

export default function Feed() {
  const navigation = useNavigation();
  return (
    <>
      <Background color="Surfaces1">
      
        <Center>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack>
              {categories &&
                categories.map((category, index) => (
                  <Box
                    rounded="$lg"
                    w={ww * 0.2}
                    mt={ww * 0.025}
                    mr={ww * 0.02}
                  >
                    <Image
                      alignSelf="center"
                      height={ww * 0.15}
                      width={ww * 0.15}
                      rounded="$xl"
                      alt="Notification Info"
                      source={category.image}
                    />
                  </Box>
                ))}
            </HStack>
          </ScrollView>
          <Box w={ww * 0.9} mt={wh * 0.002}>
            <Input
              h={wh * 0.05}
              my={wh * 0.01}
              px={ww * 0.04}
              alignItems="center"
              sx={useBackground("Surfaces3")}
            >
              <InputIcon as={SearchIcon} />
              <InputField>
                <Text color="$primary800"> Search Here</Text>
              </InputField>
            </Input>
          </Box>
        </Center>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center>
            <Box w={ww * 0.9} my={wh * 0.015}>
              {data &&
                data.map((item, index) => (
                  <Pressable
                    rounded="$lg"
                    key={index}
                    sx={useBackground("Surfaces2")}
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.23,
                      shadowRadius: 2.62,
                      elevation: 4,
                    }}
                    mb={ww * 0.04}
                    onPress={() => navigation.navigate("Item")}
                  >
                    <Image
                      height={ww * 0.35}
                      resizeMode="cover"
                      width="100%"
                      borderTopRightRadius="$lg"
                      borderTopLeftRadius="$lg"
                      alt="Notification Info"
                      source={item.restaurant.image_url}
                    />
                    <Box px={ww * 0.04} pb={ww * 0.04} pt={ww * 0.02}>
                      <Text
                        fontFamily="$heading"
                        fs={ww * 0.05}
                        color="$text700"
                      >
                        {item.restaurant.name}
                      </Text>
                      <HStack alignItems="center" mb={wh * 0.0025}>
                        <Icon as={Location} />
                        <Text
                          ml={ww * 0.01}
                          fs={ww * 0.03}
                          ff="Inter-SemiBold"
                          color="$text500"
                        >
                          Sample Av. 123 Street, Miami
                        </Text>
                      </HStack>
                      <HStack space="sm">
                        <Icon as={RateIcon} />
                        <Text
                          
                          fs={ww * 0.03}
                          ff="Inter-SemiBold"
                          color="$text500"
                        >
                          {item.restaurant.rating}
                        </Text>
                        <Icon as={TimeIcon} />
                        <Text
                        
                          fs={ww * 0.03}
                          ff="Inter-SemiBold"
                          color="$text500"
                        >
                          {item.restaurant.delivery_time}
                        </Text>
                        <Text
                          ml={ww * 0.01}
                          fs={ww * 0.03}
                          ff="Inter-ExtraBold"
                          color="$success500"
                          letterSpacing={ww * 0.005}
                        >
                          {item.restaurant.price_range}
                        </Text>
                      </HStack>
                    </Box>
                  </Pressable>
                ))}
            </Box>
          </Center>
        </ScrollView>
      </Background>
    </>
  );
}
