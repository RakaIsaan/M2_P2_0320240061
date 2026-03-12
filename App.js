import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.red}></View>
      <View style={styles.blue}></View>
      <View style={styles.green}></View>
      <View style={styles.orange}></View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'top',
    flexDirection: 'row'
  },

  red : {
    backgroundColor: 'red',
    width: 100,
    height: 40
  },
  
  blue : {
    backgroundColor: 'blue',
    width: 100,
    height: 65
  },

  green : {
    backgroundColor: 'green',
    width: 100,
    height: 95
  },

  orange : {
    backgroundColor: 'orange',
    width: 100,
    height: 150
  }

});
