import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/* import icon from './assets/icon.png' */
/* const icon = require('./assets/icon.png') */

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Image 
        source={{ 
          uri: "https://elrehilete.wordpress.com/files/2009/03/12.jpg"
        }}
        style={{
          width: 215,
          height: 294,
        }}
      />
      <Text style={{ color: 'white' }}>Open up App.js to start working on your app!</Text>
      <Button 
        title="Pulsa aqui"
        color="#841584"
        onPress={() => alert('Hola')}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
