import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppStatusBar from '../components/AppStatusBar';
import Creator from '../components/Creator';
import DiscoverHeader from '../components/DiscoverHeader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { discoverCreatorsData } from '../constants/data';

const Discover = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#2A2A2E',
        flex: 1,
      }}
    >
      <FlatList
        data={discoverCreatorsData}
        renderItem={({item}) => <Creator item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <DiscoverHeader />}
        ListFooterComponent={() => <Footer />}
      />
    </SafeAreaView>
  );
};

export default Discover;
