import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather,AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import galarieslogo from "../assets/galerieslogo.png"; // Import your logo
import CustomDivider from "./CustomDivider";

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                {/* Logo Section */}
                <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image source={galarieslogo} style={styles.logo} />
                </View>
                <View style={styles.optionbox}>
                    <View style={styles.boxoptions}>
                        <Text style={[styles.text,{fontWeight:700}]} >
                            Stores
                        </Text>
                        
                    </View>
                    <View style={styles.boxoptions}>
                        <Text style={[styles.text,{fontWeight:700}]}>
                            Services
                        </Text>
                        
                    </View>
                    <View style={styles.boxoptions}>
                        <Text style={[styles.text,{fontWeight:700}]} >
                            Need Help?
                        </Text>
                        
                    </View>
                </View>
                <CustomDivider/>
                    

                {/* Drawer Options */}
                <TouchableOpacity style={styles.option} onPress={() => console.log("Home pressed")}>
                    <Text style={styles.text}>What's New</Text>
                    <Feather name="chevron-right" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log("Categories pressed")}>
                    <Text style={styles.text}>Categories</Text>
                    <Feather name="chevron-right" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log("Wishlist pressed")}>
                    <Text style={styles.text}>Wishlist</Text>
                    <Feather name="chevron-right" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => console.log("Orders pressed")}>
                    <Text style={styles.text}>Orders</Text>
                    <Feather name="chevron-right" size={20} />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20, // Space below the logo
    },
    closeButton: {
        position: "absolute",
        top: 15,
        right: 20,
        zIndex: 10,
    },
    logo: {
        width: 160,
        height: 60,
        resizeMode: "contain",
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    text: {
        fontSize: 18,
        padding:5,
        fontWeight:700,
    },
    boxoptions:{
        height:'auto',
        width:'auto',
        borderRadius:15,
        borderWidth:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    optionbox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
});
