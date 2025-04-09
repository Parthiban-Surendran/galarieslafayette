// import React from 'react';
// import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';

// const BackgroundBanner = ({ videoSource, imageSource, heading, subheading, buttonText, onPress }) => {
//     return (
//         <View style={styles.container}>
//             {imageSource ? (
//                 <ImageBackground source={imageSource} style={styles.backgroundMedia} resizeMode="cover">
//                     <View style={styles.overlay}>
//                         <Text style={styles.heading}>{heading}</Text>
//                         <Text style={styles.subheading}>{subheading}</Text>
//                         <TouchableOpacity style={styles.button} onPress={onPress}>
//                             <Text style={styles.buttonText}>{buttonText}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ImageBackground>
//             ) : (
//                 <Video
//                     source={videoSource}
//                     style={styles.backgroundMedia}
//                     resizeMode="cover"
//                     repeat
//                     muted
//                     playWhenInactive
//                     playInBackground
//                 >
                    
//                     </Video>
                
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 10,
//         paddingHorizontal: 20,
//     },
//     backgroundMedia: {
//         width: '100%',
//         height: 400,
//         marginHorizontal: 10,
//         borderWidth: 1,
//         borderColor: '#000',
//         overflow: 'hidden',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     overlay: {
//         backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center',
//     },
//     subheading: {
//         fontSize: 16,
//         color: '#fff',
//         textAlign: 'center',
//         marginTop: 5,
//     },
//     button: {
//         marginTop: 20,
//         backgroundColor: '#fff',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#000',
//     },
// });

// export default BackgroundBanner;



import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import useCategoryManager from '../hooks/useCategoryManager';

const BackgroundBanner = ({ videoSource, imageSource, heading, subheading, buttonText, onPress }) => {
    
    return (
        <View style={styles.container}>
            {imageSource ? (
                <ImageBackground source={imageSource} style={styles.backgroundMedia} resizeMode="cover">
                    <View style={styles.overlay}>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.subheading}>{subheading}</Text>
                        <TouchableOpacity style={styles.button} onPress={onPress}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            ) : (
                <>
                    <Video
                        source={videoSource}
                        style={styles.backgroundMedia}
                        resizeMode="cover"
                        repeat
                        muted
                        playWhenInactive
                        playInBackground
                    />
                    
                    <View style={[styles.overlay,{backgroundColor:'rgba(236, 226, 226, 0.1)'}]}>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.subheading}>{subheading}</Text>
                        <TouchableOpacity style={styles.button} onPress={onPress}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 400, // Ensures video and overlay have height
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Ensures overlay can be positioned correctly
        overflow: 'hidden',
        marginLeft:20,
        marginTop:20
    },
    backgroundMedia: {
        width: '100%',
        height: '100%',
        position: 'absolute', // Keeps the video or image in the background
    },
    overlay: {
        position: 'absolute', // Ensures it appears on top
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(80, 76, 76, 0.3)', // Darkens the video for better text readability
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subheading: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default BackgroundBanner;
