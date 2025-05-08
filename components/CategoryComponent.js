// import React from 'react';
// import {View,Text,StyleSheet,TouchableOpacity,FlatList
// } from 'react-native';
// import { getProductsByCategory,getCategories } from '../services/api';
// const CategoryComponent = ({navigation}) => {

//     const renderCategory = ({ item }) => (
//             <View style={styles.categoryItem}>
//                 <TouchableOpacity 
//                     onPress={async () => {
//                         try {
//                             // Fetch products for the selected category
//                             const temp = await getProductsByCategory(item.id);
//                             setProducts(temp); // Update the state with the fetched products
                            
//                             // Log the fetched products to the console
        
//                             // Navigate to the Dashboard screen with the products
//                             navigation.navigate('Dashboard', {
//                                 title: item.name, // Pass the category name
//                                 products:temp,   // Pass the fetched products
//                             });
//                         } catch (error) {
//                             console.log('Error fetching products:', error.message);
//                         }
//                     }}
//                 >
//                     <Image source={categoryImages[item.name]} style={styles.categoryImage} />
//                     <Text style={styles.categoryText}>{item.name}</Text>
//                 </TouchableOpacity>
//             </View>
//         );
        
//     return (
//         <>

//             <View style={styles.categoriesContainer}>
//                 <Text style={styles.sectionTitle}>Categories</Text>
//                 <FlatList
//                     data={categories}
//                     renderItem={renderCategory}
//                     keyExtractor={(item) => item.id}
//                     numColumns={3}
//                     contentContainerStyle={styles.categoriesList}
//                     scrollEnabled={false}
//                 />
//             </View>

//         </>
//     );
// };

// const styles = StyleSheet.create({
//     categoriesContainer: {
//         paddingHorizontal: 10,
//     },categoriesList: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },sectionTitle: {
//         marginTop:10,
//         fontSize: 21,
//         fontWeight: "bold",
//         fontFamily:'GLBader',
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
// })

// export default CategoryComponent;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
// import imageWomen from "../assets/categoriesimg.png";
// import imageMen from "../assets/categoriesimg1.png";
// import imageChild from "../assets/categoriesimg2.png";
// import imageBeauty from "../assets/categoriesimg3.png";
// import imageHome from "../assets/categoriesimg4.png";
// import imageLuxe from "../assets/categoriesimg5.png";
// import { useNavigation } from '@react-navigation/native';
// import useCategoryManager from '../hooks/useCategoryManager';

// const CategoryComponent = ({ onCategoryPress, showLoader }) => {
//     const navigation = useNavigation();
//      const {
//         categories,
//         fetchParentCategoryProducts
//       } = useCategoryManager();
//       const LOCAL_IP = "192.168.251.94"; // Replace with your machine's local IP

