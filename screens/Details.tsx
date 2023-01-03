import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

import AppStatusBar from '../components/AppStatusBar';
import Header from '../components/Header';
import PlaceBidButton from '../components/PlaceBidButton';

const Details = ({route}: any) => {
  const {item} = route.params;
  return (
    <ScrollView>
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
        <View style={{marginTop: 50}}>
          <Image
            style={{
              width: '100%',
              borderRadius: 24,
              height: 500,
              resizeMode: 'cover',
            }}
            source={item.image}
          />
          <View style={{paddingHorizontal: 19}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: 'EpilogueBold',
                  fontSize: 24,
                  letterSpacing: 0.16,
                  color: '#FCFCFC',
                }}
              >
                {item.imgName}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#3c3c3c',
                  }}
                >
                  <Image source={require('../assets/heart.png')} />
                </View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#3c3c3c',
                    marginLeft: 12,
                    marginRight: 8,
                  }}
                >
                  <Image source={require('../assets/download.png')} />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
                backgroundColor: '#333333',
                width: 146,
                borderRadius: 52,
                padding: 5,
              }}
            >
              <Image
                style={{marginRight: 4}}
                source={require('../assets/avatar.png')}
              />
              <Text
                style={{
                  fontFamily: 'EpilogueBold',
                  fontSize: 16,
                  letterSpacing: 0.16,
                  color: '#F8F8F8',
                }}
              >
                @heisikaay
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'EpilogueMedium',
                fontSize: 13,
                color: '#F8F8F8',
                lineHeight: 20,
              }}
            >
              Together with my design team, we designed this futuristic
              Cyberyacht concept artwork. We wanted to create something that has
              not been created yet, so we started to collect ideas of how we
              imagine the Cyberyacht could look like in the future.
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#333333',
              borderRadius: 24,
              padding: 13,
              paddingBottom: 40,
            }}
          >
            <Text
              style={{
                fontFamily: 'EpilogueRegular',
                fontSize: 20,
                color: '#FCFCFC',
              }}
            >
              Reserve Price
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  marginRight: 7,
                  fontFamily: 'EpilogueBold',
                  fontSize: 24,
                  letterSpacing: 0.16,
                  color: '#FCFCFC',
                }}
              >
                1.50 ETH
              </Text>
              <Text
                style={{
                  fontFamily: 'EpilogueBold',
                  fontSize: 16,
                  color: '#F8F8F8',
                }}
              >
                $2,683.73
              </Text>
            </View>
            <Text
              style={{
                marginTop: 18,
                fontFamily: 'EpilogueRegular',
                fontSize: 16,
                lineHeight: 22,
                color: '#F8F8F8',
              }}
            >
              Once a bid has been placed and the reserve price has been met, a
              24 hour auction for this artwork will begin.
            </Text>
            <PlaceBidButton marginTop={40} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Details;
