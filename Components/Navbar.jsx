import { View, Text, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Prime Computing</Text>
      <Text style={styles.subtitle}>Your Tech Partner</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#222',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 50
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'lightgray',
    fontSize: 14,
  },
});
