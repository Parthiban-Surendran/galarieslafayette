// SearchStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ProductScreen from '../screens/ProductScreen'; // <-- Add this

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name="Product"
        component={ProductScreen}
      /> */}

<Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />

      
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{ title: 'Results' }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
