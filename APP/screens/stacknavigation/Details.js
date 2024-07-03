import React from "react";
import { View, Dimensions ,ScrollView, SafeAreaView} from "react-native";
import data from "../../../API/menudata.json";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Text,
  Center,
  HStack,
  VStack,
  Pressable,
  Image,
  Badge,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator, 
  CheckboxLabel
} from "../../../components/index";
import {
  FontAwesome6,
  MaterialIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";

const { width: ww, height: wh } = Dimensions.get("window");
const Colors = gluestackUIConfig.tokens.colors;

const CheckIcon = () => {
  return (
    <Octicons name={"check"} size={ww * 0.04} color={Colors.info400} />
  );
};

const Details = ({ route }) => {
  const { itemId } = route.params; // Obtiene el itemId de las props
  const item = data.data.find((item) => item.id === itemId);
  const navigation = useNavigation();
  if (!item) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Item not found.</Text>
      </View>
    );
  }

  return (
    <>
    <SafeAreaView  flex={1}>
      <Box flex={1} width={ww * 0.9} alignSelf="center" my={wh * 0.025}>
        <Image
          bg="white"
          height={ww * 0.8}
          width={ww * 0.8}
          mb={ww * 0.02}
          rounded="$xl"
          alt="Notification Info"
          source={item.img}
          alignSelf="center"
        />
        <Text ff="Inter-Bold" fontSize={ww * 0.08} color="$text700">
          {item.name}
        </Text>
        <Text   ff="Inter-Medium" fontSize={ww * 0.04} color="$text400">
          {item.category}
        </Text>
        <Text ff="Inter-ExtraBold" fontSize={ww * 0.06} color="$success500">
          $ {item.price}
        </Text>
        <Box my={8} h={2} w="100%" bg="$text300"/>
        <ScrollView showsVerticalScrollIndicator={false} > 
          <Text ff="Inter-Bold" fontSize={ww * 0.05}  color="$text600">
            Description
          </Text>
          <Text ff="Inter-Medium" fontSize={ww * 0.04} color="$text500">
            {item.description}
          </Text>
          <Text ff="Inter-Bold" mt={wh *0.01} fontSize={ww * 0.05}  color="$text600">
            Extras
          </Text>
          <HStack  my={wh *0.012} justifyContent="space-between" alignItems="center">
            <Text ff="Inter-Medium" fontSize={ww * 0.04} color="$text500"> Extra 1</Text>
            <Checkbox isInvalid={false} isDisabled={false} size="lg">
            <CheckboxIndicator >
              <CheckboxIcon as={CheckIcon}/>
              </CheckboxIndicator>
          
            </Checkbox>
          </HStack>
          <HStack my={wh *0.012} justifyContent="space-between" alignItems="center">
            <Text ff="Inter-Medium" fontSize={ww * 0.04} color="$text500"> Extra 1</Text>
            <Checkbox isInvalid={false} isDisabled={false} size="lg">
            <CheckboxIndicator >
              <CheckboxIcon as={CheckIcon}/>
              </CheckboxIndicator>
          
            </Checkbox>
          </HStack>
          <HStack my={wh *0.012} justifyContent="space-between" alignItems="center">
            <Text ff="Inter-Medium" fontSize={ww * 0.04} color="$text500"> Extra 1</Text>
            <Checkbox isInvalid={false} isDisabled={false} size="lg">
            <CheckboxIndicator >
              <CheckboxIcon as={CheckIcon}/>
              </CheckboxIndicator>
          
            </Checkbox>
          </HStack>
          <HStack my={wh *0.012} justifyContent="space-between" alignItems="center">
            <Text ff="Inter-Medium" fontSize={ww * 0.04} color="$text500"> Extra 1</Text>
            <Checkbox isInvalid={false} isDisabled={false} size="lg">
            <CheckboxIndicator >
              <CheckboxIcon as={CheckIcon}/>
              </CheckboxIndicator>
          
            </Checkbox>
          </HStack>
        </ScrollView>
      </Box>
      <Pressable onPress={() => navigation.navigate("Checkout")} bg="$secondary400" p={ww * 0.025} mb={ww * 0.05} mx={ww * 0.05} rounded="$lg">
        <Text textAlign="center" color="$text100" ff="Inter-SemiBold"> Add Item </Text>
      </Pressable>
      </SafeAreaView>
    </>
  );
};

export default Details;
