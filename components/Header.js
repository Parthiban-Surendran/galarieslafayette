// import React, { useEffect, useState } from "react";
// import { View,Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
// import { Feather, MaterialIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import galarieslogo from "../assets/galerieslogo.png";
// import { useAuth } from "../context/AuthContext";
// import useCategoryManager from "../hooks/useCategoryManager";
// import { useCart } from "../context/CartContext";

// export default function Header() {
//     const navigation = useNavigation();
//     const {isLoggedIn} = useAuth();
//     const {cartBadge,loadCart} = useCategoryManager();
//     const {cartUpdated} = useCart();

    

//     useEffect(()=>{
//         loadCart();
//     },[cartUpdated])

//     const handlefavourites = () => {
//         navigation.navigate('Dashboard', { screen: 'FavouritesScreen' });
//       };
      
    
//     const handlebasket = () => {
//         navigation.navigate('Basket');
//     };
//     const handleAccount = () => {
//         navigation.navigate('Account');
//     };
//     const handlehome = () => {
//         navigation.navigate('Home');
//     };
//     const handleOrders = () => {
//         navigation.navigate('Orders', {
//             screen: 'OrderScreen',
            
//           });
//               };
//     const handlelogin = () => {
//         navigation.navigate('Login', { onClose: () => { navigation.navigate('Home');  },ScreenName:"home" });
//     };

//     return (
//         <View style={styles.header}>
//             <StatusBar backgroundColor={'#000'} />
//             <View style={styles.top}>
//                 <TouchableOpacity onPress={() => navigation.openDrawer()}>
//                     <Feather name="menu" size={30} color="black" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.logo1} onPress={handlehome}>
//                     <Image source={galarieslogo} style={styles.logo} />
//                 </TouchableOpacity>
//                 <View style={styles.options}>
//                     <TouchableOpacity onPress={handlefavourites}>
//                         <Feather name="heart" size={26} color="black" />
//                     </TouchableOpacity>

//                      <TouchableOpacity onPress={handleOrders}>                     
//                         <Feather name="shopping-bag" size={26} color="black" />
//                     </TouchableOpacity>
//                     <View style={styles.cartIconContainer}>
//   <TouchableOpacity onPress={handlebasket}>
//     <Feather name="shopping-cart" size={26} color="black" />
//   </TouchableOpacity>
//   {cartBadge > 0 && (
//     <View style={styles.cartBadge}>
//       <Text style={styles.cartBadgeText}>{cartBadge}</Text>
//     </View>
//   )}
// </View>

//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: "#ccc",
//         backgroundColor: "#fff",
//     },
//     top: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "100%",
//     },
//     logo1: {
//         width: 160,
//         height: 60,
//     },
//     logo: {
//         width: 160,
//         height: 60,
//         resizeMode: "contain",
//     },
//     options: {
//         flexDirection: "row",
//         gap: 15,
//         alignItems: "center",
//         paddingRight: 10, 
//     },
    
//     blueTick: {
//         position: "absolute",
//         right: -4,
//         bottom: -4,
//         width: 14,
//         height: 14,
//         borderRadius: 7,
//         backgroundColor: "#1DA1F2", // Twitter blue tick color
//         alignItems: "center",
//         justifyContent: "center",
//         borderWidth: 1,
//         borderColor: "white", // Adds a border to separate from the user icon
//     },
//     cartIconContainer: {
//         position: 'relative',
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
      
//       cartBadge: {
//         position: 'absolute',
//         top: -6,
//         right: -6,
//         backgroundColor: 'red',
//         borderRadius: 10,
//         paddingHorizontal: 5,
//         minWidth: 18,
//         height: 18,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
      
//       cartBadgeText: {
//         color: 'white',
//         fontSize: 10,
//         fontWeight: 'bold',
//       },
      
// });


// // <TouchableOpacity onPress={isLoggedIn ? handleAccount : handlelogin}>
// //<Feather name="user" size={26} color="black" />
// //{isLoggedIn && (
//   //  <View style={styles.blueTick}>
//     //    <Feather name="check" size={12} color="white" />
//     //</View>
// //)}
// //</TouchableOpacity>

import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import { useNavigation, useIsFocused } from "@react-navigation/native";
import galarieslogo from "../assets/galerieslogo.png";
import { useAuth } from "../context/AuthContext";
import useCategoryManager from "../hooks/useCategoryManager";
import { useCart } from "../context/CartContext";

export default function Header() {
    const navigation = useNavigation();
    const { isLoggedIn } = useAuth();
    const { cartBadge,favouriteBadge, loadCart } = useCategoryManager();
    const { cartUpdated } = useCart();
    const isFocused = useIsFocused();
    
    // State to manage the cart badge value, only update it when necessary
    const [cachedCartBadge, setCachedCartBadge] = useState(cartBadge);
    const [cachedFavouriteBadge, setCachedFavouriteBadge] = useState(favouriteBadge);
    console.log(favouriteBadge,cachedFavouriteBadge)

    // Load cart data when cartUpdated changes
    useEffect(() => {
        loadCart();
    }, [cartUpdated]);

    // Only update the cart badge if it's different from the previous one
    useEffect(() => {
        if (cartBadge !== cachedCartBadge) { 
            setCachedCartBadge(cartBadge);
        }
        if (favouriteBadge !== cachedFavouriteBadge) { 
            setCachedFavouriteBadge(favouriteBadge);
        }
    }, [cartBadge,favouriteBadge]);

    // Navigation handlers to prevent unnecessary re-renders
    const handleFavourites = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Dashboard') {
            navigation.navigate('FavouritesScreen');
            // navigation.navigate("Search")
        }
    };

    const handleBasket = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Basket') {
            navigation.navigate('Basket');
        }
    };

    const handleAccount = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Account') {
            navigation.navigate('Account');
        }
    };

    const handleHome = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Home') {
            navigation.navigate('Home');
        }
    };
    
    const handleOrders = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Orders') {
            navigation.navigate('Orders', {
                screen: 'OrderScreen',
            });
        }
    };

    const handleLogin = () => {
        if (!isFocused || navigation.getState().routes[0].name !== 'Login') {
            navigation.navigate('Login', { onClose: () => { navigation.navigate('Home'); }, ScreenName: "home" });
        }
    };

    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={'#000'} />
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logo1} onPress={handleHome}>
                    <Image source={galarieslogo} style={styles.logo} />
                </TouchableOpacity>
                <View style={styles.options}>
                    <View style={styles.cartIconContainer}>
                        <TouchableOpacity onPress={handleFavourites}>
                            <Feather name="heart" size={26} color="black" />
                        </TouchableOpacity>
                        {/* {cachedFavouriteBadge > 0 && (
                            <View style={styles.FavouriteBadge}>
                            </View>
                        )} */}
                    </View>

                    <TouchableOpacity onPress={handleOrders}>
                        <Feather name="shopping-bag" size={26} color="black" />
                    </TouchableOpacity>
                    
                    <View style={styles.cartIconContainer}>
                        <TouchableOpacity onPress={handleBasket}>
                            <Feather name="shopping-cart" size={26} color="black" />
                        </TouchableOpacity>
                        {cachedCartBadge > 0 && (
                            <View style={styles.cartBadge}>
                                <Text style={styles.cartBadgeText}>{cachedCartBadge}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#fff",
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    logo1: {
        width: 130,
        height: 60,
    },
    logo: {
        width: 160,
        height: 60,
        resizeMode: "contain",
    },
    options: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        paddingRight: 10,
    },
    cartIconContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FavouriteBadge: {
        position: 'absolute',
        top: -3,
        right: -3,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        minWidth: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
