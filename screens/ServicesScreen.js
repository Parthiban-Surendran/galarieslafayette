import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BottomComp from "../components/BottomComp";
import Video from 'react-native-video';
import CategoryComponent from "../components/CategoryComponent";

const servicesData = [
    {
        id: "1",
        title: "Enjoy a unique shopping experience",
        description:
            "Take advantage of our many services, online or in-store, for an exceptional shopping experience.",
        image: require("../assets/productimg.png"),
    },
    {
        id: "2",
        title: "A tailor-made experience",
        description: "Discover personalized services to enhance your shopping journey.",
        image: require("../assets/productimg.png"),
    },
];

const services = [
    {
        id: "1",
        title: "ADVANTAGEOUS LOYALTY PROGRAM",
        description: "Join our loyalty program and enjoy many benefits.",
        image: require("../assets/bann2.png"),
    },
    {
        id: "2",
        title: "ONLINE PAYMENTS",
        description: "Shop with ease with our convenient and diverse payment options.",
        image: require("../assets/bann1.png"),
    },
    {
        id: "3",
        title: "DELIVERIES OF YOUR CHOICE",
        description: "Free delivery to stores with no minimum purchase, and to your home for purchases over €75.",
        image: require("../assets/bann3.png"),
    },
    {
        id: "4",
        title: "FREE RETURNS",
        description: "Satisfied or refunded, you have 30 days to decide.",
        image: require("../assets/bann4.png"),
    },
];

const exclusivePlaces = [
    {
        id: "1",
        title: "LA WELLNESS GALLERY",
        description:
            "A 3,000m² space dedicated to well-being, combining beauty, care, energy, and exercise. The Wellness Gallery invites and supports everyone to take care of themselves through personalized services.",
        image: require("../assets/parisbanner1.png"), // Replace with actual image
    },
    {
        id: "2",
        title: "GALERIES LAFAYETTE LE GOURMET",
        description:
            "One of the finest culinary hotspots opens its doors to you, spanning over 4,500 m² in-store and online. Renowned chefs and pastry chefs, prestigious establishments, young talents, and select brands: the cream of the crop of today's culinary and food scene awaits you, in all its richness and vitality.",
        image: require("../assets/parisbanner2.png"), // Replace with actual image
    },
];

const desiresServices = [
    {
        id: "1",
        title: "LE CLICK & COLLECT",
        description: "Free delivery to your favorite Galeries Lafayette store.",
        image: require("../assets/sbanner1.png"), // Replace with actual image
    },
    {
        id: "2",
        title: "THE E-GIFT CARD",
        description: "A gift that always succeeds.",
        image: require("../assets/sbanner2.jpeg"), // Replace with actual image
    },
    {
        id: "3",
        title: "UNIQUE STORES",
        description: "Immerse yourself in the Galeries Lafayette experience, where each store is a unique destination.",
        image: require("../assets/sbanner3.png"), // Replace with actual image
    },
    {
        id: "4",
        title: "A MORE RESPONSIBLE FASHION",
        description: "Galeries Lafayette has been committed to more responsible fashion for several years.",
        image: require("../assets/sbanner4.png"), // Replace with actual image
    },
];

const giftOptions = [
    {
        id: "1",
        title: "A THOUSAND AND ONE LISTS",
        description: "A wedding list like a digital ballot box with many advantages.",
        image: require("../assets/sbanner6.png"),
    },
    {
        id: "2",
        title: "THE GALERIES LAFAYETTE KITTY",
        description: "Create your kitty in just a few clicks, collect contributions, and enjoy a 5% extra discount when purchasing the gift at Galeries Lafayette.",
        image: require("../assets/sbanner5.png"),
    },
];



