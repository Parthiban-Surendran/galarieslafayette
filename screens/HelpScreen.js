import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopLineText from "../components/TopLineText";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { FontAwesome5,Feather } from "@expo/vector-icons";
import BottomComp from "../components/BottomComp";
import { useAuth } from '../context/AuthContext';


export default function HelpScreen({ navigation }) {
    const {setIsLoggedIn} = useAuth();
    const helpOptions = [
        { icon: 'shopping-bag', id: "1", title: "Prepare your purchases", description: "Delivery methods, payments, return and refund conditions.",onPress: () => navigation.navigate('Purchase')},
        { icon: 'address-book', id: "2", title: "Access your orders", description: "Details, tracking and returns.",onPress: () => navigation.navigate('Login', { onClose: () => { navigation.navigate('Home');  },ScreenName:"help" }) },
        { icon: "user", id: "3", title: "Manage your personal information", description: "Modifications, change of password.",onPress: () => navigation.navigate('AccountCommon',{title:'You Personal Information',    message: 'Mr. PARTHIBAN \n\nDate of Birth:\n09/08/2003 \n\nPhone Number:\n6369478359 ',buttontxt:'Modifier',name:'Personal Info'}) },
        {
            icon: 'envelope',
            id: "4",
            title: "Consult your loyalty program",
            description: "Your rewards and exclusive offers.",
            onPress: () => navigation.navigate('ServiceComp', { 
              userName: "Parthiban",
              status: "Essential",
              
              onBackPress: () => navigation.goBack(),
              onLogout: handleLogout, 
            })
          }]

          const handleLogout = () => {
            setIsLoggedIn(false);
            console.log('User loghandleAccountged out'); 
            navigation.navigate('Home');
        };
        
          
    
    return (
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            {/* Top Banner and Header */}
            <TopLineText />
            <Header />

            <View style={styles.innerContainer}>
                <SearchBar />

                {/* Breadcrumb Navigation */}
                <View style={styles.breadcrumbContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.breadcrumbText}>Welcome {" > "} Help</Text>
                </View>

                {/* Ask Gala AI Section */}
                <Text style={{ paddingHorizontal: 10, fontSize: 29, fontWeight: 'bold' }}>Help and Contact</Text>
                <View style={styles.aiHelp}>


                    <View>

                        <Text style={styles.aiText}>Need help?</Text>
                        <TouchableOpacity>
                            <Text style={styles.askGala}>Ask Gala your question</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require("../assets/help1.png")} style={styles.avatar} />
                </View>

                {/* Help Options */}
                {helpOptions.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.optionCard} onPress={item.onPress}>
                        <FontAwesome5 name={item.icon} size={20} color="black" style={styles.menuIcon} />
                        <View style={styles.optionTextContainer}>


                            <Text style={styles.optionTitle}>{item.title}</Text>
                            <Text style={styles.optionDescription}>{item.description}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color="#000" />
                    </TouchableOpacity>
                ))}

                {/* FAQ Section */}
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Frequently Asked Questions</Text>
                    <Text style={styles.infoSubtitle}>Question of the moment:</Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Payment refused with my Cofinoga card?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ACCESS THE FAQ</Text>
                    </TouchableOpacity>
                </View>

                {/* Write to Us Section */}
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Write to us</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONTACT US</Text>
                    </TouchableOpacity>
                </View>

                {/* Call Our Advisors Section */}
                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Call our advisors</Text>
                    <Text style={styles.phoneNumber}>09 69 39 75 75</Text>
                    <View style={styles.statusBox}>
                        <Feather name="check-circle" size={16} color="green" />
                        <Text style={styles.statusText}>Currently open</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CALL CUSTOMER SERVICE</Text>
                    </TouchableOpacity>
                </View>

                  {/* Contact Your Store Section */}
                  <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Contact your store</Text>
                    <Text style={styles.infoSubtitle}>Contact your favorite store directly.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>FIND YOUR STORE</Text>
                    </TouchableOpacity>
                </View>
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
    innerContainer: {
        paddingHorizontal: 16,
    },
    breadcrumbContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    backButton: {
        paddingRight: 10,
    },
    breadcrumbText: {
        fontSize: 14,
        color: "#666",
    },
    aiHelp: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    aiText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    askGala: {
        color: "#007AFF",
        fontSize: 18,
        marginTop: 4,
        textDecorationLine: 'underline'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    optionCard: {
        backgroundColor: "#FFF",
        padding: 16,
        borderRadius: 8,
        borderBottomWidth: 1,
        borderColor: "#E5E5E5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    optionTextContainer: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    optionDescription: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    menuIcon: {
        marginRight: 15,
    },
    infoBox: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        marginBottom: 10,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
    },
    infoSubtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 4,
    },
    linkText: {
        fontSize: 14,
        color: "#007AFF",
        marginBottom: 12,
    },
    phoneNumber: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    statusBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E6F8E6",
        padding: 8,
        borderRadius: 6,
        marginBottom: 10,
    },
    statusText: {
        fontSize: 14,
        color: "green",
        marginLeft: 6,
    },
    button: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

