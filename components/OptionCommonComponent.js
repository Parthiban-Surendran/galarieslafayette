import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import productimg from "../assets/productimg.png";
import ProductCard from "./ProductCard";
import BottomComp from "./BottomComp";
import imageWomen from "../assets/categoriesimg.png";
import imageMen from "../assets/categoriesimg1.png";
import imageChild from "../assets/categoriesimg2.png";
import imageBeauty from "../assets/categoriesimg3.png";
import imageHome from "../assets/categoriesimg4.png";
import imageLuxe from "../assets/categoriesimg5.png";

export default function OptionCommonComponent({ navigation, title,extra ,onBackPress}) {

    // Dummy product suggestions
    const dummyProducts = [
        { id: "1", name: "Elegant Dress", price: 79.99, image: productimg, category: "Clothing" },
        { id: "2", name: "Leather Handbag", price: 129.5, image: productimg, category: "Accessories" },
        { id: "3", name: "Stylish Watch", price: 249.0, image: productimg, category: "Accessories" },
        { id: "4", name: "Cozy Sweater", price: 59.99, image: productimg, category: "Clothing" },
    ];

    const categories = [
        { id: "1", name: "Women", image: imageWomen },
        { id: "2", name: "Men", image: imageMen },
        { id: "3", name: "Child", image: imageChild },
        { id: "4", name: "Beauty", image: imageBeauty },
        { id: "5", name: "Home", image: imageHome },
        { id: "6", name: "Luxe", image: imageLuxe }
    ];

    const renderCategory = ({ item }) => (
        <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* BACK BUTTON & BREADCRUMB */}

            {/* Product List */}
            <FlatList
                ListHeaderComponent={
                    <>
                            <View style={{ padding: 20, backgroundColor: '#fff' }}>
                                <View style={styles.header}>
                                    <TouchableOpacity onPress={onBackPress}>
                                        <Ionicons name="arrow-back" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text style={styles.breadcrumb}>Welcome {" > "} {title}</Text>
                                </View>

                                {/* BASKET TITLE */}
                                <Text style={styles.title}>{title}</Text>

                                {/* EMPTY MESSAGE */}
                                <Text style={styles.subtitle}>Your {title.toLowerCase()} list does not have any items.</Text>

                                {/* START SHOPPING BUTTON */}
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>START YOUR SHOPPING</Text>
                                </TouchableOpacity>

                                {/* Suggested Products */}
                                <Text style={styles.suggestionTitle}>{extra}</Text>
                            </View>

                    </>
                }
                data={dummyProducts}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.productListContent}
                ListFooterComponent={
                 
                        <View style={{ backgroundColor: '#FFFFFF' }}>
                            <TouchableOpacity style={[styles.button, styles.outlineButton, { padding: 20, marginBottom: 20 }]}>
                                <Text style={[styles.buttonText, styles.outlineButtonText]}>See More Articles</Text>
                            </TouchableOpacity>
                            {title === 'Favourites' && <FlatList
                                data={categories}
                                renderItem={renderCategory}
                                keyExtractor={(item) => item.id}
                                numColumns={3}
                                contentContainerStyle={styles.categoriesList}
                                scrollEnabled={false}
                            />
                            }
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
