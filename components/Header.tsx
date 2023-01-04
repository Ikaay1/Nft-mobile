import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../constants/styles';

const Header = () => {
  const navigation: any = useNavigation();
  return (
    <View style={globalStyles.headerView}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/logo.png')} />
      </TouchableOpacity>
      <Image source={require('../assets/menu.png')} />
    </View>
  );
};

export default Header;
