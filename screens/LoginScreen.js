import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation, route }) => {
    const { onClose,ScreenName } = route.params || {};
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false); // State for checkbox

    // Function to validate email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        if (!email) {
            setError('This field is required.');
        } else if (!isValidEmail(email)) {
            setError('Invalid email address.');
        } else if (!isChecked) {
            setError('Please verify you are human.');
        } else {
            setError('');
            setEmail('');
            navigation.navigate('Password',{ScreenName})
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../assets/galerieslogo.png')} style={styles.logo} />
                <TouchableOpacity style={styles.closeButton} onPress={() => { if (onClose) { setEmail(''); setIsChecked(!isChecked); onClose(); } }}>
                    <MaterialIcons name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>
                Please enter your email address to log in or create an account.
            </Text>

            <View style={[styles.inputContainer, error ? styles.inputError : {}]}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail address"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setError(''); 
                    }}
                />
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.captchaContainer}>
                <TouchableOpacity
                    onPress={() => setIsChecked(!isChecked)}
                    style={[styles.checkbox, { backgroundColor: isChecked ? '#000' : '#fff' }]}
                >
                    {isChecked ? <MaterialIcons name="check" size={18} color="white" /> : null}
                </TouchableOpacity>
                <Text style={styles.captchaText}>Verify you are human</Text>
                <Image source={require('../assets/cloudflare.png')} style={styles.cloudflare} />
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
                <Text style={styles.continueText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    closeButton: {
        alignSelf: 'flex-start',
        padding: 10,
    },
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        color: '#000',
        fontWeight: '900',
        marginBottom: 5,
        paddingBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 20,
        marginLeft: 5,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    input: {
        fontSize: 16,
        color: '#000',
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 2,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    continueButton: {
        backgroundColor: '#000',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20,
    },
    continueText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    captchaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 70,
        padding: 10,
        paddingHorizontal: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    captchaText: {
        fontSize: 14,
        color: '#666',
        flex: 1,
    },
    cloudflare: {
        width: 80,
        height: 70,
        resizeMode: 'contain',
    },
});

export default LoginScreen;
