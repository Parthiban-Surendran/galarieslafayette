// hooks/usePayment.js

import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import network from '../utils/network';

const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [paymentReady, setPaymentReady] = useState(false);
  const [error, setError] = useState(null);

  const initializePayment = async (userId, totalAmount) => {
    try {
      const response = await axios.post(
        `${network.BASE_URL}/products/payment/create-intent`,
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

  const handleOrderAndPayment = async (cartItems, selectedAddress, navigation) => {
    const orderData = {
      items: cartItems.map(item => ({
        productId: item.product.productId,  // Assuming 'productId' exists in the cart item
        quantity: item.quantity,
        price: item.product.discountedPrice,
        totalAmount:item.product.discountedPrice*item.quantity
      })),
      address: {
        line1: selectedAddress.line1,
        city: selectedAddress.city,
        state: selectedAddress.state,
        zip: selectedAddress.zip
      }
    };
  
    console.log("Order Data Being Sent:", orderData);
  
    try {
      const orderResponse = await axios.post(`${network.BASE_URL}/products/order`, orderData);
      const order = orderResponse.data;
      console.log("Order Response:", order);
      setOrderData(order);
      
      // 2. Initialize the payment sheet using fresh order data directly
      const paymentInitResult = await initializePayment(order.order.userId, order.order.totalAmount);
  
      if (paymentInitResult) {
        // 3. Present payment sheet
        const { error } = await presentPaymentSheet();
  
        if (error) {
          await axios.patch(`${network.BASE_URL}/products/order/${order.order.orderId}/cancel`);
          Alert.alert('Payment Failed', error.message);
        } else {
          console.log("✅ Payment successful");
  
          // 4. Mark order as complete
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
  
  return {
    loading,
    orderData,
    paymentReady,
    error,
    handleOrderAndPayment,
  };
};

export default usePayment;
