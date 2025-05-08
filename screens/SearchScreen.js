// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation } from '@react-navigation/native';
// import { useFocusEffect } from '@react-navigation/native';

// const SearchScreen = () => {
//     const [recent, setRecent] = useState(['Jacket', 'Sneakers', 'Perfume']);
//     const [results, setResults] = useState([]);
//     const navigation = useNavigation();

//     useFocusEffect(
//         React.useCallback(() => {
//             const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//                 navigation.goBack();
//                 return true;
//             });
//             return () => backHandler.remove();
//         }, [])
//     );

//     const handleResult = (data) => {
//         setResults(data);
//         // optionally add to recent
//     };

//     return (
//         <View style={styles.container}>
//             <SearchBar onResults={handleResult} />
//             <Text style={styles.label}>Recent Searches</Text>
//             <FlatList
//                 data={recent}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity>
//                         <Text style={styles.recentItem}>{item}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         padding: 10,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 20,
//     },
//     recentItem: {
//         fontSize: 14,
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
// });

// export default SearchScreen;



// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// const mockProducts = [
//     { id: '1', name: 'Leather Jacket' },
//     { id: '2', name: 'Running Sneakers' },
//     { id: '3', name: 'Floral Perfume' },
//     { id: '4', name: 'Denim Jeans' },
//     { id: '5', name: 'Black Boots' },
// ];

// const SearchScreen = () => {
//     const [recent, setRecent] = useState(['Jacket', 'Sneakers', 'Perfume']);
//     const [results, setResults] = useState([]);
//     const [query, setQuery] = useState('');
//     const navigation = useNavigation();

//     useFocusEffect(
//         React.useCallback(() => {
//             const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//                 navigation.goBack();
//                 return true;
//             });
//             return () => backHandler.remove();
//         }, [])
//     );

//     const handleSearch = (text) => {
//         setQuery(text);

//         if (text.trim() === '') {
//             setResults([]);
//             return;
//         }

//         const filtered = mockProducts.filter((item) =>
//             item.name.toLowerCase().includes(text.toLowerCase())
//         );
//         setResults(filtered);
//     };

//     return (
//         <View style={styles.container}>
//             <SearchBar onSearch={handleSearch} />

//             {query.trim() === '' ? (
//                 <>
//                     <Text style={styles.label}>Recent Searches</Text>
//                     <FlatList
//                         data={recent}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={({ item }) => (
//                             <TouchableOpacity onPress={() => handleSearch(item)}>
//                                 <Text style={styles.recentItem}>{item}</Text>
//                             </TouchableOpacity>
//                         )}
//                     />
//                 </>
//             ) : (
//                 <>
//                     <Text style={styles.label}>Search Results</Text>
//                     {results.length > 0 ? (
//                         <FlatList
//                             data={results}
//                             keyExtractor={(item) => item.id}
//                             renderItem={({ item }) => (
//                                 <View style={styles.resultItem}>
//                                     <Text>{item.name}</Text>
//                                 </View>
//                             )}
//                         />
//                     ) : (
//                         <Text style={{ padding: 10 }}>No results found.</Text>
//                     )}
//                 </>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         padding: 10,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 20,
//     },
//     recentItem: {
//         fontSize: 14,
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
//     resultItem: {
//         paddingVertical: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
// });

// export default SearchScreen;



// import React, { useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation } from '@react-navigation/native';

// const recent = ['Jacket', 'Sneakers', 'Perfume'];

// const SearchScreen = () => {
//     const navigation = useNavigation();

//     const handleSearchSubmit = (query) => {
//         if (query.trim() !== '') {
//             navigation.navigate('SearchResults', { query });
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <SearchBar onSubmit={handleSearchSubmit} />

//             <Text style={styles.label}>Recent Searches</Text>
//             <FlatList
//                 data={recent}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => handleSearchSubmit(item)}>
//                         <Text style={styles.recentItem}>{item}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: 'white', padding: 10 },
//     label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
//     recentItem: {
//         fontSize: 14,
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
// });

// export default SearchScreen;



// import React, { useState ,useEffect} from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation } from '@react-navigation/native';

// const recent = ['Jacket', 'Sneakers', 'Perfume'];

// const SearchScreen = ({ navigation, route }) => {
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//       if (route.params?.query) {
//         setQuery(route.params.query);
//       }
//     }, [route.params]);
  
//     const handleSubmit = (text) => {
//       navigation.navigate('SearchResults', { query: text });
//     };

//     return (
//         <View style={styles.container}>
//             {/* SearchBar for input */}
//             <SearchBar
//         initialQuery={route.params?.query || ""}
//         onSubmit={handleSubmit}
//         readOnly={false}
//       />
//             {/* Recent Searches Section */}
//             <Text style={styles.label}>Recent Searches</Text>
//             <FlatList
//                 data={recent}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => handleSubmit(item.toLocaleLowerCase())}>
//                         <Text style={styles.recentItem}>{item}</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: 'white', padding: 10 },
//     label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
//     recentItem: {
//         fontSize: 14,
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
// });

