import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import TopLineText from "../components/TopLineText";
import SearchBar from "../components/SearchBar";
import shoe from '../assets/shoe.png';
import LuxuryCard from "../components/LuxuryCard";
import BottomComp from "../components/BottomComp";

export default function DashboardScreen({ navigation,route }) {
    const { title, item } = route.params || {};
    const [favorites, setFavorites] = useState({}); // Object to track favorite products

    const products = [
        {
            id: "1",
            brand: "SANDRO",
            title: "Women's mid-length pleated trench coat",
            price: "323,00€",
        },
        {
            id: "2",
            brand: "MAYANS",
            title: "Vintage straight leather jacket",
            price: "493,00€",
        },
    ];

    const repeatedProducts = Array.from({ length: 5 }, (_, i) => products.map(p => ({ ...p, id: `${p.id}-${i}` }))).flat();

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle favorite status for the product
        }));
    };

    const handleProduct = () => {
        navigation.navigate('Product');
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <TopLineText />
                        <Header />
                        <View style={{ paddingHorizontal: 10 }}>
                            <SearchBar />
                            <Text style={styles.breadcrumbs}>Welcome {'>'} {title} {'>'} {item}</Text>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{item}</Text>
                            <Text style={styles.description}>
                                Joy, the new collections from the most desirable brands of the moment have arrived!
                                From outfits and accessories for women, men, and children, to home and beauty,
                                let yourself be inspired by these sunny new arrivals that will set the trend for the warmer weather.
                            </Text>
                        </View>
                    </>
                }
                data={repeatedProducts}
                numColumns={2}
                ListFooterComponent={
                    <>
                        <LuxuryCard />
                        <BottomComp />
                    </>
                }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.productCard} onPress={handleProduct}>
                        <Image source={shoe} style={styles.productImage} />
                        <Text style={styles.productBrand}>{item.brand}</Text>
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <TouchableOpacity
                            style={styles.heartIcon}
                            onPress={() => toggleFavorite(item.id)}
                        >
                            {favorites[item.id] ? (
                                <AntDesign name="heart" size={24} color="red" />
                            ) : (
                                <Feather name="heart" size={24} color="gray" />
                            )}
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "orange",
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    productCard: {
        width: "48%",
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 10,
        position: "relative",
        margin: 5,
    },
    productImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    productBrand: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5,
    },
    productTitle: {
        fontSize: 14,
        color: "#333",
        marginTop: 2,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
    },
});

