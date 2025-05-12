// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import CustomDivider from "./CustomDivider";
// import galarieslogo from "../assets/galerieslogo.png"; 
// import { useNavigation } from "@react-navigation/native";
// import CategorySection from "./CategorySection";
// import { DrawerContentScrollView } from "@react-navigation/drawer";
// const WhatsNew = ({ goBack,resetDrawer }) => (
    
//       <CategorySection 
//       goBack={goBack} 
//       title="Nouveaute's" 
//       options={["Femme", "Homme", "Enfant", "Beauté", "Maison"]} 
//       resetDrawer={resetDrawer}
//       />  

// );

// const Women = ({ goBack,resetDrawer }) => (
    

//     <CategorySection 
//     goBack={goBack} 
//     title="Femme" 
//     options={["Vêtements", "Chaussures", "Sacs et bagages", "Lingerie", "Accessoires", "Bijoux et joaillerie"]} 
//     resetDrawer={resetDrawer}
//     />

// );

// const Man = ({ goBack }) => (
//     <CategorySection 
//     goBack={goBack} 
//     title="Homme" 
//     options={["Vêtements", "Chaussures", "Sacs et bagages", "Montres", "Accessoires"]} 
//     resetDrawer={resetDrawer}
// />

// );

// const Child = ({ goBack,resetDrawer }) => (
    
//     <CategorySection 
//     goBack={goBack} 
//     title="Enfant" 
//     options={[
//         "Bébé de 0 à 36 mois", 
//         "Garçon de 3 à 18 ans", 
//         "Fille de 3 à 18 ans", 
//         "Chaussures", 
//         "Sacs et accessoires", 
//         "Jeux et jouets"
//     ]} 
//     resetDrawer={resetDrawer}
//     />

// );

// const Beauty = ({ goBack ,resetDrawer}) => (
//     <CategorySection 
//     goBack={goBack} 
//     title="Beaute'" 
//     options={[
//         "Parfums", 
//         "Maquillage", 
//         "Visage", 
//         "Corps et bain", 
//         "Soins solaires", 
//         "Cheveux"
//     ]}
//     resetDrawer={resetDrawer}
//       />
// );


// const Home = ({ goBack,resetDrawer }) => (
//     <CategorySection 
//     goBack={goBack} 
//     title="Maison" 
//     options={[
//         "Linge de maison", 
//         "Mobilier", 
//         "Luminaires", 
//         "Culinaire", 
//         "Arts de la table", 
//         "Décoration", 
//         "Electroménager et multimédia", 
//         "Jardin"
//     ]} 
//     resetDrawer={resetDrawer}
//       />
// );

// export default function ReusableDrawer(props) {

//     const [selectedOption, setSelectedOption] = useState(null);
//     const navigation = useNavigation();
//     const goBack = () => setSelectedOption(null);

//     return (
//         <DrawerContentScrollView {...props} style={styles.container}>
//             <TouchableOpacity style={styles.closgoBackeButton} onPress={() => {setSelectedOption(null);props.navigation.closeDrawer()}}>
//                 <AntDesign name="close" size={24} color="black" />
//             </TouchableOpacity>

//             <View style={styles.logoContainer}>
//                 <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
//                     <Image source={galarieslogo} style={styles.logo} />
//                 </TouchableOpacity>
                
//             </View>

//             {selectedOption === "whatsNew" && <WhatsNew goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
//             {selectedOption === "women" && <Women goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
//             {selectedOption === "man" && <Man goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
//             {selectedOption === "child" && <Child goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
//             {selectedOption === "beauty" && <Beauty goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}
//             {selectedOption === "home" && <Home goBack={goBack} resetDrawer={() => setSelectedOption(null)}/>}

//             {selectedOption === null && (
//                 <>
//                     <View style={styles.optionbox}>
//                         <TouchableOpacity style={styles.boxoptions} onPress={()=>{navigation.navigate('Stores')}}>
//                             <Text style={[styles.text, { fontWeight: "700" }]}>Stores</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxoptions} onPress={()=>{navigation.navigate('Services')}}>
//                             <Text style={[styles.text, { fontWeight: "700" }]}>Services</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.boxoptions} onPress={()=>{navigation.navigate('Help')}}>
//                             <Text style={[styles.text, { fontWeight: "700" }]}>Need Help?</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <CustomDivider />

