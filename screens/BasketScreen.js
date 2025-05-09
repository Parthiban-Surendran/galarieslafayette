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


// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity,ActivityIndicator, Image, StyleSheet, Alert } from 'react-native';
// import OptionCommonComponent from '../components/OptionCommonComponent';
// import { Ionicons } from '@expo/vector-icons';
// import useCategoryManager from '../hooks/useCategoryManager';
// import axios from 'axios';

// import { useStripe } from '@stripe/stripe-react-native';
// import TopLineText from '../components/TopLineText';
// import Header from '../components/Header';
// import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
// import { useCart } from '../context/CartContext';
// import PaymentSuccess from '../components/PaymentSuccess'; // update path as needed
// import GaleriesLoader from '../components/GaleriesLoader';


// const BasketScreen = ({ navigation }) => {
//   const [loading, setLoading] = useState(false);
//   const [orderData,setOrderData] = useState({})
//   const [paymentReady, setPaymentReady] = useState(false);
//   const [error, setError] = useState(null);
//   const [paymentEnable,setPaymentEnable] = useState(false);
//   const {toggleItemLoader,itemLoaders} = useCart();

// const {cartUpdated,setCartUpdated} = useCart();
//   const {
//     cartItems,
//     loadCart,

//     updateItemQuantity,
//     removeItemFromCart,
//   } = useCategoryManager();
//   useEffect(() => {
//     loadCart();
//     setCartUpdated(false);
//   }, [cartUpdated,cartItems.totalItems]);

//   const initializePayment = async (userId, totalAmount) => {
//     try {
//       const response = await axios.post(
//         `http://192.168.43.94:3000/products/payment/create-intent`,
//         { totalAmount, currency: 'usd', userId },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       const { paymentIntent, ephemeralKey, customer, publishableKey } = response.data.data;

//       const { error } = await initPaymentSheet({
//         merchantDisplayName: 'Your Store Name',
//         paymentIntentClientSecret: paymentIntent,
//         customerId: customer,
//         customerEphemeralKeySecret: ephemeralKey,
//         allowsDelayedPaymentMethods: true,
//       });

//       if (!error) {
//         setPaymentReady(true);
//         return true;
//       } else {
//         console.error("⚠️ Error initializing payment sheet:", error);
//         Alert.alert('Error', 'Failed to initialize payment.');
//         return false;
//       }
//     } catch (err) {
//       console.error("Error in initializePayment:", err);
//       Alert.alert('Error', 'Failed to initialize payment.');
//       return false;
//     }
//   };

//   const handlePayment = async () => {
//     if (cartItems.cartItems.length === 0) {
//       Alert.alert('Cart Empty', 'Please add items to your basket.');
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1. Create the order and get order data
//       const orderResponse = await axios.post('http://192.168.43.94:3000/products/order', {
//         items: cartItems.cartItems,
//       });

//       const order = orderResponse.data;
//       setOrderData(order); // Optional, if you want to store for display/debug later

//       // 2. Initialize the payment sheet using fresh order data directly
//       const paymentInitResult = await initializePayment(order.order.userId, order.order.totalAmount);

//       if (paymentInitResult) {
//         // 3. Present payment sheet
//         const { error } = await presentPaymentSheet();

//         if (error) {
//           await axios.patch(`http://192.168.43.94:3000/products/order/${order.order.orderId}/cancel`);

//           Alert.alert('Payment Failed', error.message);
//         } else {
//           console.log("✅ Payment successful");

//           // 4. Mark order as complete

//           navigation.navigate('PaymentSuccess', {
//             paymentId: order.order.orderId,
//             totalAmount: order.order.totalAmount,
//             orderDate: order.order.date || new Date().toISOString().slice(0, 10),
//             otherDetails: 'Thank you for your purchase!',
//           });
//         }
//       }

//     } catch (err) {
//       Alert.alert('Payment Error', 'Something went wrong.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };


