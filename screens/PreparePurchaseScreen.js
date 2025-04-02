import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import TopLineText from "../components/TopLineText";
import CategoryComponent from "../components/CategoryComponent";
import BottomComp from "../components/BottomComp";

const purchaseOptions = [
    {
        id: "1",
        title: "PAYMENTS",
        description: "We accept a variety of bank cards, offering maximum flexibility.",
        image: require("../assets/bann1.png"),
    },
    {
        id: "2",
        title: "DELIVERY",
        description: "Free delivery to stores with no minimum purchase, and to your home for purchases over €75.",
        image: require("../assets/pic1.png"),
    },
    {
        id: "3",
        title: "BACK",
        description: "Satisfied or Refunded",
        image: require("../assets/pic2.png"),
    },
];

const PreparePurchaseScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TopLineText />
            <Header />
            <SearchBar />
            <View style={{ padding: 10 }}>
                {/* Section Title */}
                <Text style={styles.sectionTitle}>Prepare your purchases</Text>

                {/* Purchase Options */}
                {purchaseOptions.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.optionContainer}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.optionTitle}>{item.title}</Text>
                        <Text style={styles.optionDescription}>{item.description}</Text>
                    </TouchableOpacity>
                ))}
                 <View style={styles.helpSection}>
                                            <Text style={styles.greeting}>Need Help?</Text>
                                            <Text style={{fontSize:18}}>We're here to answer your questions and help you move forward, whether online or by phone.</Text>
                                            <Text style={[styles.menuTitle, { textDecorationLine: 'underline' }]}>Help and Contact</Text>
                                        </View>
                    <Text style={{fontSize:27,fontWeight:'bold',marginLeft:10,paddingVertical:20}}>Start your shopping</Text>
                <CategoryComponent/>
               

            </View>
            <BottomComp/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 16,
    },
    optionContainer: {
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    optionDescription: {
        fontSize: 14,
        color: "#666",
    },
    helpSection: {
        borderWidth: 1,
        borderColor: '#ececec',
        marginTop: 20,
        width:'90%',
        justifyContent:'center',
        height:150,
        padding:20,
        
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
});

export default PreparePurchaseScreen;
