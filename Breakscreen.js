import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// This is the home Screen that will show one button
export default function Breakscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome to the chill page </Text>
      <Text style={styles.text}> Good job staying focused for so long! </Text>
      <Text style={styles.text}>Very proud of you.</Text>
      ...
      <Button
        onPress={() => navigation.goBack()}
        color="#457fad"
        title="Go back to the Timer"
      />
      ...
      <Button
        onPress={() => navigation.navigate("Mainscreen")}
        color="#457fad"
        title="Go back to Mainscreen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa7470",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
