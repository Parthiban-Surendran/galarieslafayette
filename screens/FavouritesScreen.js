import React from 'react';
import {View,StyleSheet} from 'react-native';
import Header from '../components/Header';
import TopLineText from '../components/TopLineText';
import OptionCommonComponent from '../components/OptionCommonComponent';

const FavouritesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={{height:800,backgroundColor:'#fff'}}>

            <TopLineText />
            <Header />
            <OptionCommonComponent title='Favourites' extra='You might like' onBackPress={() => navigation.goBack()}/>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'100%',
        backgroundColor:'#000000'
    },
})

export default FavouritesScreen;