export default function ServicesScreen() {
    return (
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            <Header />
            <SearchBar />

            <View style={{ padding: 20 }}>
                <Text style={styles.sectionTitle}>Our services</Text>
                <View style={{ width: '100%', height: 300, justifyContent: 'center', backgroundColor: '#c7d2fe', marginBottom: 60, paddingLeft: 20, }}>
                    <Video
                        source={require('../assets/servicesvideo.mp4')}  // Provide video source
                        style={styles.backgroundMedia}
                        resizeMode="cover"
                        repeat
                        muted
                        playWhenInactive
                        playInBackground
                    />

                    <Text style={styles.sectionTitle}>Enjoy a unique shopping experience</Text>
                    <Text style={styles.serviceTitle}>Take advantage of our many services, online or in-store, for an exceptional shopping experience.</Text>

                </View>

                <Text style={styles.sectionTitle}>A tailor-made experience</Text>
                <View style={styles.servicesGrid}>
                    {services.map((service) => (
                        <View key={service.id} style={styles.serviceCard}>
                            <Image source={service.image} style={styles.serviceImage} />
                            <Text style={styles.serviceTitle}>{service.title}</Text>
                            <Text style={styles.serviceDescription}>{service.description}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.paymentCard}>
                    <Image source={require("../assets/paymentbanner.png")} style={styles.paymentImage} />
                    <View style={styles.paymentTextContainer}>
                        <Text style={styles.paymentTitle}>Payment in 3 or 4 installments with Floa</Text>
                        <Text style={styles.paymentDescription}>
                            A simple, fast and secure financing solution to allow you to shop with the greatest possible peace of mind.
                        </Text>
                        <TouchableOpacity style={styles.learnMoreButton}>
                            <Text style={styles.learnMoreText}>LEARN MORE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Exclusively in Paris</Text>
                <View>
                    {exclusivePlaces.map((place) => (
                        <TouchableOpacity key={place.id} style={styles.exclusiveCard}>
                            <Image source={place.image} style={styles.exclusiveImage} />
                            <View style={styles.exclusiveTextContainer}>
                                <Text style={styles.exclusiveTitle}>{place.title}</Text>
                                <Text style={styles.exclusiveDescription}>{place.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>A service for each of your desires</Text>
                    <View style={styles.desiresGrid}>
                        {desiresServices.map((service) => (
                            <TouchableOpacity key={service.id} style={styles.desireCard}>
                                <Image source={service.image} style={styles.desireImage} />
                                <Text style={styles.desireTitle}>{service.title}</Text>
                                <Text style={styles.desireDescription}>{service.description}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>The perfect gift</Text>
                    {giftOptions.map((gift) => (
                        <TouchableOpacity key={gift.id} style={styles.exclusiveCard}>
                            <Image source={gift.image} style={styles.exclusiveImage} />
                            <View style={styles.exclusiveTextContainer}>
                                <Text style={styles.exclusiveTitle}>{gift.title}</Text>
                                <Text style={styles.exclusiveDescription}>{gift.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            
                <View style={{width:'100%'}}>
                    <CategoryComponent/>
                </View>


            </View>


            <BottomComp />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
    },
    serviceCard: {
        backgroundColor: "#E5E5F7",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    serviceImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    serviceTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    serviceDescription: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    backgroundMedia: {
        position: 'relative', // Keeps the video or image in the background
        width: '90%',
        height: 150
    },
    servicesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    serviceCard: {
        width: "48%",
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    serviceImage: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },

    serviceDescription: {
        fontSize: 12,
        color: "#555",
        marginTop: 5,
    },
    paymentCard: {
        backgroundColor: "#000",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: 'center',
        padding: 20,
        marginVertical: 20,
    },
    paymentImage: {
        width: "90%",
        height: 180,
    },
    paymentTextContainer: {
        padding: 10,
    },
    paymentTitle: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#fff",
    },
    paymentDescription: {
        fontSize: 18,
        color: "#ccc",
        marginTop: 5,
    },
    learnMoreButton: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
    },
    learnMoreText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    exclusiveCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    exclusiveImage: {
        width: "100%",
        height: 180,
    },
    exclusiveTextContainer: {
        padding: 10,
    },
    exclusiveTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    exclusiveDescription: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    desiresGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    desireCard: {
        width: "48%",
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    desireImage: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    desireTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
    },
    desireDescription: {
        fontSize: 12,
        color: "#555",
        marginTop: 5,
    },
});



