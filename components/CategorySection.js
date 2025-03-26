import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CategorySection = ({ goBack, title, options, resetDrawer }) => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.drawertop}>
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Feather name="arrow-left" size={24} />
                </TouchableOpacity>

                <Text style={[styles.text, { fontSize: 21 }]}>{title}</Text>

                <TouchableOpacity style={[styles.boxoptions, { backgroundColor: "#000000" }]}>
                    <Text style={[styles.text, { color: "#FFFFFF", fontWeight: "700" }]}>
                        Voir tout
                    </Text>
                </TouchableOpacity>
            </View>

            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => {
                        navigation.navigate("Dashboard", { title: title, item: item });
                        resetDrawer();
                    }}
                >
                    <Text style={styles.text}>{item}</Text>
                    <Feather name="chevron-right" size={20} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawertop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    backButton: {
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
    },
    boxoptions: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
    },
});

export default CategorySection;
