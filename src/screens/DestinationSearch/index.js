import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where from"
        onPress={(data, details = null) => {
          setOriginPlace({ data, details });
        }}
        query={{
          key: 'AIzaSyD-33RU3BAgyKnGAI9Jc-gJRSCZvKHsTOs',
          language: 'en',
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Where to"
        onPress={(data, details = null) => {
          setDestinationPlace({ data, details });
        }}
        query={{
          key: 'AIzaSyD-33RU3BAgyKnGAI9Jc-gJRSCZvKHsTOs',
          language: 'en',
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
  },
  textInput: {
    backgroundColor: '#eee',
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default DestinationSearch;
