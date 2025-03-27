import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import CustomDivider from "./CustomDivider";
import galarieslogo from "../assets/galerieslogo.png"; 
import { useNavigation } from "@react-navigation/native";
import CategorySection from "./CategorySection";
import { DrawerContentScrollView } from "@react-navigation/drawer";
const WhatsNew = ({ goBack,resetDrawer }) => (
    
      <CategorySection 
      goBack={goBack} 
      title="Nouveaute's" 
      options={["Femme", "Homme", "Enfant", "Beauté", "Maison"]} 
      resetDrawer={resetDrawer}
      />  

);

const Women = ({ goBack,resetDrawer }) => (
    

    <CategorySection 
    goBack={goBack} 
    title="Femme" 
    options={["Vêtements", "Chaussures", "Sacs et bagages", "Lingerie", "Accessoires", "Bijoux et joaillerie"]} 
    resetDrawer={resetDrawer}
    />

);

const Man = ({ goBack }) => (
    <CategorySection 
    goBack={goBack} 
    title="Homme" 
    options={["Vêtements", "Chaussures", "Sacs et bagages", "Montres", "Accessoires"]} 
    resetDrawer={resetDrawer}
/>

);

const Child = ({ goBack,resetDrawer }) => (
    
    <CategorySection 
    goBack={goBack} 
    title="Enfant" 
    options={[
        "Bébé de 0 à 36 mois", 
        "Garçon de 3 à 18 ans", 
        "Fille de 3 à 18 ans", 
        "Chaussures", 
        "Sacs et accessoires", 
        "Jeux et jouets"
    ]} 
    resetDrawer={resetDrawer}
    />

);

const Beauty = ({ goBack ,resetDrawer}) => (
    <CategorySection 
    goBack={goBack} 
    title="Beaute'" 
    options={[
        "Parfums", 
        "Maquillage", 
        "Visage", 
        "Corps et bain", 
        "Soins solaires", 
        "Cheveux"
    ]}
    resetDrawer={resetDrawer}
      />
);


const Home = ({ goBack,resetDrawer }) => (
    <CategorySection 
    goBack={goBack} 
    title="Maison" 
    options={[
        "Linge de maison", 
        "Mobilier", 
        "Luminaires", 
        "Culinaire", 
        "Arts de la table", 
        "Décoration", 
        "Electroménager et multimédia", 
        "Jardin"
    ]} 
    resetDrawer={resetDrawer}
      />
);

export default function ReusableDrawer(props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();
    const goBack = () => setSelectedOption(null);

    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            <TouchableOpacity style={styles.closgoBackeButton} onPress={() => {setSelectedOption(null);props.navigation.closeDrawer()}}>
                <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <Image source={galarieslogo} style={styles.logo} />
                </TouchableOpacity>
                
            </View>

            {selectedOption === "whatsNew" && <WhatsNew goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
            {selectedOption === "women" && <Women goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
            {selectedOption === "man" && <Man goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
            {selectedOption === "child" && <Child goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
            {selectedOption === "beauty" && <Beauty goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
            {selectedOption === "home" && <Home goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}

            {selectedOption === null && (
                <>
                    <View style={styles.optionbox}>
                        <View style={styles.boxoptions}>
                            <Text style={[styles.text, { fontWeight: "700" }]}>Stores</Text>
                        </View>
                        <View style={styles.boxoptions}>
                            <Text style={[styles.text, { fontWeight: "700" }]}>Services</Text>
                        </View>
                        <View style={styles.boxoptions}>
                            <Text style={[styles.text, { fontWeight: "700" }]}>Need Help?</Text>
                        </View>
                    </View>

                    <CustomDivider />

                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("whatsNew")}>
                        <Text style={styles.text}>What's New</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("women")}>
                        <Text style={styles.text}>Women</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("man")}>
                        <Text style={styles.text}>Man</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("child")}>
                        <Text style={styles.text}>Child</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("beauty")}>
                        <Text style={styles.text}>Beauty</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("home")}>
                        <Text style={styles.text}>Home</Text>
                        <Feather name="chevron-right" size={20} />
                    </TouchableOpacity>
                </>
            )}
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    drawertop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container1: {
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: 10,
        zIndex: 10,
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 160,
        height: 60,
        resizeMode: "contain",
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
    },
    text: {
        fontSize: 18,
        padding: 5,
        fontWeight: 900,
    },
    text1: {
        fontSize: 18,
        padding: 5,
        fontWeight: 300,
    },
    sectionText: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    backText: {
        fontSize: 18,
        marginLeft: 5,
    },
    boxoptions: {
        height: "auto",
        width: "auto",
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    optionbox: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
