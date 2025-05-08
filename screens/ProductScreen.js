// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import productImage from "../assets/shoe.png"; // Replace with actual image
// import TopLineText from "../components/TopLineText";
// import Header from "../components/Header";
// import SearchBar from "../components/SearchBar";
// import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// const ProductPage = () => {
//   const [selectedSize, setSelectedSize] = useState("40 FR");
//   const [selectedQuantity, setSelectedQuantity] = useState("1");

//   return (
//     <ScrollView style={styles.container}>
//       <TopLineText />
//       <Header />
//       <SearchBar />

//       {/* Product Image */}
//       <Image source={productImage} style={styles.productImage} />

//       {/* Product Details */}
//       <View style={styles.detailsContainer}>
//         <Text style={styles.colorText}>Color: Black</Text>
//         <Text style={styles.brandName}>Marine Serre</Text>
//         <Text style={styles.productDescription}>Baskets basses MS-Rise 22 cuir</Text>
//         <TouchableOpacity>
//           <Text style={styles.detailedDescription}>Detailed description</Text>
//         </TouchableOpacity>

//         <Text style={styles.price}>450,00 €</Text>

//         {/* Size & Quantity Selection */}
//         <View style={styles.selectionContainer}>
//           <View style={styles.selectionBox}>
//             <Picker selectedValue={selectedSize} onValueChange={(itemValue) => setSelectedSize(itemValue)}>
//               <Picker.Item label="40 FR" value="40 FR" />
//               <Picker.Item label="41 FR" value="41 FR" />
//               <Picker.Item label="42 FR" value="42 FR" />
//             </Picker>
//           </View>

//           <View style={styles.selectionBox}>
//             <Picker selectedValue={selectedQuantity} onValueChange={(itemValue) => setSelectedQuantity(itemValue)}>
//               <Picker.Item label="1" value="1" />
//               <Picker.Item label="2" value="2" />
//               <Picker.Item label="3" value="3" />
//             </Picker>
//           </View>
//         </View>

//         {/* Add to Cart Button */}
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartText}>ADD TO CART</Text>
//         </TouchableOpacity>

//         {/* Delivery Info */}
//         <View style={styles.deliveryContainer}>
//           <Text style={styles.deliveryText}>✅ Sold and shipped by <Text style={styles.boldText}>Galeries Lafayette</Text></Text>
//           <Text style={styles.subText}>📦 In-store pickup: Free - within 24 to 48 working hours</Text>
//           <Text style={styles.subText}><FontAwesome name='truck' size={20} color="#000" /> Standard home delivery: From 75.00 € or 5.90 € - within 2 to 4 working days</Text>
//           <TouchableOpacity>
//             <Text style={styles.linkText}>See all delivery options</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Return Policy */}
//         <Text style={styles.returnPolicy}>🔄 Free returns within 30 days</Text>

