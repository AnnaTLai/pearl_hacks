import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// This is the home Screen that will show one button
export default function Timescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Timer</Text>

      <Button
        onPress={() => navigation.goBack()}
        title="Go back to Mainscreen"
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
  }

});