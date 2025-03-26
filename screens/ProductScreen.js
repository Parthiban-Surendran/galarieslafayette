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
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView ,FlatList} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Swiper from "react-native-swiper";
import shoe from '../assets/shoe.png';
import TopLineText from "../components/TopLineText";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import LuxuryCard from "../components/LuxuryCard";
import BottomComp from "../components/BottomComp";
import { Feather } from "@expo/vector-icons";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("One Size");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const [expandedSections, setExpandedSections] = useState({
    details: false,
    delivery: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle state
    }));
  };


  const products = [
    {
      id: "1",
      name: "Bob Sport Uni",
      brand: "MARINE SERRE",
      price: "210,00 €",
      image: "https://your-image-url.com/bob-sport-uni.jpg", // Replace with actual image URL
    },
    {
      id: "2",
      name: "Eclips moons mini leather satchel bag",
      brand: "MARINE SERRE",
      price: "600,00 €",
      image: "https://your-image-url.com/satchel-bag.jpg", // Replace with actual image URL
    },
    {
      id: "3",
      name: "Vegetable belt in shiny leather",
      brand: "MARINE SERRE",
      price: "250,00 €",
      image: "https://your-image-url.com/belt.jpg", // Replace with actual image URL
    },
    {
      id: "4",
      name: "Moon signature long gloves in recycled jersey",
      brand: "MARINE SERRE",
      price: "200,00 €",
      image: "https://your-image-url.com/gloves.jpg", // Replace with actual image URL
    },
  ];

  return (
    <ScrollView style={styles.container}>
        <TopLineText/>
        <Header/>
        <SearchBar/>
      {/* Image Slider */}
      <Swiper style={styles.imageSlider} showsPagination={true} >
        <Image source={shoe} style={styles.productImage} />
        <Image source={shoe} style={styles.productImage} />
        <Image source={shoe} style={styles.productImage} />
      </Swiper>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>MARC JACOBS</Text>
        <Text style={styles.productName}>Mini Sac Cabas "The Mini Tote Bag"</Text>
        <Text style={styles.price}>450,00 €</Text>

        {/* Size Selection */}
        <Text style={styles.label}>Size</Text>
        <View style={styles.selectionBox}>
          <Picker selectedValue={selectedSize} onValueChange={(itemValue) => setSelectedSize(itemValue)}>
            <Picker.Item label="One Size" value="One Size" />
          </Picker>
        </View>

        {/* Quantity Selection */}
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.selectionBox}>
          <Picker selectedValue={selectedQuantity} onValueChange={(itemValue) => setSelectedQuantity(itemValue)}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>

         {/* Delivery & Returns Section */}
         <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryTitle}>Sold and shipped by <Text style={styles.boldText}>Galeries Lafayette</Text></Text>
          <Text style={styles.subText}><FontAwesome name='check' size={18} color="green" /> In-store pickup: <Text style={styles.highlightText}>Free - within 24 to 48 working hours</Text></Text>
          <Text style={styles.subText}><FontAwesome name='truck' size={18} color="#000" /> Standard home delivery: <Text style={styles.highlightText}>Free from 75,00 € or 5,90 € - within 2 to 4 working days</Text></Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>See all delivery options</Text>
          </TouchableOpacity>
          <Text style={styles.subText}><FontAwesome6 name='box-archive' size={18} color="#000" /> Free returns within 30 days</Text>
        </View>

        {/* Store Availability */}
        <View style={styles.storeAvailabilityContainer}>
          <Text style={styles.storeAvailabilityText}><FontAwesome6 name='location-dot' size={18} color="#000" />  Check the availability of the item in store</Text>
          <TouchableOpacity style={styles.chooseStoreButton}>
            <Text style={styles.chooseStoreText}>CHOOSE A STORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentMethodsContainer}>
        <Text style={styles.paymentMethodsTitle}>Accepted payment methods:</Text>
        <ScrollView style={{paddingBottom:20}} nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
          <Image source={require("../assets/visa.png")} style={styles.paymentIcon} />
        </ScrollView>
      </View>

      {/* Expandable Sections */}
       <TouchableOpacity 
        style={styles.sectionContainer} 
        onPress={() => toggleSection("details")}
      >
        <Text style={styles.sectionTitle}>Details and composition</Text>
        <Feather
          name={expandedSections.details ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.sectionContainer} 
        onPress={() => toggleSection("delivery")}
      >
        <Text style={styles.sectionTitle}>Delivery options</Text>
        <Feather
          name={expandedSections.delivery ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      

      <Text style={styles.heading}>Also discover</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={require('../assets/shoe.png')} style={styles.image} />
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEE MORE ARTICLES</Text>
      </TouchableOpacity>    
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginRight:20 }}>
  <LuxuryCard />
</View>


      </View>
      <BottomComp/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
      highlightText: {
        fontWeight: "bold",
        color: "#008000",
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
        width: "100%",
        height: 50,
        resizeMode: "contain",
      },
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    fontSize: 16,
    color: "#888",
    textTransform: "uppercase",
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 4,
  },
  paymentIcon: {
    width: 50,
    height: 30,
    marginHorizontal: 5,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
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
    marginTop: 20,
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
  checkStoreButton: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  checkStoreText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionContainer: {
    borderTopWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderColor: "#ddd",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  brand: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  name: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductPage;
