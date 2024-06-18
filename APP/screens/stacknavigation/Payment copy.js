import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const paymentData = {
  preferredMethod: {
    type: "card",
    last4Digits: "4242",
  },
  otherMethods: [
    {
      id: 1,
      type: "PayPal",
      email: "user@example.com",
    },
  ],
};

export default function Payment() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Settings</Text>

      {/* Método de pago preferido */}
      <Text style={styles.subtitle}>Preferred Payment Method:</Text>
      <View style={styles.paymentMethod}>
        <Text>{paymentData.preferredMethod.type} ending in {paymentData.preferredMethod.last4Digits}</Text>
      </View>

      {/* Otros métodos de pago */}
      <Text style={styles.subtitle}>Other Payment Methods:</Text>
      {paymentData.otherMethods.map((method) => (
        <View key={method.id} style={styles.paymentMethod}>
          <Text>{method.type} - {method.email}</Text>
        </View>
      ))}

      {/* Botón para agregar métodos de pago */}
      <Pressable onPress={() => navigation.navigate('AddPaymentMethod')}>
        <Text style={styles.addMethodButton}>+ Add Payment Method</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentMethod: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  addMethodButton: {
    color: 'blue',
    fontSize: 16,
    marginTop: 20,
  },
});