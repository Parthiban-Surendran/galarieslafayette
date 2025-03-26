import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from "@expo/vector-icons";
const ProductCard = ({
    product,
    onPress
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    return <TouchableOpacity style={styles.card} onPress={onPress}>
        
        {/* Heart Icon in Top Right */}
        <View style={styles.cards}>
            <TouchableOpacity style={styles.heartContainer} onPress={() => {
                setIsFavorite(!isFavorite);
            }}>
                {isFavorite ? <AntDesign name="heart" size={24} color="red" /> : <Feather name="heart" size={24} color="gray" />}
            </TouchableOpacity>

            {/* Product Image */}
            <Image style={styles.image} source={product.image} />
        </View>

        {/* Product Details */}
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.subtitle || 'Description here'}</Text>
        <Text style={styles.price}>{product.price.toFixed(2)} €</Text>
    </TouchableOpacity>;
};
const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        elevation: 5,
        // Shadow for Android
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        position: 'relative'
    },
    cards: {
        height: 100,
        width: 130,
        backgroundColor: '#f0f0ef'
    },
    image: {
        width: 'auto',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 100
    }
});
export default ProductCard;