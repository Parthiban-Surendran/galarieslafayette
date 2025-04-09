// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const CategorySection = ({ goBack, title, options, resetDrawer }) => {
//     const navigation = useNavigation();
    
//     return (
//         <View style={styles.container}>
//             <View style={styles.drawertop}>
//                 <TouchableOpacity onPress={goBack} style={styles.backButton}>
//                     <Feather name="arrow-left" size={24} />
//                 </TouchableOpacity>

//                 <Text style={[styles.text, { fontSize: 21 }]}>{title}</Text>

//                 <TouchableOpacity style={[styles.boxoptions, { backgroundColor: "#000000" }]}>
//                     <Text style={[styles.text, { color: "#FFFFFF", fontWeight: "700" }]}>
//                         Voir tout
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             {options.map((item, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     style={styles.option}
//                     onPress={() => {
//                         navigation.navigate("Dashboard", { title: title, item: item });
//                         resetDrawer();
//                     }}
//                 >
//                     <Text style={styles.text}>{item}</Text>
//                     <Feather name="chevron-right" size={20} />
//                 </TouchableOpacity>
//             ))}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     drawertop: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: 10,
//     },
//     backButton: {
//         padding: 10,
//     },
//     text: {
//         fontSize: 18,
//         fontWeight: "600",
//     },
//     boxoptions: {
//         paddingVertical: 5,
//         paddingHorizontal: 10,
//         borderRadius: 10,
//     },
//     option: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 15,
//     },
// });

// export default CategorySection;



import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const CategorySection = ({ categoryId }) => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://192.168.1.92:3000/products?categoryId=${categoryId}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            Alert.alert("Error", "Failed to load products. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Feather name="arrow-left" size={24} />
            </TouchableOpacity>

            <Text style={styles.title}>Products</Text>

            {loading ? (
                <ActivityIndicator size="large" color="black" />
            ) : products.length > 0 ? (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text>Price: ${item.price}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noDataText}>No products available</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    productCard: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: "600",
    },
    noDataText: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginTop: 20,
    },
});

export default CategorySection;
