// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import Header from "../components/Header";
// import CustomDrawer from "../components/CustomDrawer";

// const Drawer = createDrawerNavigator();

// export default function DrawerNavigator(){

//     return (
//         <NavigationContainer>
//             <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
//                 <Drawer.Screen
//                     name="Home"
//                     component={Header}
//                     options={{ headerShown: false }}
//                 />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );

//  }




 import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import Favourites from '../screens/FavouritesScreen';
import Basket from "../screens/BasketScreen";
import ReusableDrawer from "../components/ReusableDrawer";
import AccountScreen from "../screens/AccountScreen";
import Login from "../screens/LoginScreen";
import Password from '../screens/PasswordScreen';
import { AuthProvider } from "../context/AuthContext";
import DashboardScreen from "../screens/DashboardScreen";
import AccountMenuCommon from "../components/AccountMenuCommon";
import ProductScreen from "../screens/ProductScreen";
import StoresScreen from "../screens/StoresScreen";
import ServicesScreen from "../screens/ServicesScreen";
import HelpScreen from "../screens/HelpScreen";
import ServiceCommon from "../components/ServiceCommon";
import PreparePurchaseScreen from "../screens/PreparePurchaseScreen";
import AllProducts from "../screens/AllProductsScreen";
import DashboardStack from './DashboardStack'; // adjust path if needed
import OrderScreen from "../screens/OrderScreen";
import PaymentSuccess from '../components/PaymentSuccess'
import OrderDetailScreen from "../screens/OrderDetailScreen";
import OrderStackNavigator from './OrderStackNavigator'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {
    return (
        <AuthProvider>
        <Drawer.Navigator
            drawerContent={(props) => <ReusableDrawer {...props}/>}
            screenOptions={{ headerShown: false }} 
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Favourites" component={Favourites} />
            <Drawer.Screen name="Basket" component={Basket} />
            <Drawer.Screen name="Account" component={AccountScreen} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Password" component={Password} />
            <Drawer.Screen name="Dashboard" component={DashboardStack} />

            <Drawer.Screen name="AccountCommon" component={AccountMenuCommon} />
            <Drawer.Screen name="Product" component={ProductScreen} />
            <Drawer.Screen name="Stores" component={StoresScreen} />

            <Drawer.Screen name="Services" component={ServicesScreen} />
            <Drawer.Screen name="Help" component={HelpScreen} />

            <Drawer.Screen name="ServiceComp" component={ServiceCommon} />
            <Drawer.Screen name="Purchase" component={PreparePurchaseScreen} />
            <Drawer.Screen name="AllProducts" component={AllProducts} />
            {/* <Drawer.Screen name="OrdersScreen" component={OrderScreen} /> */}
            <Drawer.Screen name="PaymentSuccess" component={PaymentSuccess} />
            {/* <Drawer.Screen name="OrderDetail" component={OrderDetailScreen} /> */}

            <Drawer.Screen
  name="Orders"
  component={OrderStackNavigator}
/>


        </Drawer.Navigator>
        </AuthProvider>
    );
}
