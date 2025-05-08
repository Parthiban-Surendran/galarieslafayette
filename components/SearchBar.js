// import React from 'react';
// import { StyleSheet, View, TextInput } from 'react-native';
// import { Feather } from '@expo/vector-icons'; // Or any other icon library

// const SearchBar = ({ onSearch }) => {
//     return (
//         <View style={styles.container}>
//             <Feather name="search" size={20} color="gray" style={styles.icon} />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Brands, categories, articles..."
//                 onChangeText={onSearch}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginVertical: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//     },
//     icon: {
//         marginRight: 10,
//     },
//     input: {
//         flex: 1,
//         height: 40,
//     },
// });

// export default SearchBar;





// import React, { useState } from 'react';
// import { TextInput, Button, View, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';  // Import navigation hook

// const SearchBar = ({ onSubmit }) => {
//     const [query, setQuery] = useState('');
//     const navigation = useNavigation();  // Use navigation hook

//     const handleSearch = () => {
//         if (query.trim() !== '') {
//             navigation.navigate('Search');
//             onSubmit(query); // Call the onSubmit function passed as a prop with the query value
//               // Navigate to SearchScreen with query
//             setQuery(''); // Clear the input field after submission
//         }
//     };

//     const handleChange = (text) => {
//         setQuery(text); // Update the query as the user types
//     };

//     return (
//         <View style={styles.searchContainer}>
//             <TextInput
//                 style={styles.searchInput}
//                 value={query}
//                 onChangeText={handleChange} // Update query as the user types
//                 placeholder="Search products..."
//             />
//             <Button title="Search" onPress={handleSearch} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     searchInput: {
//         flex: 1,
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         marginRight: 10,
//         paddingHorizontal: 10,
//     },
// });

// export default SearchBar;


// // SearchBar.js
// import React, { useState } from 'react';
// import { TextInput,Button, View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SearchBar = ({ onSubmit, initialQuery = '', readOnly = false, onFocus }) => {
//     const [query, setQuery] = useState(initialQuery);

//     return (
//         <View style={styles.searchContainer}>
//             <TextInput
//                 style={styles.searchInput}
//                 value={query}
//                 onChangeText={(text) => setQuery(text)}
//                 placeholder="Search products..."
//                 editable={!readOnly}
//                 onFocus={readOnly ? onFocus : undefined}
//             />
//             {!readOnly && (
//                 <Button title="Search" onPress={() => onSubmit(query)} />
//             )}
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     searchContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     searchInput: {
//         flex: 1,
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         backgroundColor: '#fff',
//     },
// });

// export default SearchBar;




// import React, { useState, useEffect } from 'react';
// import {
//   TextInput,
//   Button,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Keyboard,
// } from 'react-native';

// const SearchBar = ({ onSubmit, initialQuery = '', readOnly = false, onFocus }) => {
//   const [query, setQuery] = useState(initialQuery);

//   useEffect(() => {
//     setQuery(initialQuery);
//   }, [initialQuery]);

//   const handlePress = () => {
//     if (readOnly && onFocus) {
//       Keyboard.dismiss();
//       onFocus();
//     }
//   };

//   return (
//     <View style={styles.searchContainer}>
//       {readOnly ? (
//         <TouchableOpacity style={{ flex: 1 }} onPress={handlePress} activeOpacity={1}>
//           <View pointerEvents="none">
//             <TextInput
//               style={styles.searchInput}
//               value={query}
//               placeholder="Search products..."
//               editable={false}
//             />
//           </View>
//         </TouchableOpacity>
//       ) : (
//         <>
//           <TextInput
//             style={styles.searchInput}
//             value={query}
//             onChangeText={(text) => setQuery(text)}
//             placeholder="Search products..."
//           />
//           <Button title="Search" onPress={() => onSubmit(query)} />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
// });

// export default SearchBar;


import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ initialQuery = '', readOnly = false, onSubmit,onFocus }) => {
  const [text, setText] = useState(initialQuery);

  useEffect(() => {
    console.log("ebtered")
   
    setText(initialQuery); // sync with props

  
  }, [initialQuery]);
console.log("IMIT","-",initialQuery,"-",text)
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="black" style={styles.icon} />
      <TextInput
  style={styles.input}
  placeholder="Search products..."
  value={text}
  onChangeText={setText}
  onSubmitEditing={() => onSubmit(text)}
  onFocus={readOnly ? onFocus : undefined}
  returnKeyType="search"
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;


// import React from 'react';
// import { TextInput, View, StyleSheet } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const SearchBar = ({ query = '', readOnly = false, onChangeText, onSubmit, onFocus }) => {
//   return (
//     <View style={styles.container}>
//       <Feather name="search" size={20} color="black" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         placeholder="Search products..."
//         value={query}
//         onChangeText={onChangeText}
//         onSubmitEditing={() => onSubmit(query)}
//         onFocus={readOnly ? onFocus : undefined}
//         returnKeyType="search"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#eee',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     height: 40,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//   },
// });

// export default SearchBar;
