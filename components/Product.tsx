import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ItemInterface } from '../constants/type';
import OutlineBorderedButton from './OutlineBorderedButton';
import PlaceBidButton from './PlaceBidButton';

const Product = ({item}: {item: ItemInterface}) => {
  const navigation: any = useNavigation();
  return (
    <View style={{marginTop: 15, padding: 16}}>
      <View style={{padding: 11, backgroundColor: '#333333', borderRadius: 24}}>
        <Image style={{width: '100%', borderRadius: 24}} source={item.image} />
        <Text
          style={{
            fontFamily: 'EpilogueBold',
            fontSize: 24,
            letterSpacing: 0.16,
            color: '#FCFCFC',
            marginTop: 9,
          }}
        >
          {item.imgName}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/profilePic.png')} />
            <View>
              <Text
                style={{
                  fontFamily: 'EpilogueBold',
                  fontSize: 18,
                  letterSpacing: 0.75,
                  color: '#F8F8F8',
                  marginLeft: 3,
                }}
              >
                Pawel Czerwinski
              </Text>
              <Text
                style={{
                  fontFamily: 'EpilogueMedium',
                  fontSize: 14,
                  letterSpacing: 0.75,
                  color: '#FCFCFC',
                  marginLeft: 3,
                }}
              >
                Creator
              </Text>
            </View>
          </View>
          <Image source={require('../assets/heart.png')} />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'right',
          fontFamily: 'EpilogueBold',
          fontSize: 16,
          color: '#888888',
          marginVertical: 18,
        }}
      >
        $2,683.73
      </Text>
      <View>
        <PlaceBidButton
          onPress={() => navigation.navigate('Details', {item})}
        />
        <OutlineBorderedButton
          onPress={() => navigation.navigate('Discover')}
          buttonText='View artwork'
        />
      </View>
    </View>
  );
};

export default Product;
