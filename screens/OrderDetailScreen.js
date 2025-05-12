// import React, { useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import TopLineText from '../components/TopLineText';
// import Header from '../components/Header';
// import OrderItemCard from '../components/OrderItemCard';
// import useCategoryManager from '../hooks/useCategoryManager';

// const OrderDetailScreen = () => {
//   const route = useRoute();
//   const { orderId } = route.params;

//   const { orderItems, loadOrderItems, loading } = useCategoryManager();

//   useEffect(() => {
//     if (orderId) loadOrderItems(orderId);
//   }, [orderId]);

//   return (
//     <>

//       <View style={styles.container}>
//         <Text style={styles.title}>Order ID: {orderId}</Text>

//         {loading ? (
//           <ActivityIndicator size="large" color="#3b82f6" />
//         ) : (
//           <>
//             {/* Order Meta */}
//             <View style={styles.metaContainer}>
//               <Text style={[styles.metaText]}><Text style={styles.metaLabel}>Status:</Text> {orderItems?.status}</Text>
//               <Text style={styles.metaText}>Total Amount: ₹{orderItems?.totalAmount}</Text>
//               <Text style={styles.metaText}>Ordered Date: {orderItems?.orderedDate}</Text>
//             </View>

//             {/* Order Items */}
//             <FlatList
//               data={orderItems.items}
//               renderItem={({ item }) => <OrderItemCard item={item} />}
//               keyExtractor={(item, index) => index.toString()}
//               contentContainerStyle={styles.list}
//             />
//           </>
//         )}
//       </View>
//     </>
//   );
// };

