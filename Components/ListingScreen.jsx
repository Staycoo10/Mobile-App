import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { city } = route.params || {};

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.transparentpng.com/thumb/apartment/apartment-icon-clipart-1.png' }} style={styles.image} />
      <Text style={styles.title}>Apartments in {city}</Text>
      <Text>Here will be listed apartments...</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 180,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
