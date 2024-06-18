import { View, Dimensions } from "react-native";
import React from "react";
import {
  Box,
  Icon,
  Input,
  InputField,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
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
import AppLogo from "../../../assets/images/AppIcon.png";
import {Background, useBackground} from "../../components/Background";

const { width: ww, height: wh } = Dimensions.get("window");
const Colors = gluestackUIConfig.tokens.colors;
const Welcome = ({ navigation }) => {
  return (
    <>
   
        <Center h={wh}  sx={useBackground('primary')}>
          <Box w={ww * 0.8} px={ww * 0.05} py={wh * 0.02} borderRadius="$xl"
           sx={useBackground('primaryLight')}>
            <Center >
              <Image
                my={wh * 0.02}
                h={ww * 0.25}
                w={ww * 0.5}
                resizeMode="contain"
                alt="Boat Buddy"
                source={AppLogo}
              />
            </Center>
            <Text  ff="Inter-Bold" color="$primary1000" textAlign="center" my={wh * 0.005} fontSize={ww * 0.06}>
              Welcome Sailor
            </Text>
            <Text  ff="Inter-SemiBold" textAlign="center" my={wh * 0.005} fontSize={ww * 0.035} color="$text500">
              MOBILIS IN MOBILI
            </Text>
            <Box my={wh * 0.02}>
              <Button
                action="secondary"
                onPress={() => navigation.navigate("Login")}
                mb={wh * 0.015}
                size="lg"
              >
                <ButtonText textAlign="center">Login</ButtonText>
              </Button>
              <Button
                action="primary"
                onPress={() => navigation.navigate("SignUp")}
                mb={wh * 0.01}
                size="lg"
              >
                <ButtonText textAlign="center">Sign Up</ButtonText>
              </Button>
            </Box>
          </Box>
        </Center>
    
    </>
  );
};

export default Welcome;
