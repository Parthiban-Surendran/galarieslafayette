import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from "@expo/vector-icons";

const CardProduct = ({ product, onPress }) => {

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image 
                style={styles.image} 
                source={product.image} 
            />

            <Text style={styles.title}>{product.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        height: 320,
        width: '90%',
        borderRadius: 10,
        elevation: 5, // Shadow for Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        position: 'relative',
    },
    image: {
        width: '100%', // Make it responsive
        height: 200, // Adjust as needed
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover', // Ensure image fits well
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default CardProduct;
