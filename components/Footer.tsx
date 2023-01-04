import { Divider } from 'native-base';
import React from 'react';
import { Image, Text, View } from 'react-native';

import OutlineBorderedButton from './OutlineBorderedButton';
import PlaceBidButton from './PlaceBidButton';

const Footer = () => {
  return (
    <View style={{marginTop: 80, paddingHorizontal: 12}}>
      <Image
        source={require('../assets/footerLogo.png')}
        style={{marginLeft: 'auto', marginRight: 'auto'}}
      />
      <Text
        style={{
          fontFamily: 'EpilogueExtraLight',
          fontSize: 25.7249,
          lineHeight: 34,
          textAlign: 'center',
          letterSpacing: 0.16,
          color: '#FCFCFC',
        }}
      >
        The New Creative Economy
      </Text>
      <View style={{marginTop: 30}}>
        <PlaceBidButton buttonText='Earn now' />
        <OutlineBorderedButton buttonText='Discover more' />
      </View>
      <View
        style={{
          marginTop: 80,
          backgroundColor: '#333333',
          paddingVertical: 18,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 18,
            paddingHorizontal: 11,
          }}
        >
          <View>
            {['Instagram', 'Twitter', 'Discord', 'Blog'].map((item) => (
              <Text
                style={{
                  fontFamily: 'EpilogueRegular',
                  fontSize: 16,
                  color: '#F8F8F8',
                  marginTop: 9,
                }}
                key={item}
              >
                {item}
              </Text>
            ))}
          </View>
          <View>
            {[
              'About',
              'Community Guidelines',
              'Terms of Service',
              'Privacy',
              'Careers',
              'Help',
            ].map((item) => (
              <Text
                style={{
                  fontFamily: 'EpilogueRegular',
                  fontSize: 16,
                  color: '#F8F8F8',
                  marginTop: 9,
                }}
                key={item}
              >
                {item}
              </Text>
            ))}
          </View>
        </View>
        <Divider />
        <Text
          style={{
            paddingHorizontal: 11,
            marginTop: 28,
            marginBottom: 28 - 18,
            fontFamily: 'EpilogueMedium',
            fontSize: 13,
            color: '#F0F0F0',
          }}
        >
          © 2021 Openart
        </Text>
      </View>
    </View>
  );
};

export default Footer;
