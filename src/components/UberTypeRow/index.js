import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const UberTypeRow = ({ type }) => {
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../../assets/images/Comfort.jpeg');
    }
    return require('../../../assets/images/UberXL.jpeg');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name="person" size={16} color="black" />
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d472" />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  time: {
    color: 'grey',
    marginTop: 5,
  },
  rightContainer: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'lightgrey',
    marginLeft: 5,
  },
});

export default UberTypeRow;
