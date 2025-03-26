import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Or any other icon library

const SearchBar = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Brands, categories, articles..."
                onChangeText={onSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
});

export default SearchBar;