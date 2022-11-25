import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const apikey = 'AIzaSyD-33RU3BAgyKnGAI9Jc-gJRSCZvKHsTOs';
  const getImage = car => {
    if (car.type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (car.type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-UberXL.png');
  };
  const origin = {
    latitude: 39.9252913,
    longitude: 32.8373497,
  };
  const destination = {
    latitude: 39.9390623,
    longitude: 32.8512398,
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          zoomControlEnabled={true}
          zoomTapEnabled={true}
          style={styles.map}
          initialRegion={{
            latitude: 39.9252913,
            longitude: 32.8373497,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={apikey}
            strokeWidth={3}
            strokeColor="green"
          />
            <Marker
                coordinate={origin}
                title={'Origin'}
                description={'Origin'}
            />
            <Marker
                coordinate={destination}
                title={'Destination'}
                description={'Destination'}
            />
        </MapView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default RouteMap;
