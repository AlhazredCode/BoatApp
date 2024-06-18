import { View, Dimensions } from "react-native";
import React from "react";
import MenuButton from "../../components/MenuButton";
import {
  FontAwesome6,
  MaterialIcons,
  Octicons,
  Ionicons,
  Entypo
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

const AlertCircleIcon = () => {
  return (
    <Octicons name={"arrow-left"} size={ww * 0.06} color={Colors.primary950} />
  );
};

const PassWordIcon = () => {
  return (
    <MaterialIcons name={"password"} size={ww * 0.06} color={Colors.secondary800} />
  );
};

const CameraIcon = () => {
  return (
    <Entypo name={"camera"} size={ww * 0.06} color={Colors.secondary800} />
  );
};


export default function Profile() {
  return (
    <>
      <Background color="secondaryLight2">
        <View flex={1} width={ww*0.9} marginTop={wh *0.05} alignSelf="center">
        <Image
        bg="white"
        height={ww * 0.35}
        width={ww * 0.35}
        rounded={500}
        borderColor="white"
        borderWidth={6}
        mb={ww * 0.02}
        alt="Notification Info"
        source="https://lh3.googleusercontent.com/d/11ca9qe_XNxKWgwNIgxvPa8jQE5xzTLYf"
        alignSelf="center"
      />
        <Box
    alignSelf="center"
    rounded="$xl"
    style={{
      borderColor: Colors.secondary50,
      borderWidth: 3,
    }}
    my={ww * 0.04}
    p={ww * 0.04}
            >
     
        
                    <Icon as={CameraIcon} />
    
         
            </Box>
          <FormControl>
            <FormControlLabel mb="$1">
              <FormControlLabelText color="$text300" ff="Inter-SemiBold">
                Name
              </FormControlLabelText>
            </FormControlLabel>
            <Input variant="underlined">
              <InputField
                type="text"
                placeholder="Name"
                ff="Inter-SemiBold"
                placeholderTextColor="$secondary300"
                color="$secondary800"
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
            <FormControlLabel mb="$1">
              <FormControlLabelText color="$text300" ff="Inter-SemiBold">
                Mail
              </FormControlLabelText>
            </FormControlLabel>
            <Input variant="underlined">
              <InputField
                type="text"
                placeholder="hello@boatbuddy.com"
                ff="Inter-SemiBold"
                placeholderTextColor="$secondary300"
                color="$secondary800"
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Please enter a valid email address.
              </FormControlErrorText>
            </FormControlError>
          
            <FormControlLabel mb="$1">
              <FormControlLabelText color="$text300" ff="Inter-SemiBold">
                Phone Number
              </FormControlLabelText>
            </FormControlLabel>
            <Input variant="underlined">
              <InputField
                type="text"
                placeholder="+ 1 000 000 000"
                ff="Inter-SemiBold"
                placeholderTextColor="$secondary300"
                color="$secondary800"
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Invalid phone number.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Box
    
            rounded="$xl"
            style={{
              borderColor: Colors.secondary50,
              borderWidth: 3,
            }}
            my={ww * 0.04}
            p={ww * 0.04}
                    >
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="$text100" ff='Inter-Bold' fs={wh * 0.02}>Change password</Text>
                            <Icon as={PassWordIcon}/>
              </HStack>
                 
                    </Box>

                    
        </View>
        <Box >
          <Box
          
            mb={ww * 0.03}
            mx={ww * 0.05}>
            <FormControlLabel mb="$1">
                  <FormControlLabelText color="$text300" ff="Inter-SemiBold">
                    Enter Password to Conffirm
                  </FormControlLabelText>
                </FormControlLabel>
                <Input variant="underlined">
                  <InputField
                    type="password"
                    placeholder="********"
                    ff="Inter-SemiBold"
                    placeholderTextColor="$secondary800"
                    color="$secondary800"
                  />
                </Input>
          </Box>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            bg="$secondary400"
            p={ww * 0.025}
            mb={ww * 0.05}
            mx={ww * 0.05}
            rounded="$lg"
          >
            <Text textAlign="center" color="$text50" ff="Inter-SemiBold">
          
              Update Profile
            </Text>
          </Pressable>
        </Box>
      </Background>
    </>
  );
}