//       const replaceLocalhost = (url) => {
//         if (url.includes("localhost")) {
//           return url.replace("localhost", LOCAL_IP);
//         }
//         return url;
//       };

  
//     const renderCategory = ({ item }) => (
//         <View style={styles.categoryItem}>
// <TouchableOpacity
//   onPress={async () => {
//     try {
//         console.log(item.categoryId)
//       const temp = await fetchParentCategoryProducts(item.categoryId);
//       console.log("TEmp",temp)
//       navigation.navigate('Dashboard', {
//         screen: 'DashboardMain',
//         params: { products: temp }
//       });
//         } catch (error) {
//       console.error("Error navigating to Dashboard:", error);
//     }
//   }}
// >                <Image source={{uri:replaceLocalhost(item.imageUrl)}} style={styles.categoryImage} />
//                 <Text style={styles.categoryText}>{item.categoryName}</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.categoriesContainer}>
//             <Text style={styles.sectionTitle}>Categories</Text>
//             <FlatList
//                 data={categories}
//                 renderItem={renderCategory}
//                 keyExtractor={(item) => item.id}
//                 numColumns={3}
//                 contentContainerStyle={styles.categoriesList}
//                 scrollEnabled={false}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     categoriesContainer: {
//         paddingHorizontal: 10,
//     },
//     categoriesList: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sectionTitle: {
//         marginTop: 10,
//         fontSize: 21,
//         fontWeight: "bold",
//         fontFamily: 'GLBader',
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     categoryItem: {
//         margin: 10,
//         alignItems: 'center',
        
//     },
//     categoryImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     categoryText: {
//         marginTop: 5,
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginLeft:20
//     },
// });

// export default CategoryComponent;


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import useCategoryManager from '../hooks/useCategoryManager';

// const CategoryComponent = ({ onCategoryPress, showLoader,closeLoader }) => {
//     const navigation = useNavigation();
//     const {
//         categories,
//         fetchParentCategoryProducts
//     } = useCategoryManager();

//     const LOCAL_IP = "192.168.1.92"; // Replace with your local IP

//     const replaceLocalhost = (url) => {
//         return url.includes("localhost") ? url.replace("localhost", LOCAL_IP) : url;
//     };

//     const handleCategoryPress = async (categoryId) => {
//         try {
//             showLoader(); 
//             const products = await fetchParentCategoryProducts(categoryId);

//             navigation.navigate('Dashboard', {
//                 screen: 'DashboardMain',
//                 params: { products }    
//             });
//             closeLoader();
//         } catch (error) {
//             console.error("Error navigating to Dashboard:", error);
//         }
//     };

//     const renderCategory = ({ item }) => (
//         <View style={styles.categoryItem}>
//             <TouchableOpacity onPress={() => handleCategoryPress(item.categoryId)}>
//                 <Image source={{ uri: replaceLocalhost(item.imageUrl) }} style={styles.categoryImage} />
//                 <Text style={styles.categoryText}>{item.categoryName}</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={styles.categoriesContainer}>
//             <Text style={styles.sectionTitle}>Categories</Text>
//             <FlatList
//                 data={categories}
//                 renderItem={renderCategory}
//                 keyExtractor={(item) => item.id}
//                 numColumns={3}
//                 contentContainerStyle={styles.categoriesList}
//                 scrollEnabled={false}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     categoriesContainer: {
//         paddingHorizontal: 10,
//     },
//     categoriesList: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sectionTitle: {
//         marginTop: 10,
//         fontSize: 21,
//         fontWeight: "bold",
//         fontFamily: 'GLBader',
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     categoryItem: {
//         margin: 10,
//         alignItems: 'center',
//     },
//     categoryImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     categoryText: {
//         marginTop: 5,
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginLeft: 20,
//     },
// });

// export default CategoryComponent;



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useCategoryManager from '../hooks/useCategoryManager';
import network from '../utils/network';
const CategoryComponent = ({ onCategoryPress, showLoader, closeLoader }) => {
    const navigation = useNavigation();
    const { categories, fetchParentCategoryProducts } = useCategoryManager();



    const replaceLocalhost = (url) => {
      // If your original image URLs are like "http://localhost:3000/..."
      if (url.startsWith("http://localhost:3000")) {
        return url.replace("http://localhost:3000", network.BASE_URL);
      }
      return url;
    };
    

    const handleCategoryPress = async (categoryId) => {
        try {
            showLoader();
            const products = await fetchParentCategoryProducts(categoryId);
            navigation.navigate('Dashboard', {
                screen: 'DashboardMain',
                params: { products },
            });
            closeLoader();
        } catch (error) {
            console.error("Error navigating to Dashboard:", error);
        }
    };

    const renderCategory = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleCategoryPress(item.categoryId)}
            style={styles.card}
        >
            <Image
                source={{ uri: replaceLocalhost(item.imageUrl) }}
                style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.categoryName}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.categoriesList}
                columnWrapperStyle={styles.columnWrapper} // ADD THIS
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoriesContainer: {
      paddingHorizontal: 12,
      backgroundColor: '#F9F9F9', // soft background
    },
    categoriesList: {
      paddingBottom: 20,
    },
    columnWrapper: {
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      justifyContent: 'space-evenly', 
    },
    sectionTitle: {
      marginTop: 10,
      fontSize: 21,
      fontWeight: 'bold',
      fontFamily: 'GLBader',
      marginBottom: 10,
      paddingHorizontal: 10,
      color: '#222', // dark but not pitch black
    },
    card: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      marginVertical: 10,
      marginHorizontal: 6,
      paddingVertical: 15,
      borderRadius: 12,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      maxWidth: 110,
    },
          
    categoryImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      resizeMode: 'contain',
      backgroundColor: '#FAFAFA', // subtle bg for non-square images
    },
    categoryText: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: '600',
      color: '#444',
      textAlign: 'center',
    },
  });
  
export default CategoryComponent;
