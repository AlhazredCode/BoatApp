import React, { useState, useRef } from "react";
import { View, Modal, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";
import { Image, Center, Box, Pressable, Text } from "../../components/index";
import { gluestackUIConfig } from "../../components/gluestack-ui.config";
import NavigatorIcon from "../../assets/images/NavigatorIcon.png";
import * as Animatable from "react-native-animatable";
import AppIcon from "../../assets/images/AppName.png";

const Colors = gluestackUIConfig.tokens.colors;
const { width: ww, height: wh } = Dimensions.get("window");

const MenuButton = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const iconRef = useRef(null);
  const closeIconRef = useRef(null);

  const handlePress = () => {
    iconRef.current.rotate(360).then(() => {
      setIsModalVisible(true);
    });
  };

  const handleClosePress = () => {
    closeIconRef.current.rotate(360).then(() => {
      setIsModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Box justifyContent="center" flex={1}>
            <Image
        bg="white"
        height={ww * 0.3}
        width={ww * 0.3}
        rounded={500}
        borderColor="white"
        borderWidth={6}
        mb={ww * 0.02}
        alt="Notification Info"
        source="https://lh3.googleusercontent.com/d/11ca9qe_XNxKWgwNIgxvPa8jQE5xzTLYf"
        alignSelf="center"
      />
        <Text ff="Inter-Bold" color="$tertiary600" fontSize={wh * 0.035} textAlign="center" my={ww * 0.02}>Alvaro Celorio</Text>
              <Pressable
                rounded="$xl"
                m={ww * 0.025}
                p={ww * 0.04}
                bg="$primary300"
                onPress={() => {
                  navigation.navigate("Home");
                  setIsModalVisible(false);
                }}
              >
                <Text
                  textAlign="center"
                  fs={wh * 0.02}
                  ff="Inter-SemiBold"
                  color="$primary1000"
                >
                  Home
                </Text>
              </Pressable>
              <Pressable
                rounded="$xl"
                m={ww * 0.025}
                p={ww * 0.04}
                bg="$primary300"
                onPress={() => {
                  navigation.navigate("Profile");
                  setIsModalVisible(false);
                }}
              >
                <Text
                  textAlign="center"
                  fs={wh * 0.02}
                  ff="Inter-SemiBold"
                  color="$primary1000"
                >
                  Profile
                </Text>
              </Pressable>
              <Pressable
                rounded="$xl"
                m={ww * 0.025}
                p={ww * 0.04}
                bg="$primary300"
                onPress={() => {
                  navigation.navigate("Payment");
                  setIsModalVisible(false);
                }}
              >
                <Text
                  textAlign="center"
                  fs={wh * 0.02}
                  ff="Inter-SemiBold"
                  color="$primary1000"
                >
                  Payments
                </Text>
              </Pressable>
              <Pressable
                rounded="$xl"
                m={ww * 0.025}
                p={ww * 0.03}
                bg="$tertiary200"
                onPress={() => {
                  navigation.goBack();
                  setIsModalVisible(false);
                }}
              >
                <Text
                  textAlign="center"
                  fs={wh * 0.02}
                  ff="Inter-SemiBold"
                  color="$text50"
                >
                  Log Out
                </Text>
              </Pressable>
              <Image
                height={ww * 0.05}
                width={ww * 0.5}
                alt="App Icon"
                source={AppIcon}
                alignSelf="center"
                my={wh * 0.02}
              />
            </Box>
            <Pressable
              onPress={handleClosePress}
              style={[styles.button, { backgroundColor: "transparent" }]}
            >
              <Animatable.View
                ref={closeIconRef}
                style={{ width: ww * 0.1, height: ww * 0.1 }}
              >
                <Image
                  height={ww * 0.1}
                  width={ww * 0.1}
                  alt="Close Menu Icon"
                  source={NavigatorIcon}
                />
              </Animatable.View>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={handlePress} style={styles.button}>
        <Animatable.View
          ref={iconRef}
          style={{ width: ww * 0.1, height: ww * 0.1 }}
        >
          <Image
            height={ww * 0.1}
            width={ww * 0.1}
            alt="MenuIcon"
            source={NavigatorIcon}
          />
        </Animatable.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (otros estilos) ...
  container: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    zIndex: 10,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: Colors.text200,
    width: ww,
    height: ww * 0.1,
    shadowOffset: {
      // Keep for iOS if desired
      width: 0,
      height: -8, // Negative value for upward shadow (iOS only)
    },
    shadowOpacity: 0.3, // Adjust opacity as needed
    shadowRadius: 4, // Adjust blur radius for desired softness
    shadowColor: "black",
    elevation: 4, // Add elevation for Android (adjust value for desired height)
  },
  button: {
    position: "absolute",
    bottom: 0,
    marginBottom: ww * 0.01,
    alignSelf: "center",
    width: ww * 0.16,
    backgroundColor: Colors.secondary400,
    borderRadius: wh * 0.2,
    padding: ww * 0.03,
    zIndex: 20,
    borderColor: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContent: {
    height: wh * 0.9,
    backgroundColor: Colors.tertiary100,
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 1, // Asegurar que esté por encima
  },
});

export default MenuButton;
