// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import axios from 'axios';
// import usePayment from '../hooks/usePayment'

// const AddressScreen = ({ route, navigation }) => {
//   const { cartItems } = route.params;
//   const [address, setAddress] = useState('');
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [useSaved, setUseSaved] = useState(true);
//   const {handleOrderAndPayment} = usePayment();

//   useEffect(() => {
//     const fetchSavedAddresses = async () => {
//       try {
//         const response = await axios.get('http://192.168.43.94:3000/products/user/address');
//         console.log("Full API Response:", response.data.address);

//         // Make sure this path matches your actual backend response
//         setSavedAddresses(response.data.address || []);
//       } catch (err) {
//         console.error('Error fetching address:', err);
//         Alert.alert('Error', 'Failed to fetch saved addresses.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSavedAddresses();
//   }, []);

//   useEffect(() => {
//     console.log("Saved Addresses Updated:", savedAddresses);
//   }, [savedAddresses]);

//   const handleAddressSubmit = async () => {
//     let selectedAddress;

//     if (useSaved) {
//       if (selectedSavedIndex === null) {
//         Alert.alert('Error', 'Please select a saved address.');
//         return;
//       }
//       selectedAddress = savedAddresses[selectedSavedIndex];
//     } else {
//       if (!address) {
//         Alert.alert('Error', 'Please enter a new address.');
//         return      }
//       selectedAddress = {
//         line1: address,
//         city: 'Unknown',
//         state: 'Unknown',
//         zip: '000000',
//       };
//     }

//     try {
//       await handleOrderAndPayment(cartItems, selectedAddress, navigation);
//     } catch (err) {
//       Alert.alert('Payment Failed', err.message || 'Something went wrong.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Enter Shipping Address</Text>

//       {/* Saved Addresses */}
//       {loading ? (
//         <ActivityIndicator size="large" color="#000" />
//       ) : savedAddresses.length > 0 ? (
//         savedAddresses.map((addr, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.addressBox,
//               useSaved && selectedSavedIndex === index && styles.selectedBox,
//             ]}
//             onPress={() => {
//               setUseSaved(true);
//               setSelectedSavedIndex(index);
//             }}
//           >
//             <Text style={styles.sectionTitle}>Saved Address {index + 1}</Text>
//             <Text style={styles.addressText}>{addr.line1}</Text>
//             <Text style={styles.addressText}>
//               {addr.city}, {addr.state} - {addr.zip}
//             </Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <Text>No saved address found. Please enter a new address.</Text>
//       )}

//       {/* New Address Input */}
//       <TouchableOpacity
//         style={[styles.addressBox, !useSaved && styles.selectedBox]}
//         onPress={() => {
//           setUseSaved(false);
//           setSelectedSavedIndex(null);
//         }}
//       >
//         <Text style={styles.sectionTitle}>Add New Address</Text>
//         {!useSaved && (
//           <TextInput
//             style={styles.input}
//             placeholder="Address Line 1"
//             value={address}
//             onChangeText={setAddress}
//             multiline
//           />
//         )}
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleAddressSubmit} disabled={loading}>
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Place Order</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   addressBox: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   selectedBox: {
//     borderColor: '#000',
//     borderWidth: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default AddressScreen;



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import axios from 'axios';
// import usePayment from '../hooks/usePayment'

// const AddressScreen = ({ route, navigation }) => {
//   const { cartItems } = route.params;
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [useSaved, setUseSaved] = useState(true);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false); // State to toggle form
//   const { handleOrderAndPayment } = usePayment();

//   useEffect(() => {
//     const fetchSavedAddresses = async () => {
//       try {
//         const response = await axios.get('http://192.168.43.94:3000/products/user/address');
//         console.log("Full API Response:", response.data.address);

//         // Make sure this path matches your actual backend response
//         setSavedAddresses(response.data.address || []);
//       } catch (err) {
//         console.error('Error fetching address:', err);
//         Alert.alert('Error', 'Failed to fetch saved addresses.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSavedAddresses();
//   }, []);

//   useEffect(() => {
//     console.log("Saved Addresses Updated:", savedAddresses);
//   }, [savedAddresses]);

//   const handleAddressSubmit = async () => {
//     let selectedAddress;

