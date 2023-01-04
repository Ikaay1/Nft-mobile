import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const PlaceBidButton = ({
  onPress,
  marginTop,
  buttonText,
}: {
  onPress?: () => void;
  marginTop?: number;
  buttonText?: string;
}) => {
  return (
    <LinearGradient
      colors={['#0038F5', '#9F03FF']}
      style={{
        width: '100%',
        borderRadius: 8,
        height: 56,
        marginTop: marginTop,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontFamily: 'EpilogueBold',
            fontSize: 20,
            color: '#FCFCFC',
          }}
        >
          {!buttonText ? 'Place a bid' : buttonText}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default PlaceBidButton;
