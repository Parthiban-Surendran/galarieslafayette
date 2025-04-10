// import React from 'react';
// import {View,StyleSheet} from 'react-native';
// import Header from '../components/Header';
// import TopLineText from '../components/TopLineText';
// import OptionCommonComponent from '../components/OptionCommonComponent';

// const BasketScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>

//         <View style={{height:800,backgroundColor:'#fff'}}>

//             <TopLineText />
//             <Header />
//             <OptionCommonComponent title='Basket' extra='Also Discover' onBackPress={()=>{navigation.goBack();}}/>
//         </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container:{
//         height:200,
//         width:'100%',
//         backgroundColor:'#000000'
//     },
// })

// export default BasketScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import OptionCommonComponent from '../components/OptionCommonComponent';
// import { useCart } from '../context/CartContext';
// import TopLineText from '../components/TopLineText';
// import Header from '../components/Header';

// const BasketScreen = ({ navigation }) => {
//   const { cartItems, clearCart } = useCart();

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Image source={{uri:item.imageUrl}} style={styles.image} />
//       <View style={{ flex: 1, marginLeft: 10 }}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <>
//     <TopLineText/>
//     <Header/>
//     <OptionCommonComponent
//       navigation={navigation}
//       title="Basket"
//       extra={cartItems.length === 0 ? "You might like" : "Suggested Products"}
//       onBackPress={() => navigation.goBack()}
//       customContent={
//         cartItems.length === 0 ? (
//           <>
//             <Text style={styles.emptyText}>Your basket is empty.</Text>
//             <TouchableOpacity style={styles.startShoppingButton} onPress={() => navigation.navigate('Home')}>
//               <Text style={styles.startShoppingText}>START YOUR SHOPPING</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {cartItems.map((item, index) => (
//               <View key={index} style={styles.cartItem}>
//                 <Image source={{uri:item.imageUrl}} style={styles.image} />
//                 <View style={{ flex: 1, marginLeft: 10 }}>
//                   <Text style={styles.name}>{item.productName}</Text>
//                   <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//                 </View>
//               </View>
//             ))}
//             <TouchableOpacity
//               style={styles.buyButton}
//               onPress={() => {
//                 clearCart();
//                 alert('Order Placed!');
//               }}
//             >
//               <Text style={styles.buyButtonText}>Buy Now</Text>
//             </TouchableOpacity>
//           </>
//         )
//       }
//     />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   emptyText: {
//     fontSize: 16,
//     color: "#444",
//     marginVertical: 20,
//   },
//   startShoppingButton: {
//     backgroundColor: "#000",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   startShoppingText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   cartItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//     borderRadius: 10,
//   },
//   image: {
//     width: 70,
//     height: 70,
//     borderRadius: 10,
//   },
//   name: {
//     fontSize: 16,
//   },
//   price: {
//     color: 'gray',
//   },
//   buyButton: {
//     backgroundColor: '#000',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buyButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default BasketScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,ActivityIndicator, Image, StyleSheet, Alert } from 'react-native';
import OptionCommonComponent from '../components/OptionCommonComponent';
import { Ionicons } from '@expo/vector-icons';
import useCategoryManager from '../hooks/useCategoryManager';
import axios from 'axios';

import { useStripe } from '@stripe/stripe-react-native';
import TopLineText from '../components/TopLineText';
import Header from '../components/Header';
import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import { useCart } from '../context/CartContext';
import PaymentSuccess from '../components/PaymentSuccess'; // update path as needed
import GaleriesLoader from '../components/GaleriesLoader';


const BasketScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [orderData,setOrderData] = useState({})
  const [paymentReady, setPaymentReady] = useState(false);
  const [error, setError] = useState(null);
  const [paymentEnable,setPaymentEnable] = useState(false);