//     if (useSaved) {
//       if (selectedSavedIndex === null) {
//         Alert.alert('Error', 'Please select a saved address.');
//         return;
//       }
//       selectedAddress = savedAddresses[selectedSavedIndex];
//     } else {
//       if (!address || !city || !state || !zip) {
//         Alert.alert('Error', 'Please fill out all address fields.');
//         return;
//       }
//       selectedAddress = {
//         line1: address,
//         city,
//         state,
//         zip,
//       };
//     }

//     try {
//       await handleOrderAndPayment(cartItems, selectedAddress, navigation);
//     } catch (err) {
//       Alert.alert('Payment Failed', err.message || 'Something went wrong.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Enter Shipping Address</Text>

//       {/* Saved Addresses */}
//       {loading ? (
//         <ActivityIndicator size="large" color="#000" />
//       ) : savedAddresses.length > 0 ? (
//         savedAddresses.map((addr, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.addressBox,
//               useSaved && selectedSavedIndex === index && styles.selectedBox,
//             ]}
//             onPress={() => {
//               setUseSaved(true);
//               setSelectedSavedIndex(index);
//             }}
//           >
//             <Text style={styles.sectionTitle}>Saved Address {index + 1}</Text>
//             <Text style={styles.addressText}>{addr.line1}</Text>
//             <Text style={styles.addressText}>
//               {addr.city}, {addr.state} - {addr.zip}
//             </Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <Text>No saved address found. Please enter a new address.</Text>
//       )}

//       {/* New Address Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => setShowNewAddressForm(true)}
//       >
//         <Text style={styles.buttonText}>Add New Address</Text>
//       </TouchableOpacity>

//       {/* New Address Form */}
//       {showNewAddressForm && (
//         <View style={styles.formContainer}>
//           <Text style={styles.sectionTitle}>New Address</Text>
          
//           <TextInput
//             style={styles.input}
//             placeholder="Address Line 1"
//             value={address}
//             onChangeText={setAddress}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="City"
//             value={city}
//             onChangeText={setCity}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="State"
//             value={state}
//             onChangeText={setState}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="Zip Code"
//             value={zip}
//             onChangeText={setZip}
//             keyboardType="numeric"
//           />

