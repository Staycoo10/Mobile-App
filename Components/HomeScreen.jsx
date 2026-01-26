import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [city, setCity] = useState('Moldova');

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
    padding: 20,
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
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4f8ef7',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
