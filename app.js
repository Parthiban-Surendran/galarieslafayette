// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });







// import React, { useState, useEffect } from 'react';
// import { Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './navigation/DrawerNavigator';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync(); // Keep splash screen until fonts are loaded

// const loadFonts = async () => {
//     await Font.loadAsync({
//         'GLBader': require('./assets/fonts/glbader.ttf'),
//     });
// };

// const App = () => {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     useEffect(() => {
//         loadFonts().then(() => {
//             setFontsLoaded(true);
//             SplashScreen.hideAsync(); // Hide splash screen after loading fonts
//         });
//     }, []);

//     if (!fontsLoaded) {
//         return null; // Prevent rendering until fonts are loaded
//     }

//     // Apply the GL Bader font globally
//     Text.defaultProps = Text.defaultProps || {};
//     Text.defaultProps.style = { fontFamily: 'GLBader' };

//     return (
//         <NavigationContainer>
//             <DrawerNavigator />
//         </NavigationContainer>
//     );
// };

// export default App;







// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './navigation/DrawerNavigator';

// const App = () => {
//     return (
//         <NavigationContainer>
//             <DrawerNavigator/>
//         </NavigationContainer>
//     );
// };

// export default App;



import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.createURL("/"), "https://galarieslafayette.com"],
  config: {
    screens: {
      Home: "home",
      Favourites: "favourites",
      Basket: "basket",
      Account: "account",
      Login: "login",
      Password: "password",
      Dashboard: "dashboard",
      AccountCommon: "account-common",
      Product: "product/:id", // Example of dynamic route
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