//           <View style={styles.formButtons}>
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={() => {
//                 setUseSaved(false); 
//                 setShowNewAddressForm(false);
//               }}
//             >
//               <Text style={styles.buttonText}>Save</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setShowNewAddressForm(false)}
//             >
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleAddressSubmit} disabled={loading}>
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Place Order</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   addressBox: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   selectedBox: {
//     borderColor: '#000',
//     borderWidth: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   formContainer: {
//     marginTop: 20,
//   },
//   formButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   saveButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default AddressScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import axios from 'axios';
// import usePayment from '../hooks/usePayment';
// import GaleriesLoader from '../components/GaleriesLoader';

// const AddressScreen = ({ route, navigation }) => {
//   const { cartItems } = route.params;
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [useSaved, setUseSaved] = useState(true);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false); // State to toggle form
//   const { handleOrderAndPayment } = usePayment();
  
//   const fetchSavedAddresses = async () => {
//     try {
//       const response = await axios.get('http://192.168.43.94:3000/products/user/address');
//       console.log("Full API Response:", response.data.address);
  
//       // Make sure this path matches your actual backend response
//       setSavedAddresses(response.data.address || []);
//     } catch (err) {
//       console.error('Error fetching address:', err);
//       Alert.alert('Error', 'Failed to fetch saved addresses.');
//     }
//   };
  

//   useEffect(() => {
    
//     fetchSavedAddresses();
//   }, []);

//   const handleAddressSubmit = async () => {
//     let selectedAddress;

//     if (useSaved) {
//       if (selectedSavedIndex === null) {
//         Alert.alert('Error', 'Please select a saved address.');
//         return;
//       }
//       selectedAddress = savedAddresses[selectedSavedIndex];
//     } else {
//       if (!address || !city || !state || !zip) {
//         Alert.alert('Error', 'Please fill out all address fields.');
//         return;
//       }
//       selectedAddress = {
//         line1: address,
//         city,
//         state,
//         zip,
//       };
//     }

//     try {
//       setLoading(true); // Show loading before the operation starts
//       await handleOrderAndPayment(cartItems, selectedAddress, navigation);
//     } catch (err) {
//       Alert.alert('Payment Failed', err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false); // Hide loading after the operation finishes
//     }
//   };

//   // Function to handle saving new address
//   const handleSaveNewAddress = async () => {
//     if (!address || !city || !state || !zip) {
//       Alert.alert('Error', 'Please fill out all address fields.');
//       return;
//     }

//     const newAddress = {
//       line1: address,
//       city,
//       state,
//       zip,
//     };

//     try {
//       const response = await axios.post('http://192.168.43.94:3000/products/user/address', newAddress);
//       console.log("New Address Saved:", response.data);

//       // After saving the new address, fetch the updated list of saved addresses
//       fetchSavedAddresses();

//       // Close the form and reset fields
//       setShowNewAddressForm(false);
//       setAddress('');
//       setCity('');
//       setState('');
//       setZip('');
//     } catch (err) {
//       console.error('Error saving new address:', err);
//       Alert.alert('Error', 'Failed to save new address.');
//     }
//   };

//   return (
    
//     <ScrollView contentContainerStyle={styles.container}>
//        {loading ?(<GaleriesLoader />):(
//     <>

//       <Text style={styles.title}>Enter Shipping Address</Text>

//       {/* Saved Addresses */}
//       {loading ? (
// <GaleriesLoader/>
//       ) : savedAddresses.length > 0 ? (
//         savedAddresses.map((addr, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.addressBox,
//               useSaved && selectedSavedIndex === index && styles.selectedBox,
//             ]}
//             onPress={() => {
//               setUseSaved(true);
//               setSelectedSavedIndex(index);
//             }}
//           >
//             <Text style={styles.sectionTitle}>Address {index + 1}</Text>
//             <Text style={styles.addressText}>{addr.line1}</Text>
//             <Text style={styles.addressText}>
//               {addr.city}, {addr.state} - {addr.zip}
//             </Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <Text>No saved address found. Please enter a new address.</Text>
//       )}

//       {/* New Address Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => setShowNewAddressForm(true)}
//       >
//         <Text style={styles.buttonText}>Add New Address</Text>
//       </TouchableOpacity>

//       {/* New Address Form */}
//       {showNewAddressForm && (
//         <View style={styles.formContainer}>
//           <Text style={styles.sectionTitle}>New Address</Text>
          
//           <TextInput
//             style={styles.input}
//             placeholder="Address Line 1"
//             value={address}
//             onChangeText={setAddress}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="City"
//             value={city}
//             onChangeText={setCity}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="State"
//             value={state}
//             onChangeText={setState}
//           />
          
//           <TextInput
//             style={styles.input}
//             placeholder="Zip Code"
//             value={zip}
//             onChangeText={setZip}
//             keyboardType="numeric"
//           />

//           <View style={styles.formButtons}>
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={handleSaveNewAddress}
//             >
//               <Text style={styles.buttonText}>Save</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setShowNewAddressForm(false)}
//             >
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleAddressSubmit} disabled={loading}>
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Place Order</Text>
//         )}
//       </TouchableOpacity>
//       </>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   addressBox: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   selectedBox: {
//     borderColor: '#000',
//     borderWidth: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   formContainer: {
//     marginTop: 20,
//   },
//   formButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   saveButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default AddressScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
// } from 'react-native';
// import axios from 'axios';
// import usePayment from '../hooks/usePayment';
// import GaleriesLoader from '../components/GaleriesLoader';
// import StepIndicator from '../components/StepIndicator'; // Import the updated custom StepIndicator

// const AddressScreen = ({ route, navigation }) => {
//   const { cartItems } = route.params;
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [useSaved, setUseSaved] = useState(true);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false); // State to toggle form
//   const [currentStep, setCurrentStep] = useState(1); // Step indicator state
//   const [canProceed, setCanProceed] = useState(false); // Flag to enable the "Proceed to Buy" button
//   const [canGoToPayment, setCanGoToPayment] = useState(false); // Flag to enable going to the payment step
//   const { handleOrderAndPayment } = usePayment();

//   const fetchSavedAddresses = async () => {
//     try {
//       const response = await axios.get('http://192.168.43.94:3000/products/user/address');
//       setSavedAddresses(response.data.address || []);
//     } catch (err) {
//       console.error('Error fetching address:', err);
//       Alert.alert('Error', 'Failed to fetch saved addresses.');
//     }
//   };

//   useEffect(() => {
//     fetchSavedAddresses();
//   }, []);

