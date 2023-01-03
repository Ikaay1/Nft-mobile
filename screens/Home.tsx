import React from 'react';
import {
	FlatList,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import { DefaultTheme } from '@react-navigation/native';

import AppStatusBar from '../components/AppStatusBar';
import Header from '../components/Header';
import Product from '../components/Product';
import { displayData } from '../constants/data';
import { globalStyles } from '../constants/styles';
import MicrophoneIcon from '../icons/MicrophoneIcon';
import SearchIcon from '../icons/SearchIcon';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#2A2A2E',
        flex: 1,
        paddingVertical: 23,
        paddingHorizontal: 12,
      }}
    >
      <AppStatusBar />
      <Header />
      <View style={{paddingVertical: 20}}>
        <Text
          style={{
            fontFamily: 'EpilogueBold',
            color: '#F8F8F8',
            fontSize: 18,
            textAlign: 'center',
            letterSpacing: 0.75,
          }}
        >
          Discover, collect, and sell
        </Text>
        <Text
          style={{
            fontFamily: 'EpilogueBold',
            color: '#F8F8F8',
            fontSize: 32,
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Your Digital Art
        </Text>
        <View
          style={{
            ...globalStyles.headerView,
            backgroundColor: '#333333',
            alignItems: 'center',
            borderRadius: 8,
            paddingTop: 8,
            marginTop: 25,
            paddingHorizontal: 5,
          }}
        >
          <SearchIcon />
          <TextInput
            placeholder='Search items, collections, and accounts'
            placeholderTextColor='#FCFCFC'
            style={{
              width: '90%',
              height: 40,
              color: '#FCFCFC',
              fontFamily: 'EpilogueMedium',
              textAlign: 'center',
            }}
          />
          <MicrophoneIcon />
        </View>
      </View>
      <FlatList
        data={displayData}
        renderItem={({item}) => <Product item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
