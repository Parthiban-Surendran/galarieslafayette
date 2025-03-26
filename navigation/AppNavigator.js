// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//     return (
//         <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
           
//         </Stack.Navigator>
//     );
// };

// export default AppNavigator;




import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator"; // Import the Drawer
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
      
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                </Stack.Navigator>
  
    );
}
