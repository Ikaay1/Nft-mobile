import 'react-native-safe-area-context';

import { useFonts } from 'expo-font';
import { NativeBaseProvider } from 'native-base';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Details from './screens/Details';
import Discover from './screens/Discover';
import Home from './screens/Home';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  const Stack = createStackNavigator();
  const [loaded] = useFonts({
    EpilogueBold: require('./assets/epilogue/Epilogue-Bold.ttf'),
    EpilogueRegular: require('./assets/epilogue/Epilogue-Regular.ttf'),
    EpilogueMedium: require('./assets/epilogue/Epilogue-Medium.ttf'),
    EpilogueExtraLight: require('./assets/epilogue/Epilogue-ExtraLight.ttf'),
  });
  if (!loaded) return null;
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName='Home'
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='Discover' component={Discover} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
