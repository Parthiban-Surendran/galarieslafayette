// import React from 'react';
// import {View,StyleSheet} from 'react-native';
// import Header from '../components/Header';
// import TopLineText from '../components/TopLineText';
// import OptionCommonComponent from '../components/OptionCommonComponent';

// const FavouritesScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}>

//         <View style={{height:800,backgroundColor:'#fff'}}>

//             <TopLineText />
//             <Header />
//             <OptionCommonComponent title='Favourites' extra='You might like' onBackPress={() => navigation.goBack()}/>
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

// export default FavouritesScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import OptionCommonComponent from '../components/OptionCommonComponent';
import TopLineText from '../components/TopLineText';
import Header from '../components/Header';
import useCategoryManager from '../hooks/useCategoryManager';
import { Snackbar } from 'react-native-paper';
const FavouritesScreen = ({ navigation }) => {
  const { favourites, removeFavourite,removeAllFavourite,loadFavourites } = useCategoryManager(1);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };


 

  return (
    <>
      <TopLineText />
      <Header />
      <OptionCommonComponent
        navigation={navigation}
        title="Favourites"
        extra={favourites.length === 0 ? 'You might like' : 'Suggested Products'}
        onBackPress={() => navigation.goBack()}
        customContent={
          favourites.length === 0 ? (
            <>
              <Text style={styles.emptyText}>You have no favourite items.</Text>
              <TouchableOpacity
                style={styles.startShoppingButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.startShoppingText}>START BROWSING</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {favourites.map((item, index) => (
                <View key={index} style={styles.favItem}>
                  <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.name}>{item.product.productName}</Text>
                    <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={async () => {
                      await removeFavourite(item.product.productId);
                      showSnackbar(`${item.product.productName} removed from favourites`);
                    }}
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}

              <TouchableOpacity
                style={styles.clearButton}
                onPress={async () => {
                  // Loop through all and remove
                  
                    await removeAllFavourite();
                  
                  showSnackbar('All favourites cleared');
                }}
              >
                <Text style={styles.clearButtonText}>Clear Favourites</Text>
              </TouchableOpacity>
            </>
          )
        }
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarMessage}
      </Snackbar>
    </>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 16,
    color: "#444",
    marginVertical: 20,
    textAlign: 'center',
  },
  startShoppingButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
    alignSelf: 'center',
  },
  startShoppingText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  favItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 16,
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
  clearButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 16,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  removeButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  
});

export default FavouritesScreen;