//         {/* Store Selection */}
//         <TouchableOpacity style={styles.chooseStoreButton}>
//           <Text style={styles.chooseStoreText}>CHOOSE A STORE</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   productImage: {
//     width: "100%",
//     height: 350,
//     resizeMode: "cover",
//   },
//   detailsContainer: {
//     padding: 16,
//   },
//   colorText: {
//     fontSize: 14,
//     color: "gray",
//     marginBottom: 4,
//   },
//   brandName: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   productDescription: {
//     fontSize: 16,
//     color: "#555",
//   },
//   detailedDescription: {
//     fontSize: 14,
//     color: "#007AFF",
//     marginTop: 4,
//   },
//   price: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   selectionContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   selectionBox: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     paddingVertical: 6,
//     marginRight: 8,
//   },
//   addToCartButton: {
//     backgroundColor: "black",
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   addToCartText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   deliveryContainer: {
//     marginTop: 20,
//   },
//   deliveryText: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   subText: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 5,
//   },
//   linkText: {
//     fontSize: 14,
//     color: "#007AFF",
//     marginTop: 4,
//   },
//   returnPolicy: {
//     fontSize: 14,
//     color: "#555",
//     marginTop: 10,
//   },
//   chooseStoreButton: {
//     borderWidth: 1,
//     borderColor: "#000",
//     padding: 12,
//     alignItems: "center",
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   chooseStoreText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
// });

// export default ProductPage;



import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Swiper from "react-native-swiper";
import TopLineText from "../components/TopLineText";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import LuxuryCard from "../components/LuxuryCard";
import BottomComp from "../components/BottomComp";
import { useCart } from "../context/CartContext";
import useCategoryManager from "../hooks/useCategoryManager";

const ProductPage = ({ navigation, route }) => {
  const { product } = route.params;
  const { addItemToCart,fetchBannerProducts } = useCategoryManager();
  const {setCartUpdated} = useCart();

  const handlePressBanner44 = async (categoryId) => {
    setLoading(true); // Show loader
    try {
        const data = await fetchBannerProducts(categoryId);
        navigation.navigate('Dashboard', {
            screen: 'DashboardMain',
            params: { products: data }
        });
    } catch (error) {
        console.error('Error fetching banner products:', error);
    } finally {
        setLoading(false); 
    }
};

  

  const [selectedSize, setSelectedSize] = useState("One Size");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const [expandedSections, setExpandedSections] = useState({
    details: false,
    delivery: false,
  });

  const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 3); // Add 3 days

const formattedDate = deliveryDate.toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});



  const [loading, setLoading] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleStores = () => {
    navigation.navigate("Stores");
  };

  // Header Component for FlatList: all static content on top
  const ListHeader = () => (
    <>
    
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonOverImage}
      >
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Swiper style={styles.imageSlider} showsPagination={true}>
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      </Swiper>

      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.name}>{product.productName}</Text>
          <Text style={styles.price}>{product.price}€</Text>   
          <Text style={styles.deliveryText}>FREE Delivery.</Text>
          <Text style={styles.deliveryText}>Delivered by {formattedDate}</Text>

        {/* <Text style={styles.label}>Size</Text>
        <View style={styles.selectionBox}>
          <Picker
            selectedValue={selectedSize}
            onValueChange={(itemValue) => setSelectedSize(itemValue)}
          >
            <Picker.Item label="One Size" value="One Size" />
          </Picker>
        </View> */}

         <TouchableOpacity style={styles.addToCartButton} onPress={() => {alert("Item Added to Cart Successfully");setCartUpdated((prev)=>!prev);addItemToCart(product)}}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>

        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryTitle}>
            Sold and shipped by{" "}
            <Text style={styles.boldText}>Galeries Lafayette</Text>
          </Text>
          <Text style={styles.subText}>
            <FontAwesome name="check" size={18} color="green" /> In-store pickup:{" "}
            <Text style={styles.highlightText}>
              Free - within 24 to 48 working hours
            </Text>
          </Text>
          <Text style={styles.subText}>
            <FontAwesome name="truck" size={18} color="#000" /> Standard home
            delivery:{" "}
            <Text style={styles.highlightText}>
              Free from 75,00 € or 5,90 € - within 2 to 4 working days
            </Text>
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>See all delivery options</Text>
          </TouchableOpacity>
          <Text style={styles.subText}>
            <FontAwesome6 name="box-archive" size={18} color="#000" /> Free returns
            within 30 days
          </Text>
        </View>

        <View style={styles.storeAvailabilityContainer}>
          <Text style={styles.storeAvailabilityText}>
            <FontAwesome6 name="location-dot" size={18} color="#000" /> Check the
            availability of the item in store
          </Text>
          <TouchableOpacity
            style={styles.chooseStoreButton}
            onPress={handleStores}
          >
            <Text style={styles.chooseStoreText}>CHOOSE A STORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentMethodsContainer}>
          <Text style={styles.paymentMethodsTitle}>
            Accepted payment methods:
          </Text>
          {/* Add your payment icons here */}
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/visa.png")}
              style={styles.paymentIcon}
            />
            <Image
              source={require("../assets/visa.png")}
              style={styles.paymentIcon}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.sectionContainer}
          onPress={() => toggleSection("details")}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.sectionTitle}>Details and composition</Text>
                <Feather
                  name={expandedSections.details ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="black"
                  style={{padding:20}}
                />
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionContainer}
          onPress={() => toggleSection("delivery")}
        >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Text style={styles.sectionTitle}>Delivery options</Text>
          <Feather
            name={expandedSections.delivery ? "chevron-up" : "chevron-down"}
            size={24}
            color="black"
            style={{padding:20}}
          />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );

  // Footer Component for FlatList: for "See More Articles" and other content
  const ListFooter = () => (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handlePressBanner44(product.category.categoryId)
        }}
      >
        <Text style={styles.buttonText}>SEE MORE ARTICLES</Text>
      </TouchableOpacity>
      <BottomComp />
    </>
  );

  return (
    <FlatList
      style={styles.container}
      data={product.relatedProducts || []}
      keyExtractor={(item, index) =>
        item.productId ? item.productId.toString() : index.toString()
      }
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 10 }}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.push("ProductPage", { product: item })}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.name}>{item.productName}</Text>
          <Text style={styles.price}>{item.price}€</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  sectionTitle:{
    fontWeight:'bold',
    fontSize:21,
    padding:20
  },
  // Header and general UI styles
  backButtonOverImage: {
    position: "absolute",
    top:10,
    left: 5,
    zIndex: 999,
    backgroundColor: "#ffffffaa",
    padding: 8,
    borderRadius: 20,
  },
  imageSlider: {
    height: 400,
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 16,
  },
  brand: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
    marginBottom:10
  },
  productName: {
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom:10
  },
  
  label: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 10,
  },
  selectionBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 6,
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryContainer: {
    marginTop: 20,
  },
  deliveryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 3,
  },
  linkText: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 4,
  },
  storeAvailabilityContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: "#ddd",
    alignItems: "center",
  },
  storeAvailabilityText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  chooseStoreButton: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    alignItems: "center",
    borderRadius: 25,
    width: "100%",
  },
  chooseStoreText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentMethodsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  paymentMethodsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paymentIcon: {
    width: 50,
    height: 30,
    marginHorizontal: 5,
    resizeMode: "contain",
  },
  // Styles for related products list items
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    maxWidth: "48%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  namePriceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
  },  
  name: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, // allows it to take up available space
    marginRight: 10, // space between name and price
    marginBottom:10,
  },
  
  
  // Duplicate brand style for related products; you can rename if needed
  // or merge with the above one if they are the same.
 
 
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 20,
    width:'70%',
    marginLeft:50,
   marginBottom:20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  deliveryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: '500',
  }
  
});

export default ProductPage;
