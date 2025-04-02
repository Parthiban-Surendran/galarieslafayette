import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import galarieslogo from "../assets/galerieslogo.png";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const navigation = useNavigation();
    const {isLoggedIn} = useAuth();
    const handlefavourites = () => {
        navigation.navigate('Favourites');
    };
    const handlebasket = () => {
        navigation.navigate('Basket');
    };
    const handleAccount = () => {
        navigation.navigate('Account');
    };
    const handlehome = () => {
        navigation.navigate('Home');
    };
    const handlelogin = () => {
        navigation.navigate('Login', { onClose: () => { navigation.navigate('Home');  },ScreenName:"home" });
    };

    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={'#000'} />
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logo1} onPress={handlehome}>
                    <Image source={galarieslogo} style={styles.logo} />
                </TouchableOpacity>
                <View style={styles.options}>
                    <TouchableOpacity onPress={handlefavourites}>
                        <Feather name="heart" size={26} color="black" />
                    </TouchableOpacity>
                    {/* Show "Login" if not logged in, otherwise show "Account" */}
                    <TouchableOpacity onPress={isLoggedIn ? handleAccount : handlelogin}>
                        <Feather name="user" size={26} color="black" />
                        {isLoggedIn && (
                            <View style={styles.blueTick}>
                                <Feather name="check" size={12} color="white" />
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlebasket}>
                        <Feather name="shopping-bag" size={26} color="black" />
                    </TouchableOpacity>
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
        width: 160,
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
    },
    blueTick: {
        position: "absolute",
        right: -4,
        bottom: -4,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "#1DA1F2", // Twitter blue tick color
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white", // Adds a border to separate from the user icon
    },
});
