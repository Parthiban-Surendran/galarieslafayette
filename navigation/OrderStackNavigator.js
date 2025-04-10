// OrderStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../screens/OrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import ProductScreen from '../screens/ProductScreen'; // adjust path as needed

const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OrderScreen" component={OrderScreen} />
    <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />

  </Stack.Navigator>
);

export default OrderStackNavigator; // ✅ Make sure you export the component
