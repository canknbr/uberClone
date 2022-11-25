import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lorem, ipsum dolor.</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti
        architecto doloribus unde. Soluta porro nemo consequuntur placeat!
        Ratione suscipit consectetur quidem vero ipsum eum facere ut ad illum
        aspernatur?
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.learnMore}>Lorem, ipsum.</Text>
        <AntDesign name="arrowright" size={24} color="white" />
        <Ionicons
          name="warning"
          size={32}
          color="black"
          style={{ marginLeft: 'auto' }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b80ff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default CovidMessage;
