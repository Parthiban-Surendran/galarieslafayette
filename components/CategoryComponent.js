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


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useCategoryManager from '../hooks/useCategoryManager';

const CategoryComponent = ({ onCategoryPress, showLoader,closeLoader }) => {
    const navigation = useNavigation();
    const {
        categories,
        fetchParentCategoryProducts
    } = useCategoryManager();

    const LOCAL_IP = "192.168.251.94"; // Replace with your local IP

    const replaceLocalhost = (url) => {
        return url.includes("localhost") ? url.replace("localhost", LOCAL_IP) : url;
    };

    const handleCategoryPress = async (categoryId) => {
        try {
            showLoader(); 
            const products = await fetchParentCategoryProducts(categoryId);

            navigation.navigate('Dashboard', {
                screen: 'DashboardMain',
                params: { products }
            });
            closeLoader();
        } catch (error) {
            console.error("Error navigating to Dashboard:", error);
        }
    };

    const renderCategory = ({ item }) => (
        <View style={styles.categoryItem}>
            <TouchableOpacity onPress={() => handleCategoryPress(item.categoryId)}>
                <Image source={{ uri: replaceLocalhost(item.imageUrl) }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{item.categoryName}</Text>
            </TouchableOpacity>
        </View>
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
                scrollEnabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingHorizontal: 10,
    },
    categoriesList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 21,
        fontWeight: "bold",
        fontFamily: 'GLBader',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    categoryItem: {
        margin: 10,
        alignItems: 'center',
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    categoryText: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default CategoryComponent;