//   // Handle the address selection
//   const handleAddressSelection = (index) => {
//     setUseSaved(true);
//     setSelectedSavedIndex(index);
//     setCanProceed(true); // Enable "Proceed to Buy" button
//   };

//   // Handle the address submission (new address)
//   const handleNewAddressSubmit = () => {
//     if (!address || !city || !state || !zip) {
//       Alert.alert('Error', 'Please fill out all address fields.');
//       return;
//     }

//     const newAddress = {
//       line1: address,
//       city,
//       state,
//       zip,
//     };

//     setLoading(true);
//     axios
//       .post('http://192.168.43.94:3000/products/user/address', newAddress)
//       .then((response) => {
//         fetchSavedAddresses();
//         setShowNewAddressForm(false); // Close the new address form
//         setAddress('');
//         setCity('');
//         setState('');
//         setZip('');
//         setCanProceed(true); // Enable "Proceed to Buy" button after new address is added
//       })
//       .catch((err) => {
//         console.error('Error saving new address:', err);
//         Alert.alert('Error', 'Failed to save new address.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   // Handle the "Proceed to Buy" button click
//   const handleProceedToBuy = async () => {
//     let selectedAddress;

//     if (useSaved) {
//       if (selectedSavedIndex === null) {
//         Alert.alert('Error', 'Please select a saved address.');
//         return;
//       }
//       selectedAddress = savedAddresses[selectedSavedIndex];
//     } else {
//       if (!address || !city || !state || !zip) {
//         Alert.alert('Error', 'Please fill out all address fields.');
//         return;
//       }
//       selectedAddress = {
//         line1: address,
//         city,
//         state,
//         zip,
//       };
//     }

//     try {
//       setLoading(true); // Show loading before the operation starts
//       await handleOrderAndPayment(cartItems, selectedAddress, navigation);
//       setCurrentStep(2); // Move to step 2 after completing step 1
//       setCanGoToPayment(true); // Enable clicking the second step (Payment)
//     } catch (err) {
//       Alert.alert('Payment Failed', err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false); // Hide loading after the operation finishes
//     }
//   };

//   const renderStepContent = () => {
//     if (currentStep === 1) {
//       return (
//         <View>
//           <Text style={styles.title}>Enter Shipping Address</Text>

//           {/* Saved Addresses */}
//           {loading ? (
//             <GaleriesLoader />
//           ) : savedAddresses.length > 0 ? (
//             savedAddresses.map((addr, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.addressBox,
//                   useSaved && selectedSavedIndex === index && styles.selectedBox,
//                 ]}
//                 onPress={() => handleAddressSelection(index)} // Enable the "Proceed to Buy" button when an address is selected
//               >
//                 <Text style={styles.sectionTitle}>Address {index + 1}</Text>
//                 <Text style={styles.addressText}>{addr.line1}</Text>
//                 <Text style={styles.addressText}>
//                   {addr.city}, {addr.state} - {addr.zip}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text>No saved address found. Please enter a new address.</Text>
//           )}

//           {/* New Address Button */}
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => setShowNewAddressForm(true)}
//           >
//             <Text style={styles.buttonText}>Add New Address</Text>
//           </TouchableOpacity>

//           {/* New Address Form */}
//           {showNewAddressForm && (
//             <View style={styles.formContainer}>
//               <Text style={styles.sectionTitle}>New Address</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Address Line 1"
//                 value={address}
//                 onChangeText={setAddress}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="City"
//                 value={city}
//                 onChangeText={setCity}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="State"
//                 value={state}
//                 onChangeText={setState}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Zip Code"
//                 value={zip}
//                 onChangeText={setZip}
//                 keyboardType="numeric"
//               />

//               <View style={styles.formButtons}>
//                 <TouchableOpacity
//                   style={styles.saveButton}
//                   onPress={handleNewAddressSubmit}
//                 >
//                   <Text style={styles.buttonText}>Save</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.closeButton}
//                   onPress={() => setShowNewAddressForm(false)}
//                 >
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}

//           {/* Proceed to Buy Button */}
//           {canProceed && (
//             <TouchableOpacity style={styles.proceedButton} onPress={handleProceedToBuy}>
//               {loading ? (
// <GaleriesLoader/>              ) : (
//                 <Text style={styles.buttonText}>Proceed to Buy</Text>
//               )}
//             </TouchableOpacity>
//           )}
//         </View>
//       );
//     }

