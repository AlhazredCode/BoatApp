import { View, Dimensions } from "react-native";
import React, { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
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
import AppIcon from "../../../assets/images/AppNameWhite.png";
import { ButtonIcon } from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { Background, useBackground } from "../../components/Background";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";

const { width: ww, height: wh } = Dimensions.get("window");
const Colors = gluestackUIConfig.tokens.colors;

const AlertCircleIcon = () => {
  return (
    <Octicons name={"arrow-left"} size={ww * 0.06} color={Colors.primary950} />
  );
};

const BackIcon = () => {
  return (
    <Octicons
      name={"arrow-left"}
      size={ww * 0.12}
      color={Colors.secondary400}
    />
  );
};

export default function SignUp({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Background color="secondary">
        <Center>
          <Box w={ww * 0.9} h={wh} justifyContent="center">
            <FormControl
              px={ww * 0.1}
              py={ww * 0.1}
              sx={useBackground("secondaryLight")}
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
              <Text
                ff="Inter-Bold"
                color="$secondary800"
                fontSize={wh * 0.03}
                textAlign="center"
                my={ww * 0.02}
              >
                Start your trip{" "}
              </Text>
              <View height={wh * 0.375} width={ww * 0.7}>
                <ProgressSteps
                  activeStepNumColor={"white"}
                  disabledStepNumColor={Colors.secondary50}
                  completedStepNumColor={"white"}
                  progressBarColor={Colors.secondary500}
                  completedProgressBarColor={"#522EA8"}
                  completedStepIconColor={"#522EA8"}
                  marginBottom={wh * 0.02}
                  activeStepIconColor={Colors.secondary300}
                  activeStepIconBorderColor={Colors.secondary400}
                  disabledStepIconColor={Colors.secondary300}
                  activeLabelColor={"white"}
                  labelColor={Colors.tertiary300}
                  activeStep={currentStep}
                >
                  <ProgressStep removeBtnRow={true}>
                    <Box>
                      <FormControlLabel mb="$1">
                        <FormControlLabelText
                          color="$text300"
                          ff="Inter-SemiBold"
                        >
                          Name
                        </FormControlLabelText>
                      </FormControlLabel>
                      <Input variant="underlined">
                        <InputField
                          type="text"
                          placeholder="Name"
                          ff="Inter-SemiBold"
                          placeholderTextColor="$secondary800"
                          color="$secondary800"
                        />
                      </Input>
                      <FormControlHelper>
                        <FormControlHelperText
                          color="$secondary400"
                          ff="Inter-Medium"
                        >
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
                      <FormControlLabel mb="$1">
                        <FormControlLabelText
                          color="$text300"
                          ff="Inter-SemiBold"
                        >
                          Mail
                        </FormControlLabelText>
                      </FormControlLabel>
                      <Input variant="underlined">
                        <InputField
                          type="text"
                          placeholder="hello@boatbuddy.com"
                          ff="Inter-SemiBold"
                          placeholderTextColor="$secondary800"
                          color="$secondary800"
                        />
                      </Input>
                      <FormControlHelper>
                        <FormControlHelperText
                          color="$secondary400"
                          ff="Inter-Medium"
                        >
                          Must be at least 6 characters.
                        </FormControlHelperText>
                      </FormControlHelper>
                      <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                          At least 6 characters are required.
                        </FormControlErrorText>
                      </FormControlError>
                      <Button
                        action="secondary"
                        onPress={handleNext}
                        my={wh * 0.015}
                        size="lg"
                      >
                        <ButtonText textAlign="center">Next</ButtonText>
                      </Button>
                    </Box>
                  </ProgressStep>
                  <ProgressStep removeBtnRow={true}>
                    <Box>
                      <FormControlLabel mb="$1">
                        <FormControlLabelText
                          color="$text300"
                          ff="Inter-SemiBold"
                        >
                          Password
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
                      <FormControlHelper>
                        <FormControlHelperText
                          color="$secondary400"
                          ff="Inter-Medium"
                        >
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
                      <FormControlLabel mb="$1">
                        <FormControlLabelText
                          color="$text300"
                          ff="Inter-SemiBold"
                        >
                          Re-enter Password
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
                      <FormControlHelper>
                        <FormControlHelperText
                          color="$secondary400"
                          ff="Inter-Medium"
                        >
                          Re type your password
                        </FormControlHelperText>
                      </FormControlHelper>
                      <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                          At least 6 characters are required.
                        </FormControlErrorText>
                      </FormControlError>

                      <ButtonGroup
                        justifyContent="space-between"
                        my={wh * 0.015}
                      >
                        <Button
                          w="48%"
                          h={ww * 0.1}
                          size="lg"
                          bg="$secondary400"
                          onPress={handlePrevious}
                        >
                          <ButtonText textAlign="center">Back</ButtonText>
                        </Button>
                        <Button
                          w="48%"
                          h={ww * 0.1}
                          size="lg"
                          bg="$secondary500"
                          onPress={handleNext}
                        >
                          <ButtonText textAlign="center">Next</ButtonText>
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </ProgressStep>
                  <ProgressStep removeBtnRow={true}>
                    <Box>
                      <FormControlLabel mb="$1">
                        <FormControlLabelText
                          color="$text300"
                          ff="Inter-SemiBold"
                        >
                          Phone Number
                        </FormControlLabelText>
                      </FormControlLabel>
                      <Input variant="underlined">
                        <InputField
                          type="text"
                          placeholder="+ 1 000 000 000"
                          ff="Inter-SemiBold"
                          placeholderTextColor="$secondary800"
                          color="$secondary800"
                        />
                      </Input>
                      <FormControlHelper>
                        <FormControlHelperText
                          color="$secondary400"
                          ff="Inter-Medium"
                        >
                          Must be at least 6 characters.
                        </FormControlHelperText>
                      </FormControlHelper>
                      <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                          At least 6 characters are required.
                        </FormControlErrorText>
                      </FormControlError>
                      <ButtonGroup justifyContent="space-between" mt={wh * 0.1}>
                        <Button
                          w="48%"
                          h={ww * 0.1}
                          size="lg"
                          bg="$secondary400"
                          onPress={handlePrevious}
                        >
                          <ButtonText textAlign="center">Back</ButtonText>
                        </Button>
                        <Button
                          w="48%"
                          h={ww * 0.1}
                          size="lg"
                          bg="$tertiary400"
                          onPress={handleNext}
                        >
                          <ButtonText textAlign="center">Create</ButtonText>
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </ProgressStep>
                </ProgressSteps>
              </View>
            </FormControl>
          </Box>
        </Center>

        <Center>
          <Pressable
            onPress={() => navigation.goBack()}
            backgroundColor="$secondary100"
            px={ww * 0.03}
            py={ww * 0.01}
            borderRadius="$2xl"
            position="absolute"
            bottom={0}
            mb={wh * 0.1}
          >
            <Icon as={BackIcon} />
          </Pressable>
        </Center>
      </Background>
    </>
  );
}
