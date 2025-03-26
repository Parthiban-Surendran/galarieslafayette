// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
// import Header from './Header';
// import SearchBar from './SearchBar';
// import TopLineText from './TopLineText';
// import BottomComp from './BottomComp';

// const AccountSection = ({ userName, status, menuItems, onBackPress, onLogout }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (text) => {
//         setSearchTerm(text);
//     };

//     return (
//         <View style={styles.container}>
           

//             {/* FlatList for Menu Items */}
//             <FlatList
//             ListHeaderComponent={
//                 <>
//             <TopLineText />
//             <Header />
//             <SearchBar onSearch={handleSearch} />

//             {/* Header */}
//             <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
//                 <MaterialIcons name="arrow-back" size={24} color="black" />
//                 <Text style={styles.backText}>Welcome {'>'} Votre compte</Text>
//             </TouchableOpacity>

//             {/* User Greeting */}
//             <View style={styles.userContainer}>
//                 <Text style={styles.greeting}>Hello {userName}</Text>
//                 <Text style={styles.status}>Your status: <Text style={styles.statusBold}>{status}</Text></Text>
//             </View>

//             {/* Loyalty Section */}
//             <View style={styles.loyaltyCard}>
//                 <View style={{ flexDirection: 'row', gap: 10 }}>
//                     <Text style={styles.loyaltyText}>Get a €10 voucher by collecting 300 loyalty points.</Text>
//                     <FontAwesome5 name="gift" size={20} />
//                 </View>
//                 <Text style={styles.loyaltyDesc}>
//                     One point is earned for every euro spent. Your points are updated the day after you pick up your order.
//                 </Text>
//                 <TouchableOpacity style={styles.loyaltyButton}>
//                     <Text style={styles.loyaltyButtonText}>SEE YOUR LOYALTY BENEFITS</Text>
//                 </TouchableOpacity>
//             </View>
                
//                 </>
//             }
//                 data={menuItems}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <MenuItem icon={item.icon} text={item.text} desc={item.desc} onPress={item.onPress} />
//                 )}
//                 ListFooterComponent={() => (
//                     <>
//                         <View style={styles.helpSection}>
//                             <Text style={styles.greeting}>Need Help?</Text>
//                             <Text style={[styles.menuTitle,{textDecorationLine:'underline'}]}>Help and Contact</Text>
//                         </View>
//                         <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
//                             <Text style={styles.logoutText}>LOG OUT</Text>
//                         </TouchableOpacity>
//                         <BottomComp />
//                     </>
//                 )}
//             />
//         </View>
//     );
// };

// const MenuItem = ({icon, text, desc, onPress }) => (
//     <TouchableOpacity style={styles.menuItem} onPress={()=>{navigation.navigate('AccountCommon')}}>
//         <FontAwesome5 name={icon} size={20} color="black" style={styles.menuIcon} />
//         <View style={styles.menuTextContainer}>
//             <Text style={styles.menuTitle}>{text}</Text>
//             <Text style={styles.menuDesc}>{desc}</Text>
//         </View>
//         <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
//     </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     backButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     },
//     backText: {
//         marginLeft: 10,
//         fontSize: 14,
//         color: '#555',
//     },
//     userContainer: {
//         paddingHorizontal: 10,
//     },
//     greeting: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#000',
//         marginBottom: 5,
//     },
//     status: {
//         fontSize: 16,
//         color: '#555',
//         marginBottom: 20,
//     },
//     statusBold: {
//         fontWeight: 'bold',
//         color: 'blue'
//     },
//     loyaltyCard: {
//         backgroundColor: '#f8f8f8',
//         padding: 15,
//         borderRadius: 10,
//         marginBottom: 20,
//         marginHorizontal: 10,
//     },
//     loyaltyText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     loyaltyDesc: {
//         fontSize: 14,
//         color: '#555',
//         marginVertical: 10,
//     },
//     loyaltyButton: {
//         backgroundColor: '#fff',
//         padding: 10,
//         borderRadius: 20,
//         borderWidth: 1,
//         alignItems: 'center',
//     },
//     loyaltyButtonText: {
//         color: '#000000',
//         fontWeight: 'bold',
//         fontSize: 16
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderWidth: 1,
//         width:330,
//         borderBottomColor: '#ececec',
//         borderLeftColor: '#ececec',
//         borderRightColor: '#ececec',
//         borderTopColor:'#ececec',
//         paddingHorizontal:20,
//         marginLeft:10,
        
