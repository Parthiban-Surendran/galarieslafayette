import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import Header from '../components/Header';
import TopLineText from '../components/TopLineText';
import SearchBar from '../components/SearchBar';
import LuxuryCard from '../components/LuxuryCard';
import BottomComp from '../components/BottomComp';
import GaleriesLoader from '../components/GaleriesLoader';
import { AntDesign, Feather } from '@expo/vector-icons';
import useCategoryManager from '../hooks/useCategoryManager';

const AllProducts = ({ navigation }) => {
  const [favorites, setFavorites] = useState({});
  const { fetchAllProducts,allProducts, isLoading } = useCategoryManager();
    useEffect(async()=>{
        await fetchAllProducts();
    },[])
 

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleProduct = (item) => {
    navigation.navigate('Product', { product: item });
  };

  if (isLoading) {
    return <GaleriesLoader />;
  }

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <TopLineText />
          <Header />
          <View style={styles.headerContent}>
            <SearchBar />
            <Text style={styles.title}>All Products</Text>
            <Text style={styles.description}>
              Browse our entire product collection
            </Text>
          </View>
        </>
      }
      data={allProducts}
      numColumns={2}
      keyExtractor={(item, index) =>
        item.productId ? item.productId.toString() : index.toString()
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.productCard}
          onPress={() => handleProduct(item)}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
          <Text style={styles.productBrand}>{item.brand}</Text>
          <Text style={styles.productTitle}>{item.productName}</Text>
          <Text style={styles.productPrice}>{item.price}€</Text>
          <TouchableOpacity
            style={styles.heartIcon}
            onPress={() => toggleFavorite(item.id)}
          >
            {favorites[item.id] ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <Feather name="heart" size={24} color="gray" />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      ListFooterComponent={
        <>
          <LuxuryCard />
          <BottomComp />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    margin: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productBrand: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default AllProducts;
