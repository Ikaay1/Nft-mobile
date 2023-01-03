import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

const AppStatusBar = ({...props}: any) => {
  const isFocused = useIsFocused();
  if (!isFocused) return null;
  return (
    <View>
      <StatusBar animated={true} {...props} />
    </View>
  );
};

export default AppStatusBar;
