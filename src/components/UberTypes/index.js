import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import UberTypeRow from '../UberTypeRow';
import types from '../../../assets/data/types';
const UberTypes = () => {
  const onConfirm = () => {
    console.warn('Confirm');
  };
  return (
    <View>
      <FlatList
        data={types}
        renderItem={({ item }) => <UberTypeRow type={item} />}
        keyExtractor={item => item.id}
      />
      <Pressable style={styles.button} onPress={onConfirm}>
        <Text style={styles.text}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UberTypes;