//     },
//     menuIcon: {
//         marginRight: 15,
//     },
//     menuTextContainer: {
//         flex: 1,
//     },
//     menuTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     menuDesc: {
//         fontSize: 14,
//         color: '#555',
//     },
//     helpSection: {
//         padding: 15,
//         borderTopWidth: 1,
//         borderTopColor: '#ececec',
//         marginTop: 20,
//     },
//     logoutButton: {
//         backgroundColor: '#fff',
//         paddingVertical: 15,
//         borderRadius: 30,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         alignItems: 'center',
//         marginHorizontal: 20,
//         fontWeight:900,
//         marginTop: 10,
//         marginBottom:30,
//     },
//     logoutText: {
//         color: '#000',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });

// export default AccountSection;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import SearchBar from './SearchBar';
import TopLineText from './TopLineText';
import BottomComp from './BottomComp';

const AccountSection = ({ userName, status, menuItems, onBackPress, onLogout }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <TopLineText />
                        <Header />
                        <SearchBar onSearch={handleSearch} />

                        {/* Header */}
                        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                            <MaterialIcons name="arrow-back" size={24} color="black" />
                            <Text style={styles.backText}>Welcome {'>'} Votre compte</Text>
                        </TouchableOpacity>

                        {/* User Greeting */}
                        <View style={styles.userContainer}>
                            <Text style={styles.greeting}>Hello {userName}</Text>
                            <Text style={styles.status}>
                                Your status: <Text style={styles.statusBold}>{status}</Text>
                            </Text>
                        </View>

                        {/* Loyalty Section */}
                        <View style={styles.loyaltyCard}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Text style={styles.loyaltyText}>
                                    Get a €10 voucher by collecting 300 loyalty points.
                                </Text>
                                <FontAwesome5 name="gift" size={20} />
                            </View>
                            <Text style={styles.loyaltyDesc}>
                                One point is earned for every euro spent. Your points are updated the day after you pick up your order.
                            </Text>
                            <TouchableOpacity style={styles.loyaltyButton}>
                                <Text style={styles.loyaltyButtonText}>SEE YOUR LOYALTY BENEFITS</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                data={menuItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <MenuItem navigation={navigation} icon={item.icon} text={item.text} desc={item.desc} onPress={item.onPress} />
                )}
                ListFooterComponent={() => (
                    <>
                        <View style={styles.helpSection}>
                            <Text style={styles.greeting}>Need Help?</Text>
                            <Text style={[styles.menuTitle, { textDecorationLine: 'underline' }]}>Help and Contact</Text>
                        </View>
                        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                            <Text style={styles.logoutText}>LOG OUT</Text>
                        </TouchableOpacity>
                        <BottomComp />
                    </>
                )}
            />
        </View>
    );
};

const MenuItem = ({ navigation, icon, text, desc, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <FontAwesome5 name={icon} size={20} color="black" style={styles.menuIcon} />
        <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>{text}</Text>
            <Text style={styles.menuDesc}>{desc}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    userContainer: {
        paddingHorizontal: 10,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    status: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    statusBold: {
        fontWeight: 'bold',
        color: 'blue',
    },
    loyaltyCard: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 10,
    },
    loyaltyText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    loyaltyDesc: {
        fontSize: 14,
        color: '#555',
        marginVertical: 10,
    },
    loyaltyButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
    },
    loyaltyButtonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderWidth: 1,
        width: 330,
        borderBottomColor: '#ececec',
        borderLeftColor: '#ececec',
        borderRightColor: '#ececec',
        borderTopColor: '#ececec',
        paddingHorizontal: 20,
        marginLeft: 10,
    },
    menuIcon: {
        marginRight: 15,
    },
    menuTextContainer: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuDesc: {
        fontSize: 14,
        color: '#555',
    },
    helpSection: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#ececec',
        marginTop: 20,
    },
    logoutButton: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        marginHorizontal: 20,
        fontWeight: '900',
        marginTop: 10,
        marginBottom: 30,
    },
    logoutText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AccountSection;
