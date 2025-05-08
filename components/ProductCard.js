// import React, { useState } from 'react';
// import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import { Feather, AntDesign } from "@expo/vector-icons";
// const ProductCard = ({
//     product,
//     onPress
// }) => {
//     const [isFavorite, setIsFavorite] = useState(false);
//     return <TouchableOpacity style={styles.card} onPress={onPress}>
        
//         {/* Heart Icon in Top Right */}
//         <View style={styles.cards}>
//             <TouchableOpacity style={styles.heartContainer} onPress={() => {
//                 setIsFavorite(!isFavorite);
//             }}>
//                 {isFavorite ? <AntDesign name="heart" size={24} color="red" /> : <Feather name="heart" size={24} color="gray" />}
//             </TouchableOpacity>

//             {/* Product Image */}
//             <Image style={styles.image} source={product.image} />
//         </View>

//         {/* Product Details */}
//         <Text style={styles.title}>{product.name}</Text>
//         <Text style={styles.subtitle}>{product.subtitle || 'Description here'}</Text>
//         <Text style={styles.price}>{product.price} €</Text>
//     </TouchableOpacity>;
// };
// const styles = StyleSheet.create({
//     card: {
//         flex: 1,
//         backgroundColor: '#fff',
//         margin: 10,
//         padding: 15,
//         borderRadius: 10,
//         elevation: 5,
//         // Shadow for Android
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         position: 'relative'
//     },
//     cards: {
//         height: 100,
//         width: 130,
//         backgroundColor: '#f0f0ef'
//     },
//     image: {
//         width: 'auto',
//         height: 100,
//         resizeMode: 'contain',
//         marginBottom: 10
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 5
//     },
//     subtitle: {
//         fontSize: 14,
//         color: 'gray',
//         marginBottom: 5
//     },
//     price: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#000000'
//     },
//     heartContainer: {
//         position: 'absolute',
//         top: 10,
//         right: 10,
//         zIndex: 100
//     }
// });
// export default ProductCard;


// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useCart } from '../context/CartContext';
// import { useNavigation } from '@react-navigation/native';
// import useCategoryManager from '../hooks/useCategoryManager';

// const ProductCard = ({ product }) => {
//   const { addItemToCart } = useCategoryManager();
//   const navigation = useNavigation();
// const {setCartUpdated} = useCart();
//   const handleProduct = (item) => {
//     navigation.navigate("Product", { product: item });
// };

  

//   return (
//     <TouchableOpacity style={styles.card} onPress={() => handleProduct(product)}>
//       <Image source={{uri:product.imageUrl}} style={styles.image} />
//       <Text style={styles.name} numberOfLines={2}>{product.productName}</Text>
//       <Text style={styles.price}>${product.price.toFixed(2)}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => {alert("Item Added to Cart Successfully");setCartUpdated((prev)=>!prev);addItemToCart(product)}}>
//         <Text style={styles.buttonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//     card: {
//         width: '45%',
//         height: 250, // or adjust as per your layout
//         margin: 10,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 10,
//         justifyContent: 'space-between',
//       },
//         image: { width: '100%', height: 100, borderRadius: 10 },
//   name: { fontSize: 16, marginVertical: 5 },
//   price: { fontSize: 14, color: 'gray' },
//   button: { backgroundColor: 'black', padding: 10, borderRadius: 5, marginTop: 10 },
//   buttonText: { color: 'white', textAlign: 'center' },
// });

// export default ProductCard;


import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import useCategoryManager from '../hooks/useCategoryManager';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCategoryManager();
  const navigation = useNavigation();
  const { setCartUpdated } = useCart();

  const handleProduct = (item) => {
    navigation.navigate("Product", { product: item });
  };

  const handleAddToCart = () => {
    // First, show the alert
    alert("Item Added to Cart Successfully");

    // Then, update the cart state and add the item to the cart
    addItemToCart(product);
    setCartUpdated((prev) => !prev);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => handleProduct(product)}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{product.productName}</Text>
      <Text style={styles.price}>{product.price.toFixed(2)}€</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 220, // or adjust as per your layout
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: { width: '100%', height: 100, borderRadius: 10 },
  name: { fontSize: 15,fontWeight:700, },
  price: { fontSize: 15,fontWeight:500, color: 'black' },
  button: { backgroundColor: 'black', padding: 10, borderRadius: 5, },
  buttonText: { color: 'white', textAlign: 'center' },
});

export default ProductCard;
