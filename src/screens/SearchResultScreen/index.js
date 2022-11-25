import { View, Text } from 'react-native';
import React from 'react';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
const SearchResultScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 3 }}>
        <RouteMap />
      </View>
      <View style={{ flex: 2 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResultScreen;