//     if (currentStep === 2) {
//       return (
//         <View>
//           <Text style={styles.title}>Payment</Text>
//           {/* Implement your payment process here */}
//         </View>
//       );
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Custom Step Indicator */}
//       <StepIndicator
//         currentStep={currentStep}
//         stepCount={2}
//         labels={['Shipping Address', 'Payment']}
//         onStepClick={canGoToPayment ? setCurrentStep : () => {}}
//         disabledSteps={[1]} // Disable the second step initially
//       />

//       {renderStepContent()}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   // The rest of the styles remain unchanged...
//   proceedButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
  
//   addressBox: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   selectedBox: {
//     borderColor: '#000',
//     borderWidth: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   formContainer: {
//     marginTop: 20,
//   },
//   formButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   saveButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   closeButton: {
//     backgroundColor: '#dc3545',
//     paddingVertical: 10,
//     borderRadius: 10,
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default AddressScreen;





// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import axios from 'axios';
// import usePayment from '../hooks/usePayment';
// import GaleriesLoader from '../components/GaleriesLoader';
// import StepIndicator from '../components/StepIndicator'; // Your custom StepIndicator

// const AddressScreen = ({ route, navigation }) => {
//   const { cartItems = [] } = route.params || {};
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [savedAddresses, setSavedAddresses] = useState([]);
//   const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [useSaved, setUseSaved] = useState(true);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [canProceed, setCanProceed] = useState(false);
//   const [canGoToPayment, setCanGoToPayment] = useState(false);
//   const { handleOrderAndPayment } = usePayment();
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [paymentLoading, setPaymentLoading] = useState(false);

//   useEffect(() => {
//     fetchSavedAddresses();
//   }, []);

//   const fetchSavedAddresses = async () => {
//     try {
//       const response = await axios.get('http://192.168.43.94:3000/products/user/address');
//       setSavedAddresses(response.data.address || []);
//     } catch (err) {
//       console.error('Error fetching address:', err);
//       Alert.alert('Error', 'Failed to fetch saved addresses.');
//     }
//   };

//   const handleAddressSelection = (index) => {
//     setUseSaved(true);
//     setSelectedSavedIndex(index);
//     setCanProceed(true);
//   };

//   const handleNewAddressSubmit = () => {
//     if (!address || !city || !state || !zip) {
//       Alert.alert('Error', 'Please fill out all address fields.');
//       return;
//     }

//     const newAddress = { line1: address, city, state, zip };

//     setLoading(true);
//     axios
//       .post('http://192.168.43.94:3000/products/user/address', newAddress)
//       .then(() => {
//         fetchSavedAddresses();
//         setShowNewAddressForm(false);
//         setAddress('');
//         setCity('');
//         setState('');
//         setZip('');
//         setCanProceed(true);
//       })
//       .catch((err) => {
//         console.error('Error saving new address:', err);
//         Alert.alert('Error', 'Failed to save new address.');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleProceedToSummary = () => {
//     let selected;

//     if (useSaved) {
//       if (selectedSavedIndex === null) {
//         Alert.alert('Error', 'Please select a saved address.');
//         return;
//       }
//       selected = savedAddresses[selectedSavedIndex];
//     } else {
//       if (!address || !city || !state || !zip) {
//         Alert.alert('Error', 'Please fill out all address fields.');
//         return;
//       }
//       selected = { line1: address, city, state, zip };
//     }

//     setSelectedAddress(selected);
//     setCurrentStep(2); // Move to Order Summary
//   };

//   const handlePlaceOrder = async () => {
//     setPaymentLoading(true);
//     try {
//       // Call handleOrderAndPayment only after Order Summary
//       await handleOrderAndPayment(cartItems, selectedAddress, navigation);
//       setCurrentStep(3); // Move to Payment
//     } catch (err) {
//       Alert.alert('Error', 'Payment failed.');
//     } finally {
//       setPaymentLoading(false);
//     }
//   };

//   const renderStepContent = () => {
//     if (currentStep === 1) {
//       return (
//         <View>
//           <Text style={styles.title}>Enter Shipping Address</Text>