const {cartUpdated,setCartUpdated} = useCart();
  const {
    cartItems,
    loadCart,
    
    updateItemQuantity,
    removeItemFromCart,
  } = useCategoryManager();
  useEffect(() => {
    loadCart();
    setCartUpdated(false);
  }, [cartUpdated]);

  const initializePayment = async (userId, totalAmount) => {
    try {
      const response = await axios.post(
        `http://192.168.1.92:3000/products/payment/create-intent`,
        { totalAmount, currency: 'usd', userId },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      const { paymentIntent, ephemeralKey, customer, publishableKey } = response.data.data;
  
      const { error } = await initPaymentSheet({
        merchantDisplayName: 'Your Store Name',
        paymentIntentClientSecret: paymentIntent,
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        allowsDelayedPaymentMethods: true,
      });
  
      if (!error) {
        setPaymentReady(true);
        return true;
      } else {
        console.error("⚠️ Error initializing payment sheet:", error);
        Alert.alert('Error', 'Failed to initialize payment.');
        return false;
      }
    } catch (err) {
      console.error("Error in initializePayment:", err);
      Alert.alert('Error', 'Failed to initialize payment.');
      return false;
    }
  };
  
  const handlePayment = async () => {
    if (cartItems.cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to your basket.');
      return;
    }
  
    setLoading(true);
  
    try {
      // 1. Create the order and get order data
      const orderResponse = await axios.post('http://192.168.1.92:3000/products/order', {
        items: cartItems.cartItems,
      });
  
      const order = orderResponse.data;
      setOrderData(order); // Optional, if you want to store for display/debug later
  
      // 2. Initialize the payment sheet using fresh order data directly
      const paymentInitResult = await initializePayment(order.order.userId, order.order.totalAmount);
  
      if (paymentInitResult) {
        // 3. Present payment sheet
        const { error } = await presentPaymentSheet();
  
        if (error) {
          await axios.patch(`http://192.168.1.92:3000/products/order/${order.order.orderId}/cancel`);

          Alert.alert('Payment Failed', error.message);
        } else {
          console.log("✅ Payment successful");
  
          // 4. Mark order as complete
          await axios.patch(`http://192.168.1.92:3000/products/order/${order.order.orderId}/complete`);
  
          console.log('✅ Order status updated to COMPLETED');
          navigation.navigate('PaymentSuccess', {
            paymentId: order.order.orderId,
            totalAmount: order.order.totalAmount,
            orderDate: order.order.date || new Date().toISOString().slice(0, 10),
            otherDetails: 'Thank you for your purchase!',
          });
        }
      }
  
    } catch (err) {
      Alert.alert('Payment Error', 'Something went wrong.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  
  if (loading) {
      return <GaleriesLoader/>
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  const handleIncrease = (productId, currentQty) => {
    updateItemQuantity(productId, currentQty + 1);
  };

  const handleDecrease = (productId, currentQty) => {
    if (currentQty <= 1) {
      removeItemFromCart(productId);
      setCartUpdated(false);
    } else {
      updateItemQuantity(productId, currentQty - 1);
      setCartUpdated(false);
    }
  };

  return (
    <>
      <TopLineText />
      <Header />
      <OptionCommonComponent
        navigation={navigation}
        title="Basket"
        extra={cartItems.length === 0 ? "You might like" : "Suggested Products"}
        onBackPress={() => navigation.goBack()}
        customContent={
          cartItems.length === 0 ? (
            <>
              <Text style={styles.emptyText}>Your basket is empty.</Text>
              <TouchableOpacity
                style={styles.startShoppingButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.startShoppingText}>START YOUR SHOPPING</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {cartItems.cartItems.map((item, index) => (
                <View key={index} style={styles.cartItem}>
                  <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.name}>{item.product.productName}</Text>
                    <Text style={styles.price}>${item.product.price.toFixed(2)*item.quantity}</Text>

                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        onPress={() => {handleDecrease(item.productId, item.quantity);setCartUpdated((prev)=>!prev)}}
                        style={styles.qtyButton}
                      >
                        <Ionicons name="remove" size={20} />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => {handleIncrease(item.productId, item.quantity);setCartUpdated((prev)=>!prev)}}
                        style={styles.qtyButton}
                      >
                        <Ionicons name="add" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {removeItemFromCart(item.productId);setCartUpdated((prev)=>!prev)}}
                        style={styles.removeBtn}
                      >
                        <Ionicons name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}

              <TouchableOpacity
                style={styles.buyButton}
                onPress={handlePayment}
              >
                <Text style={styles.buyButtonText}>
                  {loading ? 'Processing...' : 'Buy Now'}
                </Text>
              </TouchableOpacity>
            </>
          )
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 16,
    color: "#444",
    marginVertical: 20,
    textAlign: "center",
  },
  startShoppingButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  startShoppingText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
  },
  price: {
    color: 'gray',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  qtyButton: {
    padding: 6,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeBtn: {
    marginLeft: 20,
  },
  buyButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BasketScreen;