//   if (loading) {
//       return <GaleriesLoader/>
//   }

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   const handleIncrease = async(productId, currentQty) => {
//     toggleItemLoader();
//     updateItemQuantity(productId, currentQty + 1);
//     toggleItemLoader();
//   };

//   const handleDecrease = (productId, currentQty) => {
//     toggleItemLoader();

//     if (currentQty <= 1) {
//       removeItemFromCart(productId);
//       setCartUpdated(false);
//     } else {
//       updateItemQuantity(productId, currentQty - 1);
//       setCartUpdated(false);
//     }
//     toggleItemLoader();

//   };

//   return (
//     <>

//       <OptionCommonComponent
//         navigation={navigation}
//         title="Basket"
//         extra={cartItems.length === 0 ? "You might like" : "Suggested Products"}
//         onBackPress={() => navigation.goBack()}
//         customContent={
//           cartItems.length === 0 ? (
//             <>
//               <Text style={styles.emptyText}>Your basket is empty.</Text>
//               <TouchableOpacity
//                 style={styles.startShoppingButton}
//                 onPress={() => navigation.navigate('Home')}
//               >
//                 <Text style={styles.startShoppingText}>START YOUR SHOPPING</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {cartItems.cartItems.map((item, index) => (
//                 <View key={index} style={styles.cartItem}>
//                   <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
//                   <View style={{ flex: 1, marginLeft: 10 }}>
//                     <Text style={styles.name}>{item.product.productName}</Text>
//                     <Text style={styles.price}>${item.product.price.toFixed(2)*item.quantity}</Text>

//                     <View style={styles.quantityControls}>
//                       <TouchableOpacity
//                         onPress={() => {handleDecrease(item.productId, item.quantity);setCartUpdated((prev)=>!prev)}}
//                         style={styles.qtyButton}
//                       >
//                         <Ionicons name="remove" size={20} />
//                       </TouchableOpacity>
//                       <Text style={styles.qtyText}>{item.quantity}</Text>
//                       <TouchableOpacity
//   onPress={async () => {
//         await handleIncrease(item.productId, item.quantity); // Ensure this is an async function
//           setCartUpdated(prev => !prev);
//   }}
//   style={styles.qtyButton}
// >
//   {itemLoaders? (
//     <ActivityIndicator size="small" color="#000" />
//   ) : (
//     <Ionicons name="add" size={20} />
//   )}
// </TouchableOpacity>
//                       <TouchableOpacity
//                         onPress={() => {removeItemFromCart(item.productId);    toggleItemLoader();
// ;                          setCartUpdated((prev)=>!prev);    toggleItemLoader();
// }}
//                         style={styles.removeBtn}
//                       >

//     <Ionicons name="trash" size={20} color="red" />

//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               ))}

//               <TouchableOpacity
//                 style={styles.buyButton}
//                 onPress={handlePayment}
//               >
//                 <Text style={styles.buyButtonText}>
//                   {loading ? 'Processing...' : 'Buy Now'}
//                 </Text>
//               </TouchableOpacity>
//             </>
//           )
//         }
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   emptyText: {
//     fontSize: 16,
//     color: "#444",
//     marginVertical: 20,
//     textAlign: "center",
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
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   qtyButton: {
//     padding: 6,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//   },
//   qtyText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   removeBtn: {
//     marginLeft: 20,
//   },
//   buyButton: {
//     backgroundColor: '#000',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   buyButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default BasketScreen;



// screens/BasketScreen.js

// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
// import OptionCommonComponent from '../components/OptionCommonComponent';
// import { Ionicons } from '@expo/vector-icons';
// import useCategoryManager from '../hooks/useCategoryManager';
// import usePayment from '../hooks/usePayment'; // Import the custom hook
// import { useCart } from '../context/CartContext';
// import GaleriesLoader from '../components/GaleriesLoader';

// const BasketScreen = ({ navigation }) => {

//   const {setCartUpdated,cartUpdated,itemLoaders} = useCart();
//   const {
//         cartItems,
//         loadCart,
//         updateItemQuantity,
//         removeItemFromCart,
//       } = useCategoryManager();  
//       console.log("CARTITEMS:",cartItems)
//   const { loading, handleOrderAndPayment } = usePayment(); // Destructure hook for payment-related actions
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadCart();

//     setCartUpdated(false);
//   }, [cartUpdated,cartItems.totalItems]);

//   const handleIncrease = async (productId, currentQty) => {
//     toggleItemLoader();
//     updateItemQuantity(productId, currentQty + 1);
//     toggleItemLoader();
//   };

//   const handleDecrease = (productId, currentQty) => {
//     toggleItemLoader();

//     if (currentQty <= 1) {
//       removeItemFromCart(productId);
//       setCartUpdated(false);
//     } else {
//       updateItemQuantity(productId, currentQty - 1);
//       setCartUpdated(false);
//     }
//     toggleItemLoader();
//   };

//   const handlePayment = () => {
//     handleOrderAndPayment(cartItems.cartItems, navigation); // Use the hook to process payment and order
//   };

//   if (loading) {
//     return <GaleriesLoader />;
//   }

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   return (
//     <>
//       <OptionCommonComponent
//         navigation={navigation}
//         title="Basket"
//         extra={cartItems.length === 0 ? "You might like" : "Suggested Products"}
//         onBackPress={() => navigation.goBack()}
//         customContent={
//           cartItems.length === 0 ? (
//             <>
//               <Text style={styles.emptyText}>Your basket is empty.</Text>
//               <TouchableOpacity
//                 style={styles.startShoppingButton}
//                 onPress={() => navigation.navigate('Home')}
//               >
//                 <Text style={styles.startShoppingText}>START YOUR SHOPPING</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {cartItems.cartItems.map((item, index) => (
//                 <View key={index} style={styles.cartItem}>
//                   <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
//                   <View style={{ flex: 1, marginLeft: 10 }}>
//                     <Text style={styles.name}>{item.product.productName}</Text>
//                     <Text style={styles.price}>${item.product.price.toFixed(2) * item.quantity}</Text>

//                     <View style={styles.quantityControls}>
//                       <TouchableOpacity
//                         onPress={() => {handleDecrease(item.productId, item.quantity); setCartUpdated((prev) => !prev)}}
//                         style={styles.qtyButton}
//                       >
//                         <Ionicons name="remove" size={20} />
//                       </TouchableOpacity>
//                       <Text style={styles.qtyText}>{item.quantity}</Text>
//                       <TouchableOpacity
//                         onPress={async () => {
//                           await handleIncrease(item.productId, item.quantity); 
//                           setCartUpdated(prev => !prev);
//                         }}
//                         style={styles.qtyButton}
//                       >
//                         {itemLoaders ? (
//                           <ActivityIndicator size="small" color="#000" />
//                         ) : (
//                           <Ionicons name="add" size={20} />
//                         )}
//                       </TouchableOpacity>
//                       <TouchableOpacity
//                         onPress={() => {removeItemFromCart(item.productId); setCartUpdated(prev => !prev)}}
//                         style={styles.removeBtn}
//                       >
//                         <Ionicons name="trash" size={20} color="red" />
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               ))}

//               <TouchableOpacity
//                 style={styles.buyButton}
//                 onPress={handlePayment}
//               >
//                 <Text style={styles.buyButtonText}>
//                   {loading ? 'Processing...' : 'Buy Now'}
//                 </Text>
//               </TouchableOpacity>
//             </>
//           )
//         }
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   emptyText: {
//     fontSize: 16,
//     color: "#444",
//     marginVertical: 20,
//     textAlign: "center",
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
//   quantityControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   qtyButton: {
//     padding: 6,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//   },
//   qtyText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   removeBtn: {
//     marginLeft: 20,
//   },
//   buyButton: {
//     backgroundColor: '#000',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   buyButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default BasketScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import OptionCommonComponent from '../components/OptionCommonComponent';
import { Ionicons } from '@expo/vector-icons';
import useCategoryManager from '../hooks/useCategoryManager';
import usePayment from '../hooks/usePayment';
import { useCart } from '../context/CartContext';
import GaleriesLoader from '../components/GaleriesLoader';

const BasketScreen = ({ navigation }) => {
  const { setCartUpdated, cartUpdated, itemLoaders, toggleItemLoader } = useCart();
  const { cartItems, loadCart, updateItemQuantity, removeItemFromCart } = useCategoryManager();
  const { loading, handleOrderAndPayment } = usePayment();
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCart();
    setCartUpdated(false);
  }, [cartUpdated, cartItems.totalItems]);

  const handleIncrease = async (productId, currentQty) => {
    toggleItemLoader();
    updateItemQuantity(productId, currentQty + 1);
    toggleItemLoader();
  };

  const handleDecrease = (productId, currentQty) => {
    toggleItemLoader();

    if (currentQty <= 1) {
      removeItemFromCart(productId);
      setCartUpdated(false);
    } else {
      updateItemQuantity(productId, currentQty - 1);
      setCartUpdated(false);
    }
    toggleItemLoader();
  };

  const handlePayment = () => {
    console.log(cartItems)
    navigation.navigate('AddressScreen', { cartItems: cartItems.cartItems });
  };

  if (loading) {
    return <GaleriesLoader />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
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
              <View style={{flexDirection:'row'}}>
                <View style={styles.cartItem}>
                  <Image source={{ uri: item.product.imageUrl }} style={styles.image} />

                  <View style={styles.infoContainer}>
                    <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between',marginRight:10}}>
                    <Text
  style={[styles.productName, { flexShrink: 1 }]}
  numberOfLines={1}
  ellipsizeMode="tail"
>
  {item.product.productName}
</Text>
                      <Text style={{ fontSize: 14, fontWeight: '700' }}>x {item.quantity}</Text>

                      
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10,top:10 }}>
                      {/* LEFT: Quantity buttons + Trash */}
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.qtyButton} onPress={() => handleDecrease(item.productId, item.quantity)}>
                          <Ionicons name="remove" size={16} />
                        </TouchableOpacity>

                        <Text style={styles.quantity}>{item.quantity}</Text>

                        <TouchableOpacity style={styles.qtyButton} onPress={() => handleIncrease(item.productId, item.quantity)}>
                          <Ionicons name="add" size={16} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => removeItemFromCart(item.product.id)} style={{ marginLeft: 8 }}>
                          <Ionicons name="trash" color="red" size={18} />
                        </TouchableOpacity>
                      </View>

                      {/* RIGHT: Price */}
                      <Text style={{ fontSize: 17, fontWeight: '600' }}>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </Text>
                    </View>
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
              flex:1,
              flexDirection:'row',
              alignItems:'center',
            borderRadius: 1,
            elevation: 2, // for Android
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 2 },
            shadowRadius: 4, // for iOS
  },

            image: {
              width: 70,
            height: 70,
            borderRadius: 10,
            resizeMode: 'contain',
            left:7,
            marginRight: 10,
  },

            infoContainer: {
              flex: 1,
            justifyContent: 'center',
            height: 90,
  },

            productName: {
              fontSize: 15,
            fontWeight: 'bold',
            color: '#000',
            marginLeft:10,
  },

            variant: {
              fontSize: 12,
            color: '#555',
            marginTop: 2,
  },

            price: {
              fontSize: 14,
            color: '#222',
            marginTop: 2,
  },

            actionsContainer: {
              flexDirection: 'row',
            alignItems: 'center',
            gap: 3,
            flex:1,
            backgroundColor: '#000'
  },

            qtyButton: {
              paddingHorizontal: 5,
            paddingVertical: 6,
            borderRadius: 6,
            backgroundColor: '#eee',
            marginHorizontal: 5,
  },


            quantity: {
              fontSize: 16,
            minWidth: 24,
            textAlign: 'center',
  },

            removeButton: {
              fontSize: 20,
            color: '#FF5A5F',
            paddingLeft: 8,
  },

            buyButton: {
              backgroundColor: '#000',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 10,
  },
            buyButtonText: {
              color: '#fff',
            fontSize: 18,
  },
});

            export default BasketScreen;
