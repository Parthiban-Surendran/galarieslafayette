// import React,{useState,useEffect} from "react";
// import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import productimg from "../assets/productimg.png";
// import ProductCard from "./ProductCard";
// import BottomComp from "./BottomComp";
// import imageWomen from "../assets/categoriesimg.png";
// import imageMen from "../assets/categoriesimg1.png";
// import imageChild from "../assets/categoriesimg2.png";
// import imageBeauty from "../assets/categoriesimg3.png";
// import imageHome from "../assets/categoriesimg4.png";
// import imageLuxe from "../assets/categoriesimg5.png";
// import { getCategories,getProductsByCategory } from "../services/api";
// import { useNavigation } from "@react-navigation/native";

// export default function OptionCommonComponent({  title,extra ,onBackPress}) {
//     const navigation = useNavigation();
//     const categoryImages = {
//         Women: imageWomen,
//         Men: imageMen,
//         Child: imageChild,
//         Beauty: imageBeauty,
//         Home: imageHome,
//         Luxe: imageLuxe,
//       };
//     const [categories,setCategories] = useState([]);

//         useEffect(() => {
//                 const fetchCategories = async () => {
//                     try {
//                       const data = await getCategories();
//                       const temp = await getProductsByCategory(1);
                      
//                       setCategories(data);
//                     } catch (error) {
//                       console.log(error.message);
//                     }
//                 };
//                 fetchCategories();
// },[]);
//     // Dummy product suggestions
//     const dummyProducts = [
//         { id: "1", name: "Elegant Dress", price: 79.99, image: productimg, category: "Clothing" },
//         { id: "2", name: "Leather Handbag", price: 129.5, image: productimg, category: "Accessories" },
//         { id: "3", name: "Stylish Watch", price: 249.0, image: productimg, category: "Accessories" },
//         { id: "4", name: "Cozy Sweater", price: 59.99, image: productimg, category: "Clothing" },
//     ];

    

//      const renderCategory = ({ item }) => (
//             <View style={styles.categoryItem}>
//                 <TouchableOpacity 
//                     onPress={async () => {
//                         try {
//                             // Fetch products for the selected category
//                             const temp = await getProductsByCategory(item.id);
                            
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
//         <View style={styles.container}>
//             {/* BACK BUTTON & BREADCRUMB */}

//             {/* Product List */}
//             <FlatList
//                 ListHeaderComponent={
//                     <>
//                             <View style={{ padding: 20, backgroundColor: '#fff' }}>
//                                 <View style={styles.header}>
//                                     <TouchableOpacity onPress={onBackPress}>
//                                         <Ionicons name="arrow-back" size={24} color="black" />
//                                     </TouchableOpacity>
//                                     <Text style={styles.breadcrumb}>Welcome {" > "} {title}</Text>
//                                 </View>

//                                 {/* BASKET TITLE */}
//                                 <Text style={styles.title}>{title}</Text>

//                                 {/* EMPTY MESSAGE */}
//                                 <Text style={styles.subtitle}>Your {title.toLowerCase()} list does not have any items.</Text>

//                                 {/* START SHOPPING BUTTON */}
//                                 <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
//                                     <Text style={styles.buttonText}>START YOUR SHOPPING</Text>
//                                 </TouchableOpacity>

//                                 {/* Suggested Products */}
//                                 <Text style={styles.suggestionTitle}>{extra}</Text>
//                             </View>

//                     </>
//                 }
//                 data={dummyProducts}
//                 renderItem={({ item }) => <ProductCard product={item} />}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.productListContent}
//                 ListFooterComponent={
                 
//                         <View style={{ backgroundColor: '#FFFFFF' }}>
//                             <TouchableOpacity style={[styles.button, styles.outlineButton, { padding: 20, marginBottom: 20 }]}>
//                                 <Text style={[styles.buttonText, styles.outlineButtonText]}>See More Articles</Text>
//                             </TouchableOpacity>
//                             {title === 'Favourites' && <FlatList
//                                 data={categories}
//                                 renderItem={renderCategory}
//                                 keyExtractor={(item) => item.id}
//                                 numColumns={3}
//                                 contentContainerStyle={styles.categoriesList}
//                                 scrollEnabled={false}
//                             />
//                             }
//                             <BottomComp />
//                         </View>

                        
                  
//                 }

