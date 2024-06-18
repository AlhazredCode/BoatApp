import { View, Dimensions } from "react-native";
import React from "react";
import MenuButton from "../../components/MenuButton";
import {
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  Octicons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import {
  Box,
  Icon,
  Input,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlError,
  HStack,
  VStack,
  Center,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
  Image,
  Pressable,
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { Background } from "../../components/Background";

const { width: ww, height: wh } = Dimensions.get("window");
const Colors = gluestackUIConfig.tokens.colors;


const CardIcon = () => {
  return (
    <AntDesign
      name={"creditcard"}
      size={ww * 0.06}
      color={Colors.primary1000}
    />
  );
};

const VisaIcon = () => {
  return (
    <FontAwesome
      name={"cc-visa"}
      size={ww * 0.06}
      color={Colors.primary600}
    />
  );
};

const PaypalIcon = () => {
  return (
    <Entypo
      name={"paypal"}
      size={ww * 0.06}
      color={Colors.primary600}
    />
  );
};

export default function Payment() {
  return (
    <>
      <Background color="primaryLight2">
        <View
          flex={1}
          width={ww * 0.9}
          marginTop={wh * 0.05}
          alignSelf="center"
        >
          <Text
            color="$primary1000"
            ff="Inter-Bold"
            fs={wh * 0.04}
            mb={wh * 0.01}
          >
            Payment
          </Text>
          <Box
            rounded="$xl"
            style={{
              borderColor: Colors.primary200,
              borderWidth: 3,
            }}
            my={ww * 0.015}
            p={ww * 0.04}
          >
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="$text400" ff="Inter-Bold" fs={wh * 0.017}>
           Paypal hello@boatbuddy.com
              </Text>
              <Icon as={PaypalIcon} />
            </HStack>
          </Box>
          <Box
            rounded="$xl"
            style={{
              borderColor: Colors.primary200,
              borderWidth: 3,
            }}
            my={ww * 0.015}
            p={ww * 0.04}
          >
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="$text400" ff="Inter-Bold" fs={wh * 0.017}>
            Card ending in 4548
              </Text>
              <Icon as={VisaIcon} />
            </HStack>
          </Box>
          <Box
            rounded="$xl"
            style={{
              borderColor: Colors.primary500,
              borderWidth: 3,
            }}
            my={ww * 0.04}
            p={ww * 0.04}
          >
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="$text400" ff="Inter-Bold" fs={wh * 0.02}>
                Add payment method
              </Text>
              <Icon as={CardIcon} />
            </HStack>
          </Box>
        </View>
        <Box>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            bg="$primary700"
            p={ww * 0.025}
            mb={ww * 0.05}
            mx={ww * 0.05}
            rounded="$lg"
          >
            <Text textAlign="center" color="$text50" ff="Inter-SemiBold">
              Update Payment Info
            </Text>
          </Pressable>
        </Box>
      </Background>
    </>
  );
}
