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
import AppIcon from "../../../assets/images/AppName.png";
import { ButtonIcon } from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import {Background, useBackground} from "../../components/Background";
import { AntDesign, Octicons } from "@expo/vector-icons"; 

const { width: ww, height: wh } = Dimensions.get("window");
const Colors = gluestackUIConfig.tokens.colors;

const AlertCircleIcon = () => {
  return (
    <Octicons name={"arrow-left"} size={ww * 0.06} color={Colors.primary950} />
  );
};


const BackIcon = () => {
  return (
    <Octicons name={"arrow-left"} size={ww * 0.12} color={Colors.tertiary500} />
  );
};

const GoogleIcon = () => {
  return (
    <AntDesign name={"google"} size={ww * 0.06} color={Colors.tertiary50} />
  );
};

const AppleIcon = () => {
  return (
    <AntDesign name={"apple1"} size={ww * 0.06} color={Colors.tertiary50} />
  );
};


export default function Login({navigation}) {

  return (
    <>  
    <Background color="primaryHeavy">
      <Center>
        <Box w={ww * 0.9} h={wh} justifyContent="center">
          <FormControl
            px={ww * 0.1}
            py={ww * 0.1}
            sx={useBackground('primaryLight')}
            borderRadius={ww * 0.025}
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={false}
          >
            <Center>
              <Image
                height={ww * 0.065}
                width={ww * 0.65}
                alt="App Icon"
                source={AppIcon}
              />
            </Center>
            <Text ff="Inter-Bold" color="$tertiary600" fontSize={wh * 0.035} textAlign="center" mt={ww * 0.02}>Hello Again </Text>
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText  color="$text500"  ff="Inter-SemiBold">Mail</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type="text"sd
                  placeholder="hello@boatbuddy.com"
                  backgroundColor="$tertiary50"
                  ff="Inter-SemiBold"
                  placeholderTextColor="$primary1000"
                  color="$primary1000"
                 
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$tertiary400" ff="Inter-Medium">
                 Please enter a valid email
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <FormControlLabel mb="$1">
                <FormControlLabelText  color="$text500"  ff="Inter-SemiBold">Password</FormControlLabelText>
              </FormControlLabel>
              <Input >
                <InputField
                  type="password"
                  backgroundColor="$tertiary50"
                  placeholder="*****"
                  ff="Inter-SemiBold"
                  placeholderTextColor="$primary1000"
                  color="$primary1000"
                
                />
              </Input>
              <FormControlHelper>
                <FormControlHelperText color="$tertiary400" ff="Inter-Medium">
                  Must be at least 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  At least 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </Box>
            <Box>
              <Button
              action="secondary"
                onPress={() => navigation.navigate("MainStack")}
              my={wh * 0.02} size="lg">
                <ButtonText textAlign="center">Login</ButtonText>
              </Button>
            </Box>
            <Box>
              <ButtonGroup justifyContent="space-between" >
                <Button w="48%" h={ww * 0.1} size="lg" bg="$tertiary300">
                <ButtonIcon as={GoogleIcon}/>
                </Button>
                <Button w="48%" h={ww * 0.1} size="lg" bg="$tertiary300">
                <ButtonIcon as={AppleIcon}/>
                </Button>
                
              </ButtonGroup>
            </Box>
          </FormControl>
        </Box>
      </Center>
    
      <Center>
        <Pressable
        onPress={() =>navigation.goBack()}
        backgroundColor="$tertiary100"
        px={ww * 0.03}
        py={ww * 0.01}
        borderRadius= "$2xl"
        position="absolute"
        bottom={0}
        mb={wh * 0.1}>
          <Icon as={BackIcon} />
          </Pressable>
      </Center>
      </Background>

    </>
  );
}