//             />

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#000000",
//         paddingBottom: 20,
//     },
//     header: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     breadcrumb: {
//         fontSize: 14,
//         color: "#777",
//         marginLeft: 10,
//     },
//     title: {
//         fontSize: 32,
//         fontWeight: "bold",
//         color: "#000",
//     },
//     subtitle: {
//         fontSize: 16,
//         color: "#444",
//         marginVertical: 10,
//     },
//     button: {
//         backgroundColor: "#000",
//         paddingVertical: 15,
//         paddingHorizontal: 20,
//         borderRadius: 30,
//         alignItems: "center",
//         marginTop: 20,
//     },
//     buttonText: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     suggestionTitle: {
//         fontSize: 25,
//         fontWeight: "900",
//         marginTop: 30,
//     },
//     productListContent: {
//         backgroundColor:'#fff'
//     },
//     outlineButton: {
//         borderWidth: 1,
//         borderColor: "#000",
//         backgroundColor: "#FFFFFF",
//         marginTop: 20,
//     },
//     outlineButtonText: {
//         color: "#000",
//         fontWeight: "900",
//     },
//     categoriesList: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     categoryItem: {
//         flex: 1,
//         alignItems: "center",
//         marginBottom: 15,
//     },
//     categoryImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     categoryText: {
//         marginTop: 5,
//         fontSize: 14,
//         fontWeight: "bold",
//         textAlign: "center",
//     },
// });



import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import productimg from "../assets/productimg.png";
import ProductCard from "./ProductCard";
import BottomComp from "./BottomComp";
import useCategoryManager from "../hooks/useCategoryManager";
export default function OptionCommonComponent({ navigation, title, extra, onBackPress, customContent }) {
    const {fetchTopProducts} = useCategoryManager();
    // Dummy product suggestions
    const [dummyProducts,setDummyProducts] = useState();
    const handlePressBanner44 = async (categoryId) => {
        setLoading(true); // Show loader
        try {
            const data = await fetchBannerProducts(categoryId);
            navigation.navigate('Dashboard', {
                screen: 'DashboardMain',
                params: { products: data }
            });
        } catch (error) {
            console.error('Error fetching banner products:', error);
        } finally {
            setLoading(false); // Hide loader regardless of success/failure
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTopProducts();
            setDummyProducts(data);
        };
        fetchData();
    }, []);
    

    

    const renderCategory = ({ item }) => (
        <View style={styles.categoryItem}>
            <Image source={{uri:item.imageUrl}} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.productName}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
           
            <FlatList
              showsVerticalScrollIndicator={false} // 👈 Hides the scrollbar

                ListHeaderComponent={
                    <>
                            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                                <View style={styles.header}>
                                    <TouchableOpacity onPress={onBackPress}>
                                        <Ionicons name="arrow-back" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.breadcrumb}>Welcome {" > "} {title}</Text>
                                </View>

                                <Text style={styles.title}>{title}</Text>

                                {customContent}

                                <Text style={styles.suggestionTitle}>{extra}</Text>
                            </View>

                    </>
                }
                data={dummyProducts}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.productId}
                numColumns={2}
                contentContainerStyle={styles.productListContent}

                ListFooterComponent={
                 
                        <View style={{ backgroundColor: '#FFFFFF' }}>
                            <TouchableOpacity style={[styles.button, styles.outlineButton, { padding: 20, marginBottom: 20 }]} onPress={()=>handlePressBanner44(59)}>
                                <Text style={[styles.buttonText, styles.outlineButtonText]}>See More Articles</Text>
                            </TouchableOpacity>
                            
                            <BottomComp />
                        </View>
                     
                  
                }

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        paddingBottom: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    breadcrumb: {
        fontSize: 14,
        color: "#777",
        marginLeft: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000",
    },
    subtitle: {
        fontSize: 16,
        color: "#444",
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#000",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 20,
        width:"70%",
        marginLeft:60,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    suggestionTitle: {
        fontSize: 25,
        fontWeight: "900",
        marginTop: 30,
    },
    productListContent: {
        backgroundColor:'#fff'
    },
    outlineButton: {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#FFFFFF",
        marginTop: 20,
    },
    outlineButtonText: {
        color: "#000",
        fontWeight: "900",
    },
    categoriesList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryItem: {
        flex: 1,
        alignItems: "center",
        marginBottom: 15,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    categoryText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
});