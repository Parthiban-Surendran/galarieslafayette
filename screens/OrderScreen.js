// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
// import TopLineText from '../components/TopLineText';
// import Header from '../components/Header';
// import useCategoryManager from '../hooks/useCategoryManager';

// const OrderScreen = ({ navigation }) => {
//   const { orders, loadOrders } = useCategoryManager();
//   const [groupedOrders, setGroupedOrders] = useState({});

//   useEffect(() => {
//     loadOrders(1);
//   }, []);
//   console.log(orders)

//   useEffect(() => {
//     // Group orders by their status
//     const grouped = orders.reduce((acc, item) => {
//       const status = item.orders.status || 'Unknown';
//       if (!acc[status]) {
//         acc[status] = [];
//       }
//       acc[status].push(item);
//       return acc;
//     }, {});
//     setGroupedOrders(grouped);
//   }, [orders]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Delivered':
//         return { color: '#22c55e' };
//       case 'Shipped':
//         return { color: '#facc15' };
//       case 'Processing':
//         return { color: '#3b82f6' };
//       case 'COMPLETED':
//         return { color: '#22c55e' };
//       case 'PENDING':
//         return { color: '#f87171' };
//       default:
//         return { color: '#6b7280' };
//     }
//   };

//   const renderOrder = (item) => (
//     <TouchableOpacity key={item.id} style={styles.orderCard}>
//       <Text style={styles.orderId}>Order ID: {item.orderId}</Text>
//       <Text style={styles.detail}>Amount: ₹{item.totalAmount}</Text>
//       <Text style={styles.detail}>Date: {new Date(item.createdAt).toLocaleString()}</Text>
//       <Text style={[styles.status, getStatusColor(item.status)]}>{item.orders.status}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <TopLineText />
//       <Header />
//       <View style={styles.container}>
//         <Text style={styles.title}>My Orders</Text>

//         {orders.length === 0 ? (
//           <ActivityIndicator size="large" color="#3b82f6" />
//         ) : (
//           <ScrollView contentContainerStyle={styles.list}>
//             {Object.keys(groupedOrders).map((status) => (
//               <View key={status}>
//                 <Text style={[styles.groupTitle, getStatusColor(status)]}>{status} Orders</Text>
//                 {groupedOrders[status].map(renderOrder)}
//               </View>
//             ))}
//           </ScrollView>
//         )}
//       </View>
//     </>
//   );
// };

// export default OrderScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   groupTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   orderCard: {
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#f3f4f6',
//     marginBottom: 15,
//     elevation: 2,
//   },
//   orderId: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   detail: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   status: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import TopLineText from '../components/TopLineText';
import Header from '../components/Header';
import useCategoryManager from '../hooks/useCategoryManager';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
  const { orders, loadOrders } = useCategoryManager();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
    const fetchOrders = async () => {
      setLoading(true);
      await loadOrders(1);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
      case 'COMPLETED':
        return { color: '#22c55e' };
      case 'Shipped':
        return { color: '#facc15' };
      case 'Processing':
        return { color: '#3b82f6' };
      case 'PENDING':
        return { color: '#f87171' };
      default:
        return { color: '#6b7280' };
    }
  };

  const renderOrder = ({ item }) => (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() =>
        navigation.navigate('Orders', {
          screen: 'OrderDetailScreen',
          params: { orderId: item.orderId },
        })
      }
    >
      <Text style={styles.orderId}>Order ID: {item.orders?.orderId || item.orderId}</Text>
      <Text style={styles.detail}>Amount: ₹{item.totalAmount}</Text>
      <Text style={styles.detail}>
        Date: {item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}
      </Text>
      <Text style={[styles.status, getStatusColor(item.status)]}>
        {item.status || 'Unknown'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TopLineText />
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>My Orders</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#3b82f6" />
        ) : orders.length === 0 ? (
          <Text style={styles.noOrdersText}>No orders found.</Text>
        ) : (
          <FlatList
            data={orders}
            renderItem={renderOrder}
            keyExtractor={(item, index) => item.orders?.orderId?.toString() || index.toString()}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    </>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  noOrdersText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 50,
  },
  orderCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    marginBottom: 15,
    elevation: 2,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});

