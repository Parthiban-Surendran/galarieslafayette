import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const PasswordScreen = ({ route, navigation }) => {
    const {ScreenName} = route.params || {};
    const { setIsLoggedIn } = useAuth();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);


    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button title="Close" onPress={() => navigation.navigate('Home')} />
          ),
        });
      }, [navigation]);


    const handleContinue = () => {
        if (!password) {
            setError('Password is required.');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
        } else {
            setError('');
            setPassword('');
            setIsLoggedIn(true);
            if(ScreenName==='home'){
                navigation.navigate('Home');
            }
            else{
             navigation.navigate('AccountCommon',{title:'Your Orders',message:'You do not have any orders',buttontxt:'START YOUR SHOPPING',name:'orders'})
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../assets/galerieslogo.png')} style={styles.logo} />
                <TouchableOpacity style={styles.closeButton} onPress={() => { navigation.navigate('Home') }}>
                    <MaterialIcons name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Password</Text>
            <Text style={styles.subtitle}>Please enter your password</Text>
            <TouchableOpacity><Text style={[styles.subtitle, { color: '#000', textDecorationLine: 'underline' }]}>Forgot Password</Text></TouchableOpacity>

            <View style={[styles.inputContainer, error ? styles.inputError : {}]}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry={secureTextEntry}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setError('');
                    }}
                />
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <MaterialIcons
                        name={secureTextEntry ? 'visibility-off' : 'visibility'}
                        size={24}
                        color="#888"
                    />
                </TouchableOpacity>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    logo: { width: 100, height: 40, resizeMode: 'contain', alignSelf: 'center', marginBottom: 20 },
    title: { fontSize: 35, color: '#000', fontWeight: '900', marginBottom: 5, paddingBottom: 10 },
    subtitle: { fontWeight: '700', fontSize: 14, color: '#333', marginBottom: 20, marginLeft: 5 },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        justifyContent: 'space-between'
    },
    input: { flex: 1, fontSize: 16, color: '#000' },
    inputError: { borderColor: 'red', borderWidth: 2 },
    errorText: { color: 'red', fontSize: 12, marginTop: 5 },
    continueButton: { backgroundColor: '#000', paddingVertical: 12, alignItems: 'center', borderRadius: 20, marginTop: 20 },
    continueText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default PasswordScreen;
