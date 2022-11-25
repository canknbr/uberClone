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

const HomeMap = () => {
  const getImage = car => {
    if (car.type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (car.type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-UberXL.png');
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
          {cars.map(car => (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}
            >
              <Image
                source={getImage(car)}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'contain',
                  transform: [
                    {
                      rotate: `${car.heading}deg`,
                    },
                  ],
                }}
              />
            </Marker>
          ))}
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
export default HomeMap;
