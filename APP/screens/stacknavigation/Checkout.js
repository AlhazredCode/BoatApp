import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import { 
  Box, 
  Text, 
  Input, 
  InputField, 
  FormControl, 
  FormControlLabel, 
  FormControlLabelText, 
  VStack, 
  Button, 
  ButtonText ,
  Pressable
} from "../../../components/index";
import { gluestackUIConfig } from "../../../components/gluestack-ui.config";
import { useNavigation } from '@react-navigation/native';
import { useBackground, Background } from '../../components/Background';

const { width: ww, height: wh } = Dimensions.get("window");
const checkoutData = {
  restaurant: {
    name: "Delicious Burgers",
    address: "123 Main Street, Cityville",
  },
  orderItems: [
    {
      id: 1,
      name: "Classic Burger",
      quantity: 2,
      price: 6.50,
    },
    {
      id: 2,
      name: "French Fries",
      quantity: 1,
      price: 3.00,
    },
    {
      id: 3,
      name: "Soda",
      quantity: 2,
      price: 2.50,
    },
  ],
  deliveryFee: 4.99,
  subtotal: 21.00,
  tax: 1.50,
  total: 27.49,
  paymentMethod: {
    type: "card",
    last4Digits: "4242",
  },
  deliveryAddress: {
    street: "456 Oak Avenue",
    city: "Townsville",
    zipCode: "12345",
  },
};
export default function Checkout() {
  const navigation = useNavigation()
  return (
    <>
   <Background color='Surfaces1'>
     <Box flex={1} w={ ww * 0.9} alignSelf='center' mt={wh * 0.025}>
          <Text color="$text700" ff='Inter-Bold' fs={wh * 0.04} mb={wh * 0.01}>Checkout</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box
                   sx={useBackground("Surfaces2")}
                   rounded="$lg"
                   style={{
                     shadowColor: "#000",
                     shadowOffset: { width: 0, height: 2 },
                     shadowOpacity: 0.23,
                     shadowRadius: 2.62,
                     elevation: 4,
                   }}
                   mb={ww * 0.04}
                   p={ww * 0.04}
            >
              <Text  color="$text500" ff='Inter-Bold' fs={wh * 0.025}>Restaurant:</Text>
              <Text>{checkoutData.restaurant.name}</Text>
              <Text>{checkoutData.restaurant.address}</Text>
            </Box>
                    <Box
            sx={useBackground("Surfaces2")}
            rounded="$lg"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}
            mb={ww * 0.04}
            p={ww * 0.04}
                    >
              <Text color="$text500" ff='Inter-Bold' fs={wh * 0.025}>Delivery Address:</Text>
              <Text>{checkoutData.deliveryAddress.street}</Text>
              <Text>{checkoutData.deliveryAddress.city}, {checkoutData.deliveryAddress.zipCode}</Text>
                 
                    </Box>
                    <Box
            sx={useBackground("Surfaces2")}
            rounded="$lg"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}
            mb={ww * 0.04}
            p={ww * 0.04}
                    >
              <Text color="$text500" ff='Inter-Bold' fs={wh * 0.025}>Payment Method:</Text>
              <Text>Paypal</Text>
                 
                    </Box>
            <Box
            Box
            sx={useBackground("Surfaces2")}
            rounded="$lg"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}
            mb={ww * 0.04}
            p={ww * 0.04}
            >
              <Text color="$text500" ff='Inter-Bold' fs={wh * 0.025}>Order Items:</Text>
              {checkoutData.orderItems.map((item) => (
                <View key={item.id}>
                  <Text>{item.name} x{item.quantity}</Text>
                  <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                </View>
              ))}
            </Box>
          </ScrollView>
        </Box>
        <Box 
           sx={useBackground("Surfaces1")}
           rounded="$lg"
           style={{
             shadowColor: "#000",
             shadowOffset: { width: 0, height: 2 },
             shadowOpacity: 0.15,
             shadowRadius: 2,
             elevation: 2,
           }}
           m={ww * 0.05}
           p={ww * 0.02}
           >
            <Text color="$text400" ff='Inter-SemiBold' fs={wh * 0.015} >Subtotal: ${(checkoutData.subtotal).toFixed(2)}</Text>
            <Text color="$text400" ff='Inter-SemiBold' fs={wh * 0.015}>Delivery Fee: ${(checkoutData.deliveryFee).toFixed(2)}</Text>
            <Text color="$text400" ff='Inter-SemiBold' fs={wh * 0.015}>Tax: ${(checkoutData.tax).toFixed(2)}</Text>
            <Text  color="$success400" ff='Inter-Bold' fs={wh * 0.025}>Total: ${(checkoutData.total).toFixed(2)}</Text>
          </Box>
           <Pressable onPress={() => navigation.navigate("Home")} bg="$tertiary200" p={ww * 0.025} mb={ww * 0.05} mx={ww * 0.05} rounded="$lg">
           <Text textAlign="center" color="$text50" ff="Inter-SemiBold"> Place Order </Text>
         </Pressable>
   </Background>
       </>
    
  );
}
