import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TopLineText() {
    const messages = [
        "You are invited to the wedding of the year!",
        "Save the date for a magical celebration!",
        "Join us for an unforgettable wedding!"
    ];

    const [index, setIndex] = useState(0);
    const screenWidth = Dimensions.get("window").width;
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const interval = setInterval(() => {
            slideToNextMessage();
        }, 6000); // Change message every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const slideToNextMessage = () => {
        Animated.timing(translateX, {
            toValue: -screenWidth,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            translateX.setValue(screenWidth);
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            Animated.timing(translateX, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        });
    };

    const slideToPrevMessage = () => {
        Animated.timing(translateX, {
            toValue: screenWidth,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            translateX.setValue(-screenWidth);
            setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
            Animated.timing(translateX, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={slideToPrevMessage} style={styles.button}>
                <Feather name="chevron-left" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Animated.Text  adjustsFontSizeToFit={true} numberOfLines={1} style={[styles.toptext, { transform: [{ translateX }] }]}>
                    {messages[index]}
                </Animated.Text>
            </View>
            <TouchableOpacity onPress={slideToNextMessage} style={styles.button}>
                <Feather name="chevron-right" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "100%",
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        overflow: "hidden",
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    toptext: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        position: "absolute",
    },
    button: {
        padding: 5,
    },
});
