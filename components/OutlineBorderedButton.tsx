import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const OutlineBorderedButton = ({
  onPress,
  buttonText,
}: {
  onPress?: () => void;
  buttonText: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        height: 56,
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
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineBorderedButton;
