import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Entypo, Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Where to?</Text>
        <View style={styles.timeContainer}>
          <Feather name="clock" size={16} color="#000" />
          <Text style={styles.timeText}>Now</Text>
          <Entypo name="chevron-down" size={16} color="#000" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={30} color="#fff" />
        </View>
        <Text style={styles.whereText}>Lorem, ipsum dolor.</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#2b80ff' }]}>
          <Entypo name="home" size={28} color="#fff" />
        </View>
        <Text style={styles.whereText}>Lorem, ipsum dolor.</Text>
      </View>
      <View style={styles.row}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: 'transparent',
            },
          ]}
        >
          <FontAwesome name="diamond" size={30} color="orange" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text style={styles.whereText}>333 pts</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'darkgrey',
                marginRight: 5,
              }}
            >
              Rewards Hub
            </Text>
            <AntDesign name="right" size={16} color="darkgrey" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e7e7e7',
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 25,
    marginRight: 15,
  },
  whereText: {
    fontSize: 16,
    color: '#8d8d8d',
  },
});
export default HomeSearch;