// export default SearchScreen;







// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// const recent = ['Jacket', 'Sneakers', 'Perfume'];

// const SearchScreen = ({ navigation, route }) => {
//   const [query, setQuery] = useState('');
//   console.log("QUERY",route.params.query)

//   // Clear query every time this screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       setQuery('');
//     }, [])
//   );

//   // Optional: support passing query from route (e.g. for back navigation with value)
//   useEffect(() => {
    
//       setQuery(route.params.query);
    
//   }, [route.params]);

//   const handleSubmit = (text) => {
//     navigation.navigate('SearchResults', { query: text });
//   };

//   return (
//     <View style={styles.container}>
//       <SearchBar
//         initialQuery={query}
//         onSubmit={handleSubmit}
//         readOnly={false}
//       />
//       <Text style={styles.label}>Recent Searches</Text>
//       <FlatList
//         data={recent}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleSubmit(item.toLowerCase())}>
//             <Text style={styles.recentItem}>{item}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white', padding: 10 },
//   label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
//   recentItem: {
//     fontSize: 14,
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
// });

// export default SearchScreen;




// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import { useNavigation, useFocusEffect } from '@react-navigation/native';

// const recent = ['Jacket', 'Sneakers', 'Perfume'];

// const SearchScreen = ({ navigation, route }) => {
//   const [query, setQuery] = useState('');
//   console.log("QUERY",route.params.query)

//   // Clear query every time this screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       setQuery('');
//     }, [])
//   );

//   // Optional: support passing query from route (e.g. for back navigation with value)
// //   useEffect(() => {
    
// //       setQuery(route.params.query);
    
// //   }, [route.params]);

//   const handleSubmit = (text) => {
//     navigation.navigate('SearchResults', { query: text });
//   };
//   return (
//     <View style={styles.container}>
//       <SearchBar
//   query={query}
//   onChangeText={setQuery}
//   onSubmit={handleSubmit}
//   readOnly={false}
// />

//       <Text style={styles.label}>Recent Searches</Text>
//       <FlatList
//         data={recent}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleSubmit(item.toLowerCase())}>
//             <Text style={styles.recentItem}>{item}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white', padding: 10 },
//   label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
//   recentItem: {
//     fontSize: 14,
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
// });

// export default SearchScreen;





import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../components/SearchBar';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const RECENT_KEY = 'recent_searches';

const SearchScreen = ({ navigation, route }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);



useFocusEffect(
    React.useCallback(() => {
      if (!route.params?.query) {
        setQuery('');
      } else {
        setQuery(route.params.query);
        navigation.setParams({ query: null }); // clear param
      }
      loadRecentSearches();
    }, [route])
  );
  

  const loadRecentSearches = async () => {
    try {
      const stored = await AsyncStorage.getItem(RECENT_KEY);
      if (stored) setRecentSearches(JSON.parse(stored));
    } catch (err) {
      console.error('Failed to load recent searches:', err);
    }
  };

  const removeRecentItem = async (text) => {
    try {
      const updated = recentSearches.filter(item => item !== text);
      await AsyncStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      setRecentSearches(updated);
    } catch (err) {
      console.error('Failed to remove recent item:', err);
    }
  };
  

  const saveRecentSearch = async (text) => {
    try {
      const lowerText = text.toLowerCase();
      let filtered = recentSearches.filter(item => item.toLowerCase() !== lowerText);
      let updated = [text, ...filtered];
      updated = updated.slice(0, 10); // max 10 items
      await AsyncStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      setRecentSearches(updated);
    } catch (err) {
      console.error('Failed to save recent search:', err);
    }
  };
  

  const handleSubmit = (text) => {
    if (text.trim() === '') return;
    saveRecentSearch(text);
    navigation.navigate('SearchResults', { query: text });
  };
console.log("QUERY",query)
  return (
    <View style={styles.container}>
      <SearchBar
        initialQuery={query}
        onChangeText={setQuery}
        onSubmit={handleSubmit}
        readOnly={false}
      />

      <Text style={styles.label}>Recent Searches</Text>
      <FlatList
  data={recentSearches}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.recentItemContainer}>
      <TouchableOpacity
        style={styles.recentItemTouchable}
        onPress={() => handleSubmit(item)}
      >
        <Feather name="clock" size={18} color="#555" style={{ marginRight: 8 }} />
        <Text style={styles.recentItemText}>{item}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeRecentItem(item)}>
        <Feather name="x" size={18} color="#999" />
      </TouchableOpacity>
    </View>
  )}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  recentItem: {
    fontSize: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  recentItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  
  recentItemTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  recentItemText: {
    fontSize: 14,
    color: '#333',
  },
  
});

export default SearchScreen;
