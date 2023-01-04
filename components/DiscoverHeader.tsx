import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import AppStatusBar from './AppStatusBar';
import Header from './Header';

const DiscoverHeader = () => {
  return (
    <>
      <View style={{paddingTop: 23, paddingHorizontal: 12}}>
        <AppStatusBar />
        <Header />
      </View>

      <View style={{paddingTop: 25, paddingHorizontal: 12}}>
        <Text
          style={{
            fontFamily: 'EpilogueBold',
            fontSize: 20,
            textAlign: 'center',
            color: '#FCFCFC',
          }}
        >
          Discover creator
        </Text>
        <Text
          style={{
            fontFamily: 'EpilogueRegular',
            fontSize: 16,
            lineHeight: 22,
            textAlign: 'center',
            color: '#F8F8F8',
            width: 231,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 10,
          }}
        >
          Follow at least five creators to build your feed…
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <LinearGradient
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              width: 170,
              height: 42,
              marginRight: 10,
            }}
            colors={['#0038F5', '#9F03FF']}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'EpilogueRegular',
                  fontSize: 16,
                  color: '#FCFCFC',
                }}
              >
                Feature Creator
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              width: 120,
              height: 42,
              backgroundColor: '#333333',
            }}
          >
            <Text
              style={{
                fontFamily: 'EpilogueRegular',
                fontSize: 16,
                color: '#FCFCFC',
              }}
            >
              All Creator
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DiscoverHeader;