//           {loading ? (
//             <GaleriesLoader />
//           ) : savedAddresses.length > 0 ? (
//             savedAddresses.map((addr, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.addressBox,
//                   useSaved && selectedSavedIndex === index && styles.selectedBox,
//                 ]}
//                 onPress={() => handleAddressSelection(index)}
//               >
//                 <Text style={styles.sectionTitle}>Address {index + 1}</Text>
//                 <Text style={styles.addressText}>{addr.line1}</Text>
//                 <Text style={styles.addressText}>
//                   {addr.city}, {addr.state} - {addr.zip}
//                 </Text>
//               </TouchableOpacity>
//             ))
//           ) : (
//             <Text>No saved address found. Please enter a new address.</Text>
//           )}

//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => setShowNewAddressForm(true)}
//           >
//             <Text style={styles.buttonText}>Add New Address</Text>
//           </TouchableOpacity>

//           {showNewAddressForm && (
//             <View style={styles.formContainer}>
//               <Text style={styles.sectionTitle}>New Address</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Address Line 1"
//                 value={address}
//                 onChangeText={setAddress}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="City"
//                 value={city}
//                 onChangeText={setCity}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="State"
//                 value={state}
//                 onChangeText={setState}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Zip Code"
//                 value={zip}
//                 onChangeText={setZip}
//                 keyboardType="numeric"
//               />

//               <View style={styles.formButtons}>
//                 <TouchableOpacity
//                   style={styles.saveButton}
//                   onPress={handleNewAddressSubmit}
//                 >
//                   <Text style={styles.buttonText}>Save</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.closeButton}
//                   onPress={() => setShowNewAddressForm(false)}
//                 >
//                   <Text style={styles.buttonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}

//           {canProceed && (
//             <TouchableOpacity style={styles.proceedButton} onPress={handleProceedToSummary}>
//               <Text style={styles.buttonText}>Proceed to Order Summary</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       );
//     }

//     if (currentStep === 2) {
//       return (
//         <View>
//           <Text style={styles.title}>Order Summary</Text>
//           <View style={styles.summaryBox}>
//             <Text style={styles.sectionTitle}>Delivery Address</Text>
//             <Text style={styles.addressText}>{selectedAddress?.line1}</Text>
//             <Text style={styles.addressText}>
//               {selectedAddress?.city}, {selectedAddress?.state} - {selectedAddress?.zip}
//             </Text>
//           </View>

//           <View style={styles.summaryBox}>
//             <Text style={styles.sectionTitle}>Items</Text>
//             {cartItems.map((item, index) => (
//               <View key={index} style={styles.itemRow}>
//                 <Text style={styles.itemName}>{item.product.productName} x {item.quantity}</Text>
//                 <Text style={styles.itemPrice}>₹{item.product.price * item.quantity}</Text>
//               </View>
//             ))}
//           </View>

//           <TouchableOpacity style={styles.proceedButton} onPress={handlePlaceOrder}>
//             <Text style={styles.buttonText}>Proceed to Payment</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }

//     if (currentStep === 3) {
//       return (
//         <View>
//           <Text style={styles.title}>Processing Payment</Text>
//           {paymentLoading ? (
//             <GaleriesLoader />
//           ) : (
//             <Text>Payment Successful</Text>
//           )}
//         </View>
//       );
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <StepIndicator
//         currentStep={currentStep}
//         stepCount={3}
//         labels={['Shipping Address', 'Order Summary', 'Payment']}
//         onStepClick={canGoToPayment ? setCurrentStep : () => {}}
//         disabledSteps={canGoToPayment ? [] : [1, 2]}
//       />
//       {renderStepContent()}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   addressBox: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//   },
//   selectedBox: {
//     borderColor: '#000',
//     borderWidth: 2,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginTop: 10,
//     paddingHorizontal: 10,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   proceedButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   formContainer: {
//     marginTop: 20,
//   },
//   saveButton: {
//     backgroundColor: '#2196F3',
//     padding: 10,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   closeButton: {
//     backgroundColor: '#f44336',
//     padding: 10,
//     borderRadius: 5,
//   },
//   formButtons: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   summaryBox: {
//     marginTop: 15,
//     padding: 10,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//   },
//   itemName: {
//     fontSize: 16,
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default AddressScreen;


