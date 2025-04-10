import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import TopLineText from '../components/TopLineText';
import Header from '../components/Header';
import OrderItemCard from '../components/OrderItemCard';
import useCategoryManager from '../hooks/useCategoryManager';

const OrderDetailScreen = () => {
  const route = useRoute();
  const { orderId } = route.params;

  const { orderItems, loadOrderItems, loading } = useCategoryManager();

  useEffect(() => {
    if (orderId) loadOrderItems(orderId);
  }, [orderId]);

  return (
    <>
      <TopLineText />
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Order ID: {orderId}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#3b82f6" />
        ) : (
          <>
            {/* Order Meta */}
            <View style={styles.metaContainer}>
              <Text style={[styles.metaText]}><Text style={styles.metaLabel}>Status:</Text> {orderItems?.status}</Text>
              <Text style={styles.metaText}>Total Amount: ₹{orderItems?.totalAmount}</Text>
              <Text style={styles.metaText}>Ordered Date: {orderItems?.orderedDate}</Text>
            </View>

            {/* Order Items */}
            <FlatList
              data={orderItems.items}
              renderItem={({ item }) => <OrderItemCard item={item} />}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.list}
            />
          </>
        )}
      </View>
    </>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  metaContainer: {
    marginBottom: 20,
  },
  metaText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
    fontWeight:'bold'
  },
  list: {
    paddingBottom: 20,
  },
  metaLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  
});
