import { View, Text } from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 3 }}>
        <HomeMap />
      </View>
      <View style={{ flex: 2 }}>
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
