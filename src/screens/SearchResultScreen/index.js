import { View, Text } from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';
const SearchResultScreen = () => {
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
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResultScreen;
