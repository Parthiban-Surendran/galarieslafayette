// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import luxuryimg from '../assets/luxuryimg.png';
// import useCategoryManager from "../hooks/useCategoryManager";
// export default function LuxuryCard() {
//   const {fetchBannerProducts} = useCategoryManager();
//   const handlePressBanner44 = async (categoryId) => {
//       setLoading(true); // Show loader
//     try {
//         const data = await fetchBannerProducts(categoryId);
//         navigation.navigate('Dashboard', {
//             screen: 'DashboardMain',
//             params: { products: data }
//         });
//     } catch (error) {
//         console.error('Error fetching banner products:', error);
//     } finally {
//         setLoading(false); // Hide loader regardless of success/failure
//     }
// };
//   return (
//     <View style={styles.card}>
//       <Image
//         source={luxuryimg} // Replace with your actual image URL
//         style={styles.image}
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>The icons of luxury</Text>
//         <Text style={styles.subtitle}>
//           Luxury home pieces that defy time for exceptional style
//         </Text>
//         <TouchableOpacity style={styles.button} onPress = {()=>{handlePressBanner44(59)}}>
//           <Text style={styles.buttonText}>DISCOVER</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#FAEBDC",
//     borderRadius: 10,
//     overflow: "hidden",
//     alignItems: "center",
//     width: 300, // Adjust as needed
//     elevation: 5, // Shadow effect
//     margin: 10,
//     marginLeft:30,
//   },
//   image: {
//     width: "100%",
//     height: 180, // Adjust to fit proportions
//   },
//   textContainer: {
//     padding: 15,
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: "black",
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 25,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//   },
// });


import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import luxuryimg from '../assets/luxuryimg.png';
import useCategoryManager from "../hooks/useCategoryManager";

export default function LuxuryCard() {
  const navigation = useNavigation();
  const { fetchBannerProducts } = useCategoryManager();
  const [loading, setLoading] = useState(false);

  const handlePressBanner44 = async (categoryId) => {
    setLoading(true);
    try {
      const data = await fetchBannerProducts(categoryId);
      navigation.navigate("Dashboard", {
        screen: "DashboardMain",
        params: { products: data }
      });
    } catch (error) {
      console.error("Error fetching banner products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={luxuryimg} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>The icons of luxury</Text>
        <Text style={styles.subtitle}>
          Luxury home pieces that defy time for exceptional style
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePressBanner44(45)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>DISCOVER</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FAEBDC",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    width: 300,
    elevation: 5,
    margin: 10,
    marginLeft: 30,
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
