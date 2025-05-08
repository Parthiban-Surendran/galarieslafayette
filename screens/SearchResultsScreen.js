import React, { useEffect, useState } from 'react';
import { View, Text,Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Feather, AntDesign } from "@expo/vector-icons";

import {
    fetchFavourites,
    postFavourites,
    deleteFavourites
} from "../services/categoryService";
import GaleriesLoader from '../components/GaleriesLoader';
import network from '../utils/network';

const SearchResultsScreen = () => {
    const userId = 1;
    const navigation = useNavigation();
    const route = useRoute();
    const { query } = route.params;
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [favourites, setFavourites] = useState([]);
    // const handleProduct = (item) => {
    //     navigation.navigate("Product", { product: item });
    // };
      
    const handleProduct = (item) => {
      navigation.navigate('Searched', {
        screen: 'ProductDetails',
        params: { product: item },
      });
    };
      
    
    const isFavourite = (productId) =>
        favourites.some((fav) => fav.productId === productId);
      
      const toggleFavourite = async (item) => {
        console.log("ITEM",item)
        const productId = item.productId ;
        const isFav = isFavourite(productId);
      console.log(isFav)
        setFavourites((prev) =>
          isFav
            ? prev.filter((fav) => fav.productId !== productId)
            : [...prev, { productId, userId }]
        );
        try {
          if (isFav) {
            await deleteFavourites(productId, userId);
          } else {
            
            await postFavourites(item, userId);
          }
        } catch (err) {
          Alert.alert("Error", "Failed to update favourites.");
        }
      };
      
      const handleFocus = () => {
        navigation.navigate('SearchScreen', { query });
    };

    // Function to search products
    const searchProducts = async (query) => {
        setLoading(true);
        try {
            const response = await axios.get(`${network.BASE_URL}/search?q=${query}`);
            setResults(response.data);  // Set the response data as search results
            
            setLoading(false);
        } catch (error) {
            console.error('Error searching products:', error);
            setError('An error occurred while searching.');
            setLoading(false);
        }
    };
   
  const handleSubmit = (text) => {
    navigation.navigate('SearchResults', { query: text });
  };


    // Run the search when the query changes
    useEffect(() => {
        searchProducts(query);
    }, [query]);
    useEffect(() => {
        const fetchAndUpdateFavourites = async () => {
            try {
                const data = await fetchFavourites(userId);
                setFavourites(data);  // Ensure the UI stays in sync with the backend
            } catch (err) {
                Alert.alert("Error", "Failed to reload favourites.");
            }
        };
    
        fetchAndUpdateFavourites();  // Run this when favourites state changes
    }, []);

    return (
      <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBarContainer}>
          <SearchBar
            initialQuery={query}
            readOnly={false}
            onSubmit={handleSubmit}
          />
        </TouchableOpacity>
      </View>
    
      {/* Content wrapper to allow overlaying the loader */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={results}
          numColumns={2}
          keyExtractor={(item, index) => (item.productId || item.id || index).toString()}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard} onPress={() => handleProduct(item)}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
              <Text style={styles.productBrand}>{item.brand}</Text>
              <Text style={styles.productTitle}>{item.productName}</Text>
              <Text style={styles.productPrice}>{item.price}€</Text>
              <TouchableOpacity
                style={styles.heartIcon}
                onPress={() => toggleFavourite(item)}
              >
                {isFavourite(item.productId) ? (
                  <AntDesign name="heart" size={24} color="red" />
                ) : (
                  <Feather name="heart" size={24} color="#FF0000" />
                )}
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.noResult}>No results found</Text>}
        />
    
        {/* Loader overlay */}
        {loading && (
          <View style={styles.loaderOverlay}>
            <GaleriesLoader />
          </View>
        )}
      </View>
    
      {/* Error message */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
    
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 10 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    loaderOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.94)', // optional dim effect
      zIndex: 10,
    },
    
    searchBarContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    resultItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    noResult: {
        textAlign: 'center',
        marginTop: 20,
        color: '#777',
    },
    loadingText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'blue',
    },
    errorText: {
        textAlign: 'center',
        marginTop: 20,
        color: 'red',
    },
    productCard: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginBottom: 10,
      },
      productImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover',
        backgroundColor: 'rgba(7, 7, 7, 0.3)'
      },
      productBrand: {
        fontSize: 12,
        paddingHorizontal: 10,
        fontWeight: "bold",
        marginTop: 5,
      },
      productTitle: {
        fontSize: 14,
        paddingHorizontal: 10,
        color: "#333",
        marginTop: 2,
      },
      productPrice: {
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: "bold",
        marginTop: 5,
      },
      heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
      },
      noResult: {
        textAlign: 'center',
        marginTop: 20,
        color: '#999',
      }
      
});

export default SearchResultsScreen;
