import React from 'react';
import {
	Image,
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const Creator = ({
  item,
}: {
  item: {
    name: string;
    description: string;
    NoOfFollowers: string;
    profilePic: any;
    coverPhoto: any;
  };
}) => {
  return (
    <View style={{marginTop: 34, paddingHorizontal: 12}}>
      <View
        style={{
          backgroundColor: '#333333',
          borderRadius: 24,
        }}
      >
        <ImageBackground
          style={{
            width: '100%',
            height: 135,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          resizeMode='cover'
          source={item.coverPhoto}
        >
          <Image style={{marginBottom: -60}} source={item.profilePic} />
        </ImageBackground>
        <View
          style={{
            marginTop: 50 + 10,
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'EpilogueBold',
              fontSize: 24,
              textAlign: 'center',
              letterSpacing: 0.16,
              color: '#FCFCFC',
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: 'EpilogueRegular',
              fontSize: 16,
              lineHeight: 22,
              textAlign: 'center',
              color: '#F8F8F8',
              marginTop: 8,
            }}
          >
            {item.description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Text
                style={{
                  marginRight: 6,
                  fontFamily: 'EpilogueBold',
                  fontSize: 32,
                  letterSpacing: 0.16,
                  color: '#FCFCFC',
                }}
              >
                {item.NoOfFollowers}
              </Text>
              <Text
                style={{
                  fontFamily: 'EpilogueMedium',
                  fontSize: 16,
                  letterSpacing: 0.16,
                  color: '#F8F8F8',
                }}
              >
                Followers
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#222222',
                borderRadius: 8,
                width: 112,
                height: 40,
              }}
            >
              <Text
                style={{
                  fontFamily: 'EpilogueBold',
                  fontSize: 16,
                  color: '#FCFCFC',
                }}
              >
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Creator;
