import React from 'react';
import { View } from 'react-native';
import AccountSection from '../components/AccountSection';
import { useAuth } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
    const {setIsLoggedIn} = useAuth();
    const menuItems = [
        { icon: "shopping-bag", text: "Your orders", desc: "Track your order history and details or make a return.", onPress: () => navigation.navigate('AccountCommon',{title:'Your Orders',message:'You do not have any orders',buttontxt:'START YOUR SHOPPING',name:'orders'}) },
        { icon: "user", text: "Your personal information", desc: "Change your personal data or password.", onPress: () => navigation.navigate('AccountCommon',{title:'You Personal Information',    message: 'Mr. PARTHIBAN \n\nDate of Birth:\n09/08/2003 \n\nPhone Number:\n6369478359 ',buttontxt:'Modifier',name:'Personal Info'}) },
        { icon: "address-book", text: "Your address book", desc: "Edit, add or delete a delivery address.", onPress: () => navigation.navigate('AccountCommon',{title:'Your addresses',    message: 'You dont have a registered address\n\nAdd Address',buttontxt:'+ Add New Address',name:'Address'}) },
        { icon: "envelope",text: "Your communication preferences", desc: "Set your notifications by SMS, email or postal mail.", onPress: () => navigation.navigate('AccountCommon',{title:'Your communication preferences',    message: 'you will receive the best offers, news and new products from Galeries Lafayette:\n\nBy Email\n\nBySMS',buttontxt:'',name:'Envelope'}) },
    ];

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log('User logged out'); 
        navigation.navigate('Home');
    };
    

    return (
        <View style={{ flex: 1 }}>
            <AccountSection
                userName="Parthiban"
                status="Essential"
                menuItems={menuItems}
                onBackPress={() => navigation.goBack()}
                onLogout={handleLogout}
            />
        </View>
    );
};

export default AccountScreen;
