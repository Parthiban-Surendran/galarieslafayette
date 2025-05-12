// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import Header from "../components/Header";
// import TopLineText from "../components/TopLineText";
// import SearchBar from "../components/SearchBar";
// import shoe from '../assets/shoe.png';
// import LuxuryCard from "../components/LuxuryCard";
// import BottomComp from "../components/BottomComp";

// export default function DashboardScreen({ navigation,route }) {
//     const { title,products } = route.params || {};


//     const [favorites, setFavorites] = useState({}); // Object to track favorite products

//     // const products = [
//     //     {
//     //         id: "1",
//     //         brand: "SANDRO",
//     //         title: "Women's mid-length pleated trench coat",
//     //         price: "323,00€",
//     //     },
//     //     {
//     //         id: "2",
//     //         brand: "MAYANS",
//     //         title: "Vintage straight leather jacket",
//     //         price: "493,00€",
//     //     },
//     // ];


//     const toggleFavorite = (id) => {
//         setFavorites((prev) => ({
//             ...prev,
//             [id]: !prev[id], // Toggle favorite status for the product
//         }));
//     };

//     const handleProduct = (item) => {
//         navigation.navigate('Product',{product:item});
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ListHeaderComponent={
//                     <>
//                         <TopLineText />
//                         <Header />
//                         <View style={{ paddingHorizontal: 10 }}>
//                             <SearchBar />
//                             <Text style={styles.breadcrumbs}>Welcome {'>'} {title} </Text>
//                             <Text style={styles.title}>{title}</Text>
//                             <Text style={styles.description}>
//                                 Joy, the new collections from the most desirable brands of the moment have arrived!
//                                 From outfits and accessories for women, men, and children, to home and beauty,
//                                 let yourself be inspired by these sunny new arrivals that will set the trend for the warmer weather.
//                             </Text>
//                         </View>
//                     </>
//                 }
//                 data={products}
//                 numColumns={2}
//                 ListFooterComponent={
//                     <>
//                         <LuxuryCard />

//                         <BottomComp />
//                     </>
//                 }
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity style={styles.productCard} onPress={()=>handleProduct(item)}>
//                         <Image source={shoe} style={styles.productImage} />
//                         <Text style={styles.productTitle}>{item.name}</Text>
//                         <Text style={styles.productTitle}>{item.brand}</Text>
//                         <View style={styles.priceContainer}>
//         <Text style={[styles.productPrice, styles.strikeThrough]}>
//             799 €
//         </Text>
//         <Text style={styles.productPrice}>
//             {item.price}{'€'}
//         </Text>
//     </View>
//                         <TouchableOpacity
//                             style={styles.heartIcon}
//                             onPress={() => toggleFavorite(item.id)}
//                         >
//                             {favorites[item.id] ? (
//                                 <AntDesign name="heart" size={24} color="red" />
//                             ) : (
//                                 <Feather name="heart" size={24} color="gray" />
//                             )}
//                         </TouchableOpacity>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     breadcrumbs: {
//         marginTop: 10,
//         color: "#999",
//         fontSize: 14,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginTop: 10,
//     },
//     subtitle: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "orange",
//         marginTop: 5,
//     },
//     description: {
//         fontSize: 14,
//         color: "#555",
//         marginTop: 5,
//     },
//     productCard: {
//         width: "48%",
//         backgroundColor: "#f9f9f9",
//         padding: 10,
//         borderRadius: 10,
//         position: "relative",
//         margin: 5,
//     },
//     productImage: {
//         width: "100%",
//         height: 150,
//         borderRadius: 10,
//     },
//     productBrand: {
//         fontSize: 12,
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     productTitle: {
//         fontSize: 14,
//         color: "#333",
//         marginTop: 2,
//     },
//     productPrice: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     heartIcon: {
//         position: "absolute",
//         top: 10,
//         right: 10,
//     },
//     priceContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },

//     strikeThrough: {
//         textDecorationLine: 'line-through',
//         marginRight: 10,
//         color: 'gray',
//     },

// });





// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import Header from "../components/Header";
// import TopLineText from "../components/TopLineText";
// import SearchBar from "../components/SearchBar";
// import shoe from '../assets/shoe.png';
// import LuxuryCard from "../components/LuxuryCard";
// import BottomComp from "../components/BottomComp";

// export default function DashboardScreen({ navigation,route }) {
//     const { title, item } = route.params || {};
//     const [favorites, setFavorites] = useState({}); // Object to track favorite products

//     const products = [
//         {
//             id: "1",
//             brand: "SANDRO",
//             title: "Women's mid-length pleated trench coat",
//             price: "323,00€",
//         },
//         {
//             id: "2",
//             brand: "MAYANS",
//             title: "Vintage straight leather jacket",
//             price: "493,00€",
//         },
//     ];

//     const repeatedProducts = Array.from({ length: 5 }, (_, i) => products.map(p => ({ ...p, id: `${p.id}-${i}` }))).flat();

//     const toggleFavorite = (id) => {
//         setFavorites((prev) => ({
//             ...prev,
//             [id]: !prev[id], // Toggle favorite status for the product
//         }));
//     };

//     const handleProduct = (item) => {
//         navigation.navigate('Product',{product:item});
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ListHeaderComponent={
//                     <>
//                         <TopLineText />
//                         <Header />
//                         <View style={{ paddingHorizontal: 10 }}>
//                             <SearchBar />
//                             <Text style={styles.breadcrumbs}>Welcome {'>'} {title} {'>'} {item}</Text>
//                             <Text style={styles.title}>{title}</Text>
//                             <Text style={styles.subtitle}>{item}</Text>
//                             <Text style={styles.description}>
//                                 Joy, the new collections from the most desirable brands of the moment have arrived!
//                                 From outfits and accessories for women, men, and children, to home and beauty,
//                                 let yourself be inspired by these sunny new arrivals that will set the trend for the warmer weather.
//                             </Text>
//                         </View>
//                     </>
//                 }
//                 data={repeatedProducts}
//                 numColumns={2}
//                 ListFooterComponent={
//                     <>
//                         <LuxuryCard />

//                         <BottomComp />
//                     </>
//                 }
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity style={styles.productCard} onPress={()=>handleProduct(item)}>
//                         <Image source={shoe} style={styles.productImage} />
//                         <Text style={styles.productBrand}>{item.brand}</Text>
//                         <Text style={styles.productTitle}>{item.title}</Text>
//                         <Text style={styles.productPrice}>{item.price}</Text>
//                         <TouchableOpacity
//                             style={styles.heartIcon}
//                             onPress={() => toggleFavorite(item.id)}
//                         >
//                             {favorites[item.id] ? (
//                                 <AntDesign name="heart" size={24} color="red" />
//                             ) : (
//                                 <Feather name="heart" size={24} color="gray" />
//                             )}
//                         </TouchableOpacity>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
//     breadcrumbs: {
//         marginTop: 10,
//         color: "#999",
//         fontSize: 14,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginTop: 10,
//     },
//     subtitle: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "orange",
//         marginTop: 5,
//     },
//     description: {
//         fontSize: 14,
//         color: "#555",
//         marginTop: 5,
//     },
//     productCard: {
//         width: "48%",
//         backgroundColor: "#f9f9f9",
//         padding: 10,
//         borderRadius: 10,
//         position: "relative",
//         margin: 5,
//     },
//     productImage: {
//         width: "100%",
//         height: 150,
//         borderRadius: 10,
//     },
//     productBrand: {
//         fontSize: 12,
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     productTitle: {
//         fontSize: 14,
//         color: "#333",
//         marginTop: 2,
//     },
//     productPrice: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginTop: 5,
//     },
//     heartIcon: {
//         position: "absolute",
//         top: 10,
//         right: 10,
//     },
// });



import React, { useEffect, useState } from "react";
import {
    View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import TopLineText from "../components/TopLineText";
import SearchBar from "../components/SearchBar";
import LuxuryCard from "../components/LuxuryCard";
import BottomComp from "../components/BottomComp";
import GaleriesLoader from "../components/GaleriesLoader";
import { Snackbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';


import {
    fetchFavourites,
    postFavourites,
    deleteFavourites
} from "../services/categoryService";

export default function DashboardScreen({ navigation, route }) {

    const { products, userId = 1 } = route.params || {}; // Default userId = 1 for now
    const [loading, setLoading] = useState(false);
    const [favourites, setFavourites] = useState([]);

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');



    useEffect(() => {
        const fetchAndUpdateFavourites = async () => {
            try {
                const data = await fetchFavourites(userId);
                setFavourites(data);
            } catch (err) {
                Alert.alert("Error", "Failed to reload favourites.");
            }
        };
    
        fetchAndUpdateFavourites();
    }, [favourites.length]);  
    
    console.log(products[0])

    const loadFavourites = async () => {
        try {
            setLoading(true);
            const data = await fetchFavourites(userId);
            setFavourites(data);
        } catch (err) {
            Alert.alert("Error", "Failed to load favourites.");
        } finally {
            setLoading(false);
        }
    };



    const isFavourite = (productId) =>
        favourites.some((fav) => fav.productId === productId);

    const showSnackbar = (message) => {
        setSnackbarVisible(false); // Hide first
        setSnackbarMessage(message);
        setSnackbarVisible(true);  // Show immediately
    };

    const toggleFavourite = async (item) => {
        const productId = item.productId || item.id;
        const isFav = isFavourite(productId);

        // Optimistic UI update: Immediately update the state
        setFavourites((prev) =>
            isFav
                ? prev.filter((fav) => fav.productId !== productId) // Remove from favourites
                : [...prev, { productId, userId }] // Add to favourites
        );

        try {
            if (isFav) {
                // Remove from backend
                await deleteFavourites(item.productId, userId);
                showSnackbar('Deleted from favourites');
            } else {
                // Add to backend
                await postFavourites(item, userId);
                showSnackbar('Added to favourites');
            }
        } catch (err) {
            Alert.alert("Error", "Failed to update favourites.");
            // Rollback the optimistic state change if something went wrong
            loadFavourites();
        }
    };


    const handleProduct = (item) => {
        navigation.navigate("Product", { product: item });
    };


    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesome key={`full-${i}`} name="star" size={16} color="#1d7532" />);
        }

        // Half star (if applicable)
        if (halfStar) {
            stars.push(<FontAwesome key="half" name="star-half" size={16} color="#1d7532" />);
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesome key={`empty-${i}`} name="star-o" size={16} color="#1d7532" />);
        }

        return stars;
    };

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3); // Add 3 days

    const formattedDate = deliveryDate.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });




    return (
        <View style={styles.container}>
            {loading ? (
                <GaleriesLoader />
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <>

                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={styles.breadcrumbs}>Products</Text>
                                <Text style={styles.description}>
                                    Explore the latest collections from top brands!
                                </Text>
                            </View>
                        </>
                    }
                    data={products}

                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'center' }} // ✅ only affects rows of product cards

                    ListFooterComponent={
                        <>
                            <BottomComp />
                        </>
                    }
                    keyExtractor={(item, index) => (item.productId || item.id || index).toString()}
                    renderItem={({ item, index }) => {
                        const isLeftItem = index % 2 === 0;
                        const nextItem = products[index + 1];
                    
                        if (isLeftItem) {
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    {/* First item */}
                                    <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(item)}>
                                        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
                                        <Text style={styles.productBrand}>{item.productName}</Text>
                                        <Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">{item.brand}</Text>
                    
                                        {item.rating !== undefined && (
                                            <View style={styles.ratingContainer}>
                                                {renderStars(item.rating)}
                                                <Text style={styles.productRating}>({item.rating.toFixed(1)})</Text>
                                            </View>
                                        )}
                    
                                        <View style={styles.priceRow}>
                                            <Text style={styles.discountText}>↓ {item.discountPercent}%</Text>
                                            <Text style={styles.originalPrice}>€{item.price}</Text>
                                            <Text style={styles.discountedPrice}>€{item.discountedPrice}</Text>
                                        </View>
                    
                                        <Text style={styles.hotDeal}>Hot Deal</Text>
                                        <Text style={styles.deliveryDate}>
                                            Free delivery by <Text style={{ fontWeight: 'bold' }}>{formattedDate}</Text>
                                        </Text>
                    
                                        <TouchableOpacity
                                            style={styles.heartIcon}
                                            onPress={() => toggleFavourite(item)}
                                        >
                                            {isFavourite(item.productId || item.id) ? (
                                                <AntDesign name="heart" size={24} color="red" />
                                            ) : (
                                                <Feather name="heart" size={24} color="#FF0000" />
                                            )}
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                    
                                    {/* Divider and second item or placeholder */}
                                    {nextItem ? (
                                        <>
                                            <View style={styles.verticalDivider} />
                                            <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(nextItem)}>
                                                <Image source={{ uri: nextItem.imageUrl }} style={styles.productImage} />
                                                <Text style={styles.productBrand}>{nextItem.productName}</Text>
                                                <Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">{nextItem.brand}</Text>
                    
                                                {nextItem.rating !== undefined && (
                                                    <View style={styles.ratingContainer}>
                                                        {renderStars(nextItem.rating)}
                                                        <Text style={styles.productRating}>({nextItem.rating.toFixed(1)})</Text>
                                                    </View>
                                                )}
                    
                                                <View style={styles.priceRow}>
                                                    <Text style={styles.discountText}>↓ {nextItem.discountPercent}%</Text>
                                                    <Text style={styles.originalPrice}>€{nextItem.price}</Text>
                                                    <Text style={styles.discountedPrice}>€{nextItem.discountedPrice}</Text>
                                                </View>
                    
                                                <Text style={styles.hotDeal}>Hot Deal</Text>
                                                <Text style={styles.deliveryDate}>
                                                    Free delivery by <Text style={{ fontWeight: 'bold' }}>{formattedDate}</Text>
                                                </Text>
                    
                                                <TouchableOpacity
                                                    style={styles.heartIcon}
                                                    onPress={() => toggleFavourite(nextItem)}
                                                >
                                                    {isFavourite(nextItem.productId || nextItem.id) ? (
                                                        <AntDesign name="heart" size={24} color="red" />
                                                    ) : (
                                                        <Feather name="heart" size={24} color="#FF0000" />
                                                    )}
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        // Invisible placeholder to balance layout
                                        <View style={[styles.productCard, { opacity: 0 }]} />
                                    )}
                                </View>
                            );
                        }
                    
                        // Right item already rendered with left, so skip
                        return null;
                    }}
                    

                />
            )}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
                action={{
                    label: 'OK',
                    onPress: () => setSnackbarVisible(false),
                }}
            >
                {snackbarMessage}
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    breadcrumbs: {
        marginTop: 10,
        color: "#999",
        fontSize: 14,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
        paddingBottom: 10,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        marginBottom: 15,
        paddingBottom: 10,
        // borderBottomWidth:0.5,

        // borderColor:'#ccc'
        // no marginHorizontal here because we’re using justifyContent: 'space-between'
    },
    productImage: {
        width: "100%",
        // marginTop:20,
        height: 200,
        // marginLeft:10,
        resizeMode: 'stretch',
        backgroundColor: 'rgba(7, 7, 7, 0.3)'
    },
    productBrand: {
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: "bold",
        marginTop: 5,
    },
    productTitle: {
        fontSize: 14,
        paddingHorizontal: 10,
        color: "#333",
        marginTop: 2,
    },
    productPrice: {
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: "bold",
        marginTop: 5,
    },
    heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: "#ccc",
        marginHorizontal: 5,
    },
    // Your existing styles
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5
    },
    productRating: {
        fontSize: 14,
        color: '#1d7532',
        marginLeft: 5,
    },
    discountText: {
        color: 'green',
        fontWeight: 'bold',
        marginRight: 5,
    },

    originalPrice: {
        textDecorationLine: 'line-through',
        color: 'grey',
        marginRight: 5,
    },

    discountedPrice: {
        color: 'black',
        fontWeight: 'bold',
    },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 5
    },

    hotDeal: {
        backgroundColor: '#d4f8d4',
        color: 'green',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginTop: 6,
        marginLeft: 5
    },

    deliveryDate: {
        fontSize: 12,
        color: '#444',
        marginTop: 4,
        marginLeft: 5

    },

});
