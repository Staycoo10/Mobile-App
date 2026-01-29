import { View, Text, StyleSheet, Image, Linking, Pressable } from 'react-native';
import Colors from '../Style/colors';
export default function DetailsScreen({ route }) {
  const { city } = route.params || {};
const callPhone = () => {
  Linking.openURL('tel:+37360000000');
};
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.transparentpng.com/thumb/apartment/apartment-icon-clipart-1.png' }} style={styles.image} />
      <Text style={styles.title}>Apartments in {city}</Text>
      <Text>Here will be listed apartments...</Text>
      <Pressable onPress={callPhone } style={{marginTop: 20, padding: 10, backgroundColor: Colors.primary, borderRadius: 5}}>
  <Text>Contact Us</Text>
</Pressable>
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
