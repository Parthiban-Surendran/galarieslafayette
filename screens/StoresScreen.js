import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopLineText from '../components/TopLineText';
import Header from '../components/Header';

const Stores = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const storeData = [
    {
      id: '1',
      name: 'Galeries Lafayette - Paris Haussmann',
      distance: '2.0 km',
      address: '40 Bd Haussmann, 75009 Paris',
      phone: '+33142823456',
      closingTime: '8:30 p.m.',
    },
  ];

  const handleSearch = () => {
    const filteredStores = storeData.filter(store =>
      store.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResults(filteredStores);
  };

  return (
    <View style={styles.container}>
      <TopLineText/>
      <Header/>
      <View style={{ padding: 20 }}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Find a store</Text>
          <Text>Enter your location</Text>
          <View style={styles.searchBox}>
            <TextInput
              style={styles.input}
              placeholder="Postal Code, Location"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.link}>Use your current location</Text>
          </TouchableOpacity>
        </View>

        {results.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultText}>{results.length} Results near your location</Text>
            <FlatList
  data={results}
  keyExtractor={item => item.id}
  renderItem={({ item }) => (
    <View style={[styles.storeCard, { columnGap: 20,padding:20 }]}>
      <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
        <Text style={[styles.storeName, { width: 200, lineHeight: 24 }]}>{item.name}</Text>
        <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>{item.distance}</Text>
      </View>
      <Text style={{ lineHeight: 24 }}>Closes at {item.closingTime}</Text>
      <Text style={{ lineHeight: 24 }}>{item.address}</Text>
      <Text style={{ lineHeight: 24 }}>{item.phone}</Text>
      <TouchableOpacity>
        <Text style={[styles.link, { lineHeight: 24 }]}>Store Hours</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={[styles.detailsButtonText, { lineHeight: 24 }]}>SEE DETAILS OF THIS STORE</Text>
      </TouchableOpacity>
    </View>
  )}
/>

          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storeCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 5,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Stores;