// export default OrderDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   metaContainer: {
//     marginBottom: 20,
//   },
//   metaText: {
//     fontSize: 16,
//     marginBottom: 4,
//     color: '#333',
//     fontWeight:'bold'
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   metaLabel: {
//     fontWeight: 'bold',
//     color: '#000',
//   },

// });



// import React, { useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import OrderItemCard from '../components/OrderItemCard';
// import useCategoryManager from '../hooks/useCategoryManager';

// const OrderDetailScreen = () => {
//   const route = useRoute();
//   const { orderId } = route.params;

//   const { orderItems, loadOrderItems, loading } = useCategoryManager();

//   useEffect(() => {
//     if (orderId) loadOrderItems(orderId);
//   }, [orderId]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Delivered':
//       case 'COMPLETED':
//         return { color: '#22c55e' };
//       case 'Shipped':
//         return { color: '#facc15' };
//       case 'Processing':
//         return { color: '#3b82f6' };
//       case 'PENDING':
//         return { color: '#f87171' };
//       default:
//         return { color: '#6b7280' };
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Order Details</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#3b82f6" />
//       ) : (
//         <>
//           {/* Order Meta Info */}
//           <View style={styles.metaCard}>
//             <Text style={[styles.statusText, getStatusColor(orderItems?.status)]}>
//               {orderItems?.status || 'Pending'}
//             </Text>
//             <Text style={styles.meta}>Order ID: {orderId}</Text>
//             <Text style={styles.meta}>Ordered On: {orderItems?.orderedDate}</Text>
//             <Text style={styles.meta}>Total: ₹{orderItems?.totalAmount}</Text>
//             <Text style={styles.meta}>Payment: {orderItems?.paymentMode || 'COD'}</Text>
//             <Text style={styles.meta}>Delivery: {orderItems?.estimatedDelivery || '3-5 business days'}</Text>
//           </View>

//           {/* Address if available */}
//           {orderItems?.deliveryAddress && (
//             <View style={styles.addressCard}>
//               <Text style={styles.sectionTitle}>Delivery Address</Text>
//               <Text style={styles.meta}>{orderItems.deliveryAddress.name}</Text>
//               <Text style={styles.meta}>{orderItems.deliveryAddress.street}</Text>
//               <Text style={styles.meta}>{orderItems.deliveryAddress.city}, {orderItems.deliveryAddress.state}</Text>
//               <Text style={styles.meta}>{orderItems.deliveryAddress.pincode}</Text>
//               <Text style={styles.meta}>{orderItems.deliveryAddress.phone}</Text>
//             </View>
//           )}

//           {/* Items */}
//           <FlatList
//             data={orderItems.items}
//             renderItem={({ item }) => <OrderItemCard item={item} />}
//             keyExtractor={(item, index) => index.toString()}
//             contentContainerStyle={styles.list}
//           />

//           {/* Action Buttons */}
//           <View style={styles.actionContainer}>
//             <TouchableOpacity style={styles.actionButton}>
//               <Text style={styles.actionText}>Track Package</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f87171' }]}>
//               <Text style={styles.actionText}>Return Item</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default OrderDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9fafb',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#111827',
//   },
//   metaCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 10,
//     marginBottom: 16,
//     elevation: 1,
//   },
//   statusText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 6,
//   },
//   meta: {
//     fontSize: 14,
//     marginBottom: 4,
//     color: '#374151',
//   },
//   addressCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 10,
//     marginBottom: 16,
//     elevation: 1,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 6,
//     color: '#1f2937',
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   actionButton: {
//     flex: 1,
//     backgroundColor: '#3b82f6',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   actionText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });



// import React, { useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity
// } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import StepIndicator from 'react-native-step-indicator';
// import OrderItemCard from '../components/OrderItemCard';
// import useCategoryManager from '../hooks/useCategoryManager';

// const OrderDetailScreen = () => {
//   const route = useRoute();
//   const { orderId } = route.params;

//   const { orderItems, loadOrderItems, loading } = useCategoryManager();

//   useEffect(() => {
//     if (orderId) loadOrderItems(orderId);
//   }, [orderId]);

//   const labels = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

//   const getCurrentStep = (status) => {
//     switch (status?.toLowerCase()) {
//       case 'processing':
//       case 'pending':
//         return 0;
//       case 'shipped':
//         return 1;
//       case 'out for delivery':
//         return 2;
//       case 'delivered':
//       case 'completed':
//         return 3;
//       default:
//         return 0;
//     }
//   };

//   const stepIndicatorStyles = {
//     stepIndicatorSize: 30,
//     currentStepIndicatorSize: 35,
//     separatorStrokeWidth: 2,
//     currentStepStrokeWidth: 3,
//     stepStrokeCurrentColor: '#3b82f6',
//     stepStrokeWidth: 2,
//     stepStrokeFinishedColor: '#22c55e',
//     stepStrokeUnFinishedColor: '#d1d5db',
//     separatorFinishedColor: '#22c55e',
//     separatorUnFinishedColor: '#d1d5db',
//     stepIndicatorFinishedColor: '#22c55e',
//     stepIndicatorUnFinishedColor: '#fff',
//     stepIndicatorCurrentColor: '#3b82f6',
//     stepIndicatorLabelFontSize: 12,
//     currentStepIndicatorLabelFontSize: 13,
//     stepIndicatorLabelCurrentColor: '#fff',
//     stepIndicatorLabelFinishedColor: '#fff',
//     stepIndicatorLabelUnFinishedColor: '#9ca3af',
//     labelColor: '#9ca3af',
//     labelSize: 12,
//     currentStepLabelColor: '#3b82f6',
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//       </View>
//     );
//   }

//   const renderHeader = () => (
//     <>
//       <Text style={styles.title}>Order Details</Text>

//       <StepIndicator
//         customStyles={stepIndicatorStyles}
//         currentPosition={getCurrentStep(orderItems?.status)}
//         labels={labels}
//         stepCount={labels.length}
//       />

//       <View style={styles.metaCard}>
//         <Text style={styles.meta}>Order ID: {orderId}</Text>
//         <Text style={styles.meta}>Payment ID: {orderItems?.paymentId || 'N/A'}</Text>
//         <Text style={styles.meta}>Status: {orderItems?.status}</Text>
//         <Text style={styles.meta}>Ordered On: {orderItems?.orderedDate}</Text>
//         <Text style={styles.meta}>Total: ₹{orderItems?.totalAmount}</Text>
//         <Text style={styles.meta}>Payment Mode: {orderItems?.paymentMode || 'COD'}</Text>
//         <Text style={styles.meta}>Delivery ETA: {orderItems?.estimatedDelivery || '3-5 business days'}</Text>
//       </View>

//       {orderItems?.shipment && (
//         <View style={styles.shipmentCard}>
//           <Text style={styles.sectionTitle}>Shipment Details</Text>
//           <Text style={styles.meta}>Courier: {orderItems.shipment.courier || 'Ecom Express'}</Text>
//           <Text style={styles.meta}>Tracking No: {orderItems.shipment.trackingNumber || 'TRK123456789'}</Text>
//         </View>
//       )}

//       {orderItems?.deliveryAddress && (
//         <View style={styles.addressCard}>
//           <Text style={styles.sectionTitle}>Delivery Address</Text>
//           <Text style={styles.meta}>{orderItems.deliveryAddress.name}</Text>
//           <Text style={styles.meta}>{orderItems.deliveryAddress.street}</Text>
//           <Text style={styles.meta}>{orderItems.deliveryAddress.city}, {orderItems.deliveryAddress.state}</Text>
//           <Text style={styles.meta}>{orderItems.deliveryAddress.pincode}</Text>
//           <Text style={styles.meta}>{orderItems.deliveryAddress.phone}</Text>
//         </View>
//       )}

//       <Text style={styles.sectionTitle}>Ordered Items</Text>
//     </>
//   );

//   const renderFooter = () => (
//     <View style={styles.actionContainer}>
//       <TouchableOpacity style={styles.actionButton}>
//         <Text style={styles.actionText}>Track Package</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#f87171' }]}>
//         <Text style={styles.actionText}>Return Item</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <FlatList
//       data={orderItems.items}
//       renderItem={({ item }) => <OrderItemCard item={item} />}
//       keyExtractor={(item, index) => index.toString()}
//       ListHeaderComponent={renderHeader}
//       ListFooterComponent={renderFooter}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// export default OrderDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#f9fafb',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#111827',
//   },
//   metaCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 10,
//     marginVertical: 16,
//     elevation: 1,
//   },
//   shipmentCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 10,
//     marginBottom: 16,
//     elevation: 1,
//   },
//   addressCard: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 10,
//     marginBottom: 16,
//     elevation: 1,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 6,
//     color: '#1f2937',
//   },
//   meta: {
//     fontSize: 14,
//     marginBottom: 4,
//     color: '#374151',
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   actionButton: {
//     flex: 1,
//     backgroundColor: '#3b82f6',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   actionText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });



// import React, { useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import StepIndicator from 'react-native-step-indicator';

// import OrderItemCard from '../components/OrderItemCard';
// import useCategoryManager from '../hooks/useCategoryManager';
// import GaleriesLoader from '../components/GaleriesLoader';

// const OrderDetailScreen = () => {
//   const route = useRoute();
//   const { orderId } = route.params;

//   const { orderItems, loadOrderItems, loading } = useCategoryManager();
//   console.log("Ordered Items:", orderItems)

//   useEffect(() => {
//     if (orderId) loadOrderItems(orderId);
//   }, [orderId]);

//   const getStepPosition = (status) => {
//       switch (status?.toUpperCase()) {
//         case 'PENDING':
//           return 0;
//         case 'PROCESSING':
//           return 1;
//         case 'SHIPPED':
//           return 2;
//         case 'DELIVERED':
//         case 'COMPLETED':
//           return 3;
//         case 'CANCELLED':
//           return 4; // 👈 New index for cancelled
//         default:
//           return 0;
//       }
  
    
//   };

//   const isCancelled = orderItems?.status?.toUpperCase() === 'CANCELLED';

// const cancelledStepStyles = {
//   ...stepIndicatorStyles,
//   stepIndicatorCurrentColor: 'red',
//   currentStepLabelColor: 'red',
//   stepStrokeCurrentColor: 'red',
// };


// const addressParts = orderItems?.deliveryAddress?.split(',') || [];
// const line1 = addressParts[0]?.trim() || '';
// const city = addressParts[1]?.trim() || '';
// const stateZipCountry = addressParts[2]?.trim() || '';
// const state = stateZipCountry?.split(' ')[0] || '';
// const zip = addressParts[3]?.trim() || '';

// const getEstimatedDelivery = (createdAt) => {
//   if (!createdAt) return 'Tomorrow'; 

//   const deliveryDate = new Date(createdAt);
//   deliveryDate.setDate(deliveryDate.getDate() + 2); 
//   return deliveryDate.toLocaleDateString(); 
// };





//   return (
//     <View style={styles.container}>
//       {loading ? (
// <GaleriesLoader/>      ) : (
//         <FlatList
//           data={orderItems?.items || []}
//           renderItem={({ item }) => <OrderItemCard item={item} />}
//           keyExtractor={(item, index) => index.toString()}
//           contentContainerStyle={styles.list}
//           ListHeaderComponent={() => (
//             <View style={styles.headerContainer}>
          
//               <View style={styles.sectionBox}>
//                 <Text style={styles.title}>Order Details</Text>
//                 <Text style={styles.metaText}>Order ID: <Text style={styles.valueText}>{orderId}</Text></Text>
//                 <Text style={styles.metaText}>Payment ID: <Text style={styles.valueText}>{orderItems?.paymentId || 'N/A'}</Text></Text>
//                 <Text style={styles.metaText}>Order Date: <Text style={styles.valueText}>{new Date(orderItems.createdAt).toLocaleString()}</Text></Text>
//                 <Text style={styles.metaText}>Total Amount: <Text style={styles.valueText}>₹{orderItems?.totalAmount || 'N/A'}</Text></Text>

//               </View>
          
//               <View style={styles.sectionBox}>
//                 <Text style={styles.sectionTitle}>Order Status</Text>
//                 {orderItems?.status?.toUpperCase() === 'CANCELLED' ? (
//   <View style={styles.cancelledBox}>
//     <Text style={styles.cancelledText}>Order Cancelled</Text>
//   </View>
// ) : (
//   <StepIndicator
//     currentPosition={getStepPosition(orderItems?.status)}
//     labels={['Pending', 'Processing', 'Shipped', 'Delivered']}
//     stepCount={4}
//     customStyles={stepIndicatorStyles}
//   />
// )}



//               </View>
          
//               {orderItems?.status?.toUpperCase() !== 'CANCELLED' && (
//                 <>
//   <View style={styles.sectionBox}>
//     <Text style={styles.sectionTitle}>Shipment Info</Text>
//     <Text style={styles.metaText}>Courier: <Text style={styles.valueText}>{orderItems?.courierName || 'Bluedart'}</Text></Text>
//     <Text style={styles.metaText}>Tracking No: <Text style={styles.valueText}>{orderItems?.trackingNumber || 'N/A'}</Text></Text>
//     <Text style={styles.metaText}>  Estimated Delivery: <Text style={styles.valueText}>{getEstimatedDelivery(orderItems?.createdAt)}</Text></Text>  
// </View>


//               <View style={styles.addressBox}>
//                 <Text style={styles.sectionTitle}>Delivery Address</Text>
//                 <Text style={styles.addressText}>{line1}</Text>
//                 <Text style={styles.addressText}>{city}, {state} - {zip}</Text>
//               </View>
//               </>
//               )}
          
             
          
//               <View style={styles.divider} />
//             </View>
//           )}
        
//         />
//       )}
//     </View>
//   );
// };

// export default OrderDetailScreen;

// // ──────────────────────────────────────────
// // ✅ STYLES
// // ──────────────────────────────────────────

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   headerContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   metaText: {
//     fontSize: 16,
//     marginBottom: 4,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   shipmentBox: {
//     marginTop: 15,
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f9fafb',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
//   addressBox: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#f0fdf4',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d1fae5',
//   },

//   sectionBox: {
//     padding: 10,
//     backgroundColor: '#f9fafb',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//   },
  
//   valueText: {
//     fontWeight: '600',
//     color: '#111827',
//   },
  
//   addressText: {
//     fontSize: 16,
//     color: '#1f2937',
//     marginBottom: 2,
//   },
  
//   divider: {
//     height: 1,
//     backgroundColor: '#e5e7eb',
//     marginVertical: 10,
//   },

//   cancelledBox: {
//     padding: 15,
//     backgroundColor: '#fef2f2',
//     borderColor: '#fecaca',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   cancelledText: {
//     color: '#b91c1c',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
  

  

// });

// const stepIndicatorStyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize: 30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 3,
//   stepStrokeCurrentColor: '#3b82f6',
//   stepStrokeWidth: 2,
//   stepStrokeFinishedColor: '#3b82f6',
//   stepStrokeUnFinishedColor: '#d1d5db',
//   separatorFinishedColor: '#3b82f6',
//   separatorUnFinishedColor: '#d1d5db',
//   stepIndicatorFinishedColor: '#3b82f6',
//   stepIndicatorUnFinishedColor: '#d1d5db',
//   stepIndicatorCurrentColor: '#3b82f6',
//   labelColor: '#6b7280',
//   currentStepLabelColor: '#3b82f6',
// };


import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';

import OrderItemCard from '../components/OrderItemCard';
import useCategoryManager from '../hooks/useCategoryManager';
import GaleriesLoader from '../components/GaleriesLoader';

const OrderDetailScreen = () => {
  const route = useRoute();
  const { orderId } = route.params;

  const { orderItems, loadOrderItems, loading } = useCategoryManager();
  const [isLoading, setIsLoading] = useState(true); // Local loading state

  useEffect(() => {
    if (orderId) {
      loadOrderItems(orderId).then(() => setIsLoading(false)); // Once data is loaded, set loading to false
    }
  }, [orderId]);

  const getStepPosition = (status) => {
    switch (status?.toUpperCase()) {
      case 'PENDING':
        return 0;
      case 'PROCESSING':
        return 1;
      case 'SHIPPED':
        return 2;
      case 'DELIVERED':
      case 'COMPLETED':
        return 3;
      case 'CANCELLED':
        return 4; // 👈 New index for cancelled
      default:
        return 0;
    }
  };

  const isCancelled = orderItems?.status?.toUpperCase() === 'CANCELLED';

  const cancelledStepStyles = {
    ...stepIndicatorStyles,
    stepIndicatorCurrentColor: 'red',
    currentStepLabelColor: 'red',
    stepStrokeCurrentColor: 'red',
  };

  const addressParts = orderItems?.deliveryAddress?.split(',') || [];
  const line1 = addressParts[0]?.trim() || '';
  const city = addressParts[1]?.trim() || '';
  const stateZipCountry = addressParts[2]?.trim() || '';
  const state = stateZipCountry?.split(' ')[0] || '';
  const zip = addressParts[3]?.trim() || '';

  const getEstimatedDelivery = (createdAt) => {
    if (!createdAt) return 'Tomorrow';

    const deliveryDate = new Date(createdAt);
    deliveryDate.setDate(deliveryDate.getDate() + 2);
    return deliveryDate.toLocaleDateString();
  };

 

 

return (
  <View style={styles.container}>
    {isLoading ? (
      <GaleriesLoader />
    ) : (
      <ScrollView showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
        <Text style={styles.title}>Order Details</Text>
          <View style={styles.sectionBox}>
            
            <Text style={styles.metaText}>Order ID: <Text style={styles.valueText}>{orderId}</Text></Text>
            <Text style={styles.metaText}>Payment ID: <Text style={styles.valueText}>{orderItems?.paymentId || 'N/A'}</Text></Text>
            <Text style={styles.metaText}>Order Date: <Text style={styles.valueText}>{new Date(orderItems.createdAt).toLocaleString()}</Text></Text>
            <Text style={styles.metaText}>Total Amount: <Text style={styles.valueText}>₹{orderItems?.totalAmount || 'N/A'}</Text></Text>
          </View>
          <Text style={styles.sectionTitle}>Order Status</Text>

          <View style={styles.sectionBox}>
            {orderItems?.status?.toUpperCase() === 'CANCELLED' ? (
              <View style={styles.cancelledBox}>
                <Text style={styles.cancelledText}>Order Cancelled</Text>
              </View>
            ) : (
              <StepIndicator
                currentPosition={getStepPosition(orderItems?.status)}
                labels={['Pending', 'Processing', 'Shipped', 'Delivered']}
                stepCount={4}
                customStyles={stepIndicatorStyles}
              />
            )}
          </View>

          {orderItems?.status?.toUpperCase() !== 'CANCELLED' && (
            <>
            <Text style={styles.sectionTitle}>Shipment Info</Text>
              <View style={styles.sectionBox}>
                
                <Text style={styles.metaText}>Courier: <Text style={styles.valueText}>{orderItems?.courierName || 'Bluedart'}</Text></Text>
                <Text style={styles.metaText}>Tracking No: <Text style={styles.valueText}>{orderItems?.trackingNumber || 'N/A'}</Text></Text>
                <Text style={styles.metaText}>Estimated Delivery: <Text style={styles.valueText}>{getEstimatedDelivery(orderItems?.createdAt)}</Text></Text>
              </View>
              <Text style={styles.sectionTitle}>Delivery Address</Text>

              <View style={styles.addressBox}>
                <Text style={styles.addressText}>{line1}</Text>
                <Text style={styles.addressText}>{city}, {state} - {zip}</Text>
              </View>
            </>
          )}

          <View style={styles.divider} />
        </View>

        {orderItems?.items?.map((item, index) => (
          <OrderItemCard key={index} item={item} />
        ))}
      </ScrollView>
    )}
  </View>
);

};



export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  headerContainer: {
    marginBottom: 20,
    marginTop:20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  metaText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 10,
    marginBottom: 5,
  },
  shipmentBox: {
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  addressBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0fdf4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1fae5',
  },
  sectionBox: {
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  valueText: {
    fontWeight: '300',
    color: 'black',
  },
  addressText: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 10,
  },
  cancelledBox: {
    padding: 15,
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelledText: {
    color: '#b91c1c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  }
  
});

const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#3b82f6',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#3b82f6',
  stepStrokeUnFinishedColor: '#d1d5db',
  separatorFinishedColor: '#3b82f6',
  separatorUnFinishedColor: '#d1d5db',
  stepIndicatorFinishedColor: '#3b82f6',
  stepIndicatorUnFinishedColor: '#d1d5db',
  stepIndicatorCurrentColor: '#3b82f6',
  labelColor: '#6b7280',
  currentStepLabelColor: '#3b82f6',
};



 // return (
  //   <View style={styles.container}>
  //     {/* Show the loader if data is still being fetched */}
  //     {isLoading ? (
  //       <GaleriesLoader /> // Show loader initially
  //     ) : (
  //       <FlatList
  //         data={orderItems?.items || []}
  //         renderItem={({ item }) => <OrderItemCard item={item} />}
  //         keyExtractor={(item, index) => index.toString()}
  //         contentContainerStyle={styles.list}
  //         ListHeaderComponent={() => (
  //           <View style={styles.headerContainer}>
  //             <View style={styles.sectionBox}>
  //               <Text style={styles.title}>Order Details</Text>
  //               <Text style={styles.metaText}>Order ID: <Text style={styles.valueText}>{orderId}</Text></Text>
  //               <Text style={styles.metaText}>Payment ID: <Text style={styles.valueText}>{orderItems?.paymentId || 'N/A'}</Text></Text>
  //               <Text style={styles.metaText}>Order Date: <Text style={styles.valueText}>{new Date(orderItems.createdAt).toLocaleString()}</Text></Text>
  //               <Text style={styles.metaText}>Total Amount: <Text style={styles.valueText}>₹{orderItems?.totalAmount || 'N/A'}</Text></Text>
  //             </View>

  //             <View style={styles.sectionBox}>
  //               <Text style={styles.sectionTitle}>Order Status</Text>
  //               {orderItems?.status?.toUpperCase() === 'CANCELLED' ? (
  //                 <View style={styles.cancelledBox}>
  //                   <Text style={styles.cancelledText}>Order Cancelled</Text>
  //                 </View>
  //               ) : (
  //                 <StepIndicator
  //                   currentPosition={getStepPosition(orderItems?.status)}
  //                   labels={['Pending', 'Processing', 'Shipped', 'Delivered']}
  //                   stepCount={4}
  //                   customStyles={stepIndicatorStyles}
  //                 />
  //               )}
  //             </View>

  //             {orderItems?.status?.toUpperCase() !== 'CANCELLED' && (
  //               <>
  //                 <View style={styles.sectionBox}>
  //                   <Text style={styles.sectionTitle}>Shipment Info</Text>
  //                   <Text style={styles.metaText}>Courier: <Text style={styles.valueText}>{orderItems?.courierName || 'Bluedart'}</Text></Text>
  //                   <Text style={styles.metaText}>Tracking No: <Text style={styles.valueText}>{orderItems?.trackingNumber || 'N/A'}</Text></Text>
  //                   <Text style={styles.metaText}>Estimated Delivery: <Text style={styles.valueText}>{getEstimatedDelivery(orderItems?.createdAt)}</Text></Text>
  //                 </View>

  //                 <View style={styles.addressBox}>
  //                   <Text style={styles.sectionTitle}>Delivery Address</Text>
  //                   <Text style={styles.addressText}>{line1}</Text>
  //                   <Text style={styles.addressText}>{city}, {state} - {zip}</Text>
  //                 </View>
  //               </>
  //             )}

  //             <View style={styles.divider} />
  //           </View>
  //         )}
  //       />
  //     )}
  //   </View>
  // );
