import { View, Text, StyleSheet, TextInput, Pressable, AppState } from 'react-native';
import { useState, useEffect } from 'react';
import Colors from '../Style/colors';
import Dimensions from '../Style/dimensions';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('Moldova');

  // onCreate / onDestroy
  useEffect(() => {
    console.log('onCreate / component mounted');

    return () => {
      console.log('onDestroy / component unmounted');
    };
  }, []);

  // onResume / onPause
  useEffect(() => {
    const subscription = AppState.addEventListener('change', state => {
      if (state === 'active') {
        console.log('onResume');
      } else {
        console.log('onPause');
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rent Apartments</Text>

      <TextInput
        placeholder="Enter city"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Details', { city })}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Dimensions.padding,
    marginTop: -120,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.input,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: Dimensions.padding,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
