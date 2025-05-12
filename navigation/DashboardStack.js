// navigation/DashboardStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import ProductScreen from '../screens/ProductScreen';
import PreparePurchaseScreen from '../screens/PreparePurchaseScreen';
import AllProducts from '../screens/AllProductsScreen';
import BasketScreen from '../screens/BasketScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Purchase" component={PreparePurchaseScreen} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="Basket" component={BasketScreen} />

    </Stack.Navigator>
  );
}
