import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const PaymentSuccess = ({ route }) => {
  const navigation = useNavigation();
  const { paymentId, totalAmount, orderDate, otherDetails } = route.params;

  return (
    <View style={styles.container}>
      {/* Bubbles */}
      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        direction="alternate"
        style={styles.bubble1}
      />
      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        direction="alternate"
        delay={500}
        style={styles.bubble2}
      />

      {/* Tick */}
      <Animatable.View animation="bounceIn" duration={1500} style={styles.iconContainer}>
        <FontAwesome name="check-circle" size={80} color="#22c55e" />
      </Animatable.View>

      {/* Message */}
      <Text style={styles.title}>Payment Successful</Text>

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.detailText}>Payment ID: {paymentId}</Text>
        <Text style={styles.detailText}>Total: ₹{totalAmount}</Text>
        <Text style={styles.detailText}>Date: {orderDate}</Text>
        {otherDetails && <Text style={styles.detailText}>Note: {otherDetails}</Text>}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Orders', {
          screen: 'OrderScreen',
          
        })}
      >
        <Text style={styles.buttonText}>Go to Orders</Text>
      </TouchableOpacity>
    </View>
  );
};




export default PaymentSuccess;




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecfdf5',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      position: 'relative',
    },
    iconContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#16a34a',
      marginBottom: 20,
    },
    details: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      width: '100%',
      marginBottom: 30,
      elevation: 3,
    },
    detailText: {
      fontSize: 16,
      color: '#333',
      marginBottom: 6,
    },
    button: {
      backgroundColor: '#16a34a',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
    bubble1: {
      position: 'absolute',
      width: 120,
      height: 120,
      backgroundColor: '#bbf7d0',
      borderRadius: 60,
      top: -30,
      left: -40,
      opacity: 0.3,
    },
    bubble2: {
      position: 'absolute',
      width: 180,
      height: 180,
      backgroundColor: '#86efac',
      borderRadius: 90,
      bottom: -50,
      right: -60,
      opacity: 0.2,
    },
  });
  
