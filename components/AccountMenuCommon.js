import React, { useState } from 'react';
import { View, StyleSheet,ScrollView, Text, TouchableOpacity,ScrllView } from 'react-native';
import Header from './Header';
import TopLineText from './TopLineText';
import SearchBar from './SearchBar';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomComp from './BottomComp';

const AccountMenuCommon = ({route}) => {
    const {title,message,buttontxt,name} = route.params;
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
            <View style={styles.mainContent}>
                <TopLineText />
                <Header />
                <SearchBar onSearch={handleSearch} />

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Account')}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                    <Text style={styles.backText}>Welcome {'>'} Your account {'>'} {name}</Text>
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={[styles.subtitle, {marginTop: 30}]}>{message}</Text>

                    {buttontxt!==''&&
                    <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.loyaltyButton}>
                        <Text style={styles.loyaltyButtonText}>{buttontxt}</Text>
                    </TouchableOpacity>
                    </View>
                    }
                    
                </View>
            </View>

            <BottomComp />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: '100%',
    },
    mainContent: {
        flexGrow: 1,
        width: '100%',
        height:600,
    },
    content: {
        padding: 20,
        textAlign: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
    },    
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#000",
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    backText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#555',
    },
    subtitle: {
        fontSize: 18,
        color: "#444",
        fontWeight:700,
        marginVertical: 10,
    },
    buttonWrapper: {
        paddingTop: 50,
        alignItems: 'center',
    },
    loyaltyButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        width:'90%',
    },
    loyaltyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AccountMenuCommon;
