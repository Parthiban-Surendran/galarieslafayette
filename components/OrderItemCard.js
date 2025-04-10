import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderItemCard = ({ item }) => {
    console.log("ITEMS",item.product)
    const navigation = useNavigation();

    const handleProduct = (item) => {
      navigation.navigate('Orders', {
        screen: 'Product',
        params:{product:item.product},
      })   };

  return (
    <TouchableOpacity style={styles.card} onPress={()=>handleProduct(item)}>
      <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.product.productName}</Text>
        <View style={{ marginTop: 10 }}>
  <Text style={{ lineHeight: 18 }}>Quantity: {item.quantity}</Text>
  <Text style={{ lineHeight: 18 }}>Price: ₹{item.price}</Text>
  <Text style={{ fontWeight: 'bold', lineHeight: 18 }}>
    Total Price: ₹{item.price * item.quantity}
  </Text>
</View>

        </View>
    </TouchableOpacity>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
