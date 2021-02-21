import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import logo from './tomato.svg.png'; 
import 'react-native-gesture-handler';

// This is the home Screen that will show one button
export default function Mainscreen({ navigation }) {
  return (

    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <Text style= {styles.heading}>Oh, Odoro</Text>
      <Button
        onPress={() => navigation.navigate('Timescreen')}
        title="Timescreen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa7470',
    alignItems: 'center',
    justifyContent: 'center',
  },
logo: {
  width: '55%', 
  height: '35%',
},

heading: {
  fontSize: 50,
  fontWeight: "bold",
  color:"white"
}

});