import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Image, 
  ScrollView 
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import axios from 'axios';
import usePayment from '../hooks/usePayment';
import GaleriesLoader from '../components/GaleriesLoader';
import StepIndicator from '../components/StepIndicator';
import Icon from 'react-native-vector-icons/Feather';  // Add this for the back icon
import network from '../utils/network';

const AddressScreen = ({ route, navigation }) => {
  const { cartItems = [] } = route.params || {};
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedSavedIndex, setSelectedSavedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [useSaved, setUseSaved] = useState(true);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [canProceed, setCanProceed] = useState(false);
  const [canGoToPayment, setCanGoToPayment] = useState(false);
  const { handleOrderAndPayment } = usePayment();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const deliveryCharge = 50; // Example delivery charge
  const orderTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0) + deliveryCharge;
  const arrivingDate = new Date();
  arrivingDate.setDate(arrivingDate.getDate() + 3); // Add 3 days for arrival

  useFocusEffect(
    useCallback(() => {
      setCurrentStep(1);
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setSelectedSavedIndex(null);
      setUseSaved(true);
      setShowNewAddressForm(false);
      setCanProceed(false);
      setCanGoToPayment(false);
      setSelectedAddress(null);
      setPaymentLoading(false);
      fetchSavedAddresses();
  
      return () => {};
    }, [])
  );

  useEffect(() => {
    fetchSavedAddresses();
  }, []);

  const fetchSavedAddresses = async () => {
    try {
      const response = await axios.get(`${network.BASE_URL}/products/user/address`);
      setSavedAddresses(response.data.address || []);
    } catch (err) {
      console.error('Error fetching address:', err);
      Alert.alert('Error', 'Failed to fetch saved addresses.');
    }
  };

  const handleAddressSelection = (index) => {
    setUseSaved(true);
    setSelectedSavedIndex(index);
    setCanProceed(true);
  };

  const handleNewAddressSubmit = () => {
    if (!address || !city || !state || !zip) {
      Alert.alert('Error', 'Please fill out all address fields.');
      return;
    }

    const newAddress = { line1: address, city, state, zip };

    setLoading(true);
    axios
      .post(`${network.BASE_URL}/products/user/address`, newAddress)
      .then(() => {
        fetchSavedAddresses();
        setShowNewAddressForm(false);
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setCanProceed(true);
      })
      .catch((err) => {
        console.error('Error saving new address:', err);
        Alert.alert('Error', 'Failed to save new address.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleProceedToSummary = () => {
    let selected;

    if (useSaved) {
      if (selectedSavedIndex === null) {
        Alert.alert('Error', 'Please select a saved address.');
        return;
      }
      selected = savedAddresses[selectedSavedIndex];
    } else {
      if (!address || !city || !state || !zip) {
        Alert.alert('Error', 'Please fill out all address fields.');
        return;
      }
      selected = { line1: address, city, state, zip };
    }

    setSelectedAddress(selected);
    setCurrentStep(2); // Move to Order Summary
  };

  const handlePlaceOrder = async () => {
    setPaymentLoading(true);
    try {
      await handleOrderAndPayment(cartItems, selectedAddress, navigation);
      setCurrentStep(3); // Move to Payment
    } catch (err) {
      Alert.alert('Error', 'Payment failed.');
    } finally {
      setPaymentLoading(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <View style={styles.stepContainer}>
          <Text style={styles.title}>Enter Shipping Address</Text>
          {loading ? (
            <GaleriesLoader />
          ) : savedAddresses.length > 0 ? (
            savedAddresses.map((addr, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.addressBox,
                  useSaved && selectedSavedIndex === index && styles.selectedBox,
                ]}
                onPress={() => handleAddressSelection(index)}
              >
                <Text style={styles.sectionTitle}>Address {index + 1}</Text>
                <Text style={styles.addressText}>{addr.line1}</Text>
                <Text style={styles.addressText}>
                  {addr.city}, {addr.state} - {addr.zip}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noAddressesText}>No saved address found. Please enter a new address.</Text>
          )}
          <TouchableOpacity
            style={styles.addNewAddressButton}
            onPress={() => setShowNewAddressForm(true)}
          >
            <Text style={styles.addNewAddressButtonText}>Add New Address</Text>
          </TouchableOpacity>

          {showNewAddressForm && (
            <View style={styles.formContainer}>
              <Text style={styles.sectionTitle}>New Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Line 1"
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                style={styles.input}
                placeholder="State"
                value={state}
                onChangeText={setState}
              />
              <TextInput
                style={styles.input}
                placeholder="Zip Code"
                value={zip}
                onChangeText={setZip}
                keyboardType="numeric"
              />

              <View style={styles.formButtons}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleNewAddressSubmit}
                >
                  <Text style={styles.saveButtonText}>Save Address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setShowNewAddressForm(false)}
                >
                  <Text style={styles.closeButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {canProceed && (
            <TouchableOpacity
              style={styles.proceedButton}
              onPress={handleProceedToSummary}
            >
              <Text style={styles.proceedButtonText}>Proceed to Order Summary</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }

    if (currentStep === 2) {
      return (
        <View style={styles.stepContainer}>
          <Text style={styles.title}>Order Summary</Text>
          <View style={styles.deliveryDetailsBox}>
            <Text style={styles.sectionTitle}>Delivery Details</Text>
            <View style={styles.deliveryRow}>
              <Text style={styles.detailText}>Delivery Charge:</Text>
              <Text style={[styles.detailText, styles.amount]}>₹{deliveryCharge}</Text>
            </View>

            <View style={styles.deliveryRow}>
              <Text style={styles.detailText}>Total Amount:</Text>
              <Text style={[styles.detailText, styles.amount]}>₹{orderTotal}</Text>
            </View>

            <View style={styles.deliveryRow}>
              <Text style={[styles.detailText, { fontWeight: '700' }]}>Free Delivery:</Text>
              <Text style={[styles.detailText, styles.amount]}>₹{-deliveryCharge}</Text>
            </View>

            <View style={styles.deliveryRow}>
              <Text style={[styles.detailText, { fontSize: 18, fontWeight: '700' }]}>Order Total:</Text>
              <Text style={[styles.detailText, styles.amount]}>₹{orderTotal}</Text>
            </View>

            <View style={styles.deliveryRow}>
              <Text style={styles.detailText}>Arriving Date:</Text>
              <Text style={[styles.detailText, styles.amount]}>
                {arrivingDate.toDateString()}
              </Text>
            </View>
          </View>

          <View style={styles.summaryBox}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <Text style={styles.addressText}>{selectedAddress?.line1}</Text>
            <Text style={styles.addressText}>
              {selectedAddress?.city}, {selectedAddress?.state} - {selectedAddress?.zip}
            </Text>
          </View>

          <View style={styles.productList}>
            <Text style={styles.sectionTitle}>Items</Text>
            {cartItems.map((item, index) => (
              <View key={index} style={styles.itemRow}>
                <Image
                  source={{ uri: item.product.imageUrl }}
                  style={styles.productImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.product.productName} x {item.quantity}</Text>
                  <Text style={styles.itemPrice}>₹{item.product.price * item.quantity}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={handlePlaceOrder}
            disabled={paymentLoading}
          >
            <Text style={styles.placeOrderButtonText}>
              {paymentLoading ? 'Processing...' : 'Place Order'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
      {currentStep !== 1 && (
        <TouchableOpacity onPress={() => setCurrentStep(1)} style={styles.backButton}>
          <Icon name="chevron-left" size={24} color="#000" />
          <Text style={{ marginLeft: 10 }}>Go Back</Text>
        </TouchableOpacity>
      )}
      </View>

      <StepIndicator currentStep={currentStep} />
      {renderStepContent()}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems:'center'
  },
  backButton:{
    top:15,
    right:5,
    flexDirection:'row',
    alignItems:'center'
  },
 
  container: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight:20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  stepContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addressBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  selectedBox: {
    backgroundColor: '#f1c40f',
  },
  addressText: {
    fontSize: 16,
    color: '#555',
  },
  noAddressesText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  addNewAddressButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  addNewAddressButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  proceedButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  summaryBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 15,
  },
  productList: {
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },

  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },

  itemDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  itemName: {
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap', // Allow the name to wrap
    marginBottom: 5, // Add some space between the name and price
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

    deliveryDetailsBox: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      marginVertical: 10,
    },
    
    deliveryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
  
    detailText: {
      fontSize: 16,
      color: '#555',
      fontWeight:400
    },
  
    amount: {
      fontWeight: 'bold', // You can adjust this as needed to make the amount stand out
    },
  
    
  placeOrderButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  placeOrderButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default AddressScreen;