//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("whatsNew")}>
//                         <Text style={styles.text}>What's New</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("women")}>
//                         <Text style={styles.text}>Women</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("man")}>
//                         <Text style={styles.text}>Man</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("child")}>
//                         <Text style={styles.text}>Child</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("beauty")}>
//                         <Text style={styles.text}>Beauty</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.option} onPress={() => setSelectedOption("home")}>
//                         <Text style={styles.text}>Home</Text>
//                         <Feather name="chevron-right" size={20} />
//                     </TouchableOpacity>
//                 </>
//             )}
//         </DrawerContentScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     drawertop: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     container1: {
//         flex: 1,
//     },
//     closeButton: {
//         position: "absolute",
//         top: 10,
//         right: 10,
//         padding: 10,
//         zIndex: 10,
//     },
//     logoContainer: {
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     logo: {
//         width: 160,
//         height: 60,
//         resizeMode: "contain",
//     },
//     option: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 15,
//     },
//     text: {
//         fontSize: 18,
//         padding: 5,
//         fontWeight: 900,
//     },
//     text1: {
//         fontSize: 18,
//         padding: 5,
//         fontWeight: 300,
//     },
//     sectionText: {
//         fontSize: 22,
//         fontWeight: "bold",
//         marginTop: 20,
//     },
//     backButton: {
//         flexDirection: "row",
//         alignItems: "center",
//         paddingVertical: 10,
//     },
//     backText: {
//         fontSize: 18,
//         marginLeft: 5,
//     },
//     boxoptions: {
//         height: "auto",
//         width: "auto",
//         borderRadius: 15,
//         borderWidth: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//     },
//     optionbox: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },
// });




// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import { DrawerContentScrollView } from "@react-navigation/drawer";
// import { useNavigation } from "@react-navigation/native";
// import CategorySection from "./CategorySection";
// import CustomDivider from "./CustomDivider";
// import galarieslogo from "../assets/galerieslogo.png";

// export default function ReusableDrawer(props) {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const navigation = useNavigation();

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     const fetchCategories = async () => {
//         try {
//             const response = await fetch("http://192.168.1.92:3000/categories");

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             setCategories(data);
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//             Alert.alert("Error", "Failed to load categories. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const goBack = () => setSelectedCategory(null);

//     return (
//         <DrawerContentScrollView {...props} style={styles.container}>
//             {/* Close Drawer Button */}
//             <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
//                 <AntDesign name="close" size={24} color="black" />
//             </TouchableOpacity>

//             {/* Logo */}
//             <View style={styles.logoContainer}>
//                 <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//                     <Image source={galarieslogo} style={styles.logo} />
//                 </TouchableOpacity>
//             </View>

//             {/* Loader */}
//             {loading ? (
//                 <ActivityIndicator size="large" color="black" />
//             ) : selectedCategory ? (
//                 <CategorySection
//                     goBack={goBack}
//                     title={selectedCategory.categoryName}
//                     options={categories
//                         .filter(cat => selectedCategory.childIds.includes(cat.categoryId)) // Check child IDs
//                         .map(cat => cat.categoryName)}
//                     resetDrawer={() => setSelectedCategory(null)}
//                 />
//             ) : (
//                 <>
//                     <CustomDivider />
                    
//                     {/* Display Parent Categories */}
//                     {categories
//                         .filter(cat => cat.isParent) // Only show parent categories
//                         .map(category => (
//                             <TouchableOpacity 
//                                 key={category.categoryId} 
//                                 style={styles.option} 
//                                 onPress={() => setSelectedCategory(category)}
//                             >
//                                 <Text style={styles.text}>{category.categoryName}</Text>
//                                 {category.childIds.length > 0 && <Feather name="chevron-right" size={20} />}  
//                             </TouchableOpacity>
//                         ))}
//                 </>
//             )}
//         </DrawerContentScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     closeButton: {
//         position: "absolute",
//         top: 10,
//         right: 10,
//         padding: 10,
//         zIndex: 10,
//     },
//     logoContainer: {
//         alignItems: "center",
//         marginBottom: 20,
//     },
//     logo: {
//         width: 160,
//         height: 60,
//         resizeMode: "contain",
//     },
//     option: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingVertical: 15,
//     },
//     text: {
//         fontSize: 18,
//         fontWeight: "bold",
//     },
// });
///corrected for api call








// import React, { useState, useEffect } from "react";
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   Image, 
//   ActivityIndicator, 
//   Alert 
// } from "react-native";
// import { Feather, AntDesign } from "@expo/vector-icons";
// import { DrawerContentScrollView } from "@react-navigation/drawer";
// import { useNavigation } from "@react-navigation/native";
// import CustomDivider from "./CustomDivider";
// import galarieslogo from "../assets/galerieslogo.png";
// import axios from "axios";

// export default function ReusableDrawer(props) {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [history, setHistory] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Fetch categories from backend.
//   const fetchCategories = async (parentCategory = null) => {
//     setLoading(true);
//     try {
//       let url = "http://192.168.1.92:3000/categories";

//       if (!parentCategory) {
//         // Fetch only parent categories (isParent=true)
//         url += "?isParent=true";
//       } else {
//         // Fetch subcategories using childIds
//         if (parentCategory.childIds && parentCategory.childIds.length > 0) {
//           const idsParam = parentCategory.childIds.join(",");
//           url += `?ids=${idsParam}`;
//         } else {
//           setCategories([]); // No subcategories available
//           setLoading(false);
//           return;
//         }
//       }

//       const response = await axios.get(url);
      
//       // Filter parent categories only in the first API call
//       if (!parentCategory) {
//         setCategories(response.data.filter(category => category.isParent === true));
//       } else {
//         setCategories(response.data);
//       }

//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       Alert.alert("Error", "Failed to load categories. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setHistory([...history, selectedCategory]);
//     setSelectedCategory(category);
//     fetchCategories(category);
//   };

//   const goBack = () => {
//     if (history.length > 0) {
//       const previous = history.pop();
//       setSelectedCategory(previous);
//       fetchCategories(previous);
//     } else {
//       setSelectedCategory(null);
//       fetchCategories();
//     }
//   };

//   return (
//     <DrawerContentScrollView {...props} style={styles.container}>
//       {/* Close Drawer Button */}
//       <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
//         <AntDesign name="close" size={24} color="black" />
//       </TouchableOpacity>

//       {/* Logo */}
//       <View style={styles.logoContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//           <Image source={galarieslogo} style={styles.logo} />
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="black" />
//       ) : (
//         <>
//           <CustomDivider />
          
//           {selectedCategory && (
//             <TouchableOpacity style={styles.backButton} onPress={goBack}>
//               <Feather name="arrow-left" size={20} />
//               <Text style={styles.backText}>Back</Text>
//             </TouchableOpacity>
//           )}

//           {categories.length > 0 ? (
//             categories.map((category) => (
//               <TouchableOpacity 
//                 key={category.categoryId} 
//                 style={styles.option} 
//                 onPress={() => handleCategoryClick(category)}
//               >
//                 <Text style={styles.text}>{category.categoryName}</Text>
//                 {category.childIds && category.childIds.length > 0 && (
//                   <Feather name="chevron-right" size={20} />
//                 )}
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text style={styles.noDataText}>No subcategories available</Text>
//           )}
//         </>
//       )}
//     </DrawerContentScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   closeButton: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     padding: 10,
//     zIndex: 10,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logo: {
//     width: 160,
//     height: 60,
//     resizeMode: "contain",
//   },
//   backButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   backText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   option: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   noDataText: {
//     fontSize: 16,
//     color: "gray",
//     textAlign: "center",
//     marginTop: 20,
//   },
// });
///corrected for all categories without product




import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  ActivityIndicator, 
  Alert 
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import CustomDivider from "./CustomDivider";
import galarieslogo from "../assets/galerieslogo.png";

import useCategoryManager from "../hooks/useCategoryManager";
import GaleriesLoader from "./GaleriesLoader";



export default function ReusableDrawer(props) {
  const navigation = useNavigation();

  const {
    categories,
    products,
    loading,
    selectedCategory,
    history,
    handleCategoryClick,
    goBack,
  } = useCategoryManager(navigation, props.navigation.closeDrawer);
  
  
 
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={galarieslogo} style={styles.logo} />
        </TouchableOpacity>
      </View>

      {loading ? (
<GaleriesLoader/>) : (
        <>
          <CustomDivider />

          {selectedCategory && history.length>0 && (
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
              <Feather name="arrow-left" size={20} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
          )}

            {categories.map((category) => (
              <TouchableOpacity 
                key={category.categoryId} 
                style={styles.option} 
                onPress={() => handleCategoryClick(category)}
              >
                <Text style={styles.text}>{category.categoryName}</Text>
                {category.childIds && category.childIds.length > 0 && (
                  <Feather name="chevron-right" size={20} />
                )}
              </TouchableOpacity>
            ))
          }
        </>
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 160,
    height: 60,
    resizeMode: "contain",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  backText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noDataText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  productItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  priceText: {
    fontSize: 16,
    color: "green",
  },
});
