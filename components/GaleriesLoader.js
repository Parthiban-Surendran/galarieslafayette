// import React, { useEffect, useRef } from "react";
// import { Animated, Text, View, StyleSheet, Easing, Image } from "react-native";
// import galarieslogo from "../assets/galerieslogo.png";
// export default function GaleriesLoader (){
//     const rotateAnim = useRef(new Animated.Value(0)).current;
  
//     useEffect(() => {
//       Animated.loop(
//         Animated.timing(rotateAnim, {
//           toValue: 1,
//           duration: 2000,
//           easing: Easing.linear,
//           useNativeDriver: true,
//         })
//       ).start();
//     }, []);
  
//     const spin = rotateAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["0deg", "360deg"],
//     });
  
//     return (
//       <View style={styles.loaderContainer}>
//         <Animated.Image
//           source={galarieslogo}
//           style={[styles.logo, { transform: [{ rotate: spin }] }]}
//           resizeMode="contain"
//         />
//         <Text style={styles.loaderText}>Loading Galeries...</Text>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     loaderContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 50,
//       },
//       loaderText: {
//         marginTop: 12,
//         fontSize: 16,
//         fontWeight: "600",
//         color: "#000",
//       },
//       logo: {
//         width: 100,
//         height: 100,
//       },
    

//   })
  

import React, { useEffect, useRef } from "react";
import { Animated, Text, View, StyleSheet, Easing, Image } from "react-native";
import galarieslogo from "../assets/galerieslogo.png";

export default function GaleriesLoader() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // expand
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // shrink back
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.loaderContainer}>
      <Animated.Image
        source={galarieslogo}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        resizeMode="contain"
      />
      <Text style={styles.loaderText}>Loading Galeries...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
