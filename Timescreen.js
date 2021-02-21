import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Timer } from "react-native-stopwatch-timer";

// This is the home Screen that will show one button
export default function Timescreen({ navigation }) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(5000); // 20 min is 1200000
  const [resetTimer, setResetTimer] = useState(false);
  // code with reference to https://github.com/fractaltech/react-native-timer/blob/master/package.json

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Time 20 minuets from now! </Text>
      <Text style={styles.text2}> You will get a break from work :D </Text>
      {/* ----------------------------------------------------------- */}
      <Text style={styles.title}>On your mark, set, go!</Text>
      <View style={styles.sectionStyle}>
        <Timer
          totalDuration={timerDuration}
          msecs
          // Time Duration
          start={isTimerStart}
          // To start
          reset={resetTimer}
          // To reset
          options={options}
          // Options for the styling
          handleFinish={() => {
            alert("Time's up for work!!");
          }}
          // Can call a function On finish of the time
          getTime={(time) => {
            console.log(time);
          }}
        />
        <TouchableHighlight
          onPress={() => {
            setIsTimerStart(!isTimerStart);
            setResetTimer(false);
          }}
        >
          <Text style={styles.buttonText}>
            {!isTimerStart ? "Start Timing" : "Stop"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsTimerStart(false);
            setResetTimer(true);
          }}
        >
          <Text style={styles.buttonText}> Reset Timer </Text>
        </TouchableHighlight>
      </View>
      {/* ----------------------------------------------------------- */}
      <Button
        onPress={() => navigation.navigate("Breakscreen")}
        color="#457fad"
        title="work Time's up!"
      />
      ..
      <Button
        onPress={() => navigation.goBack()}
        color="#457fad"
        title="Go back to Mainscreen"
      />
      ..
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
  text2: {
    fontSize: 14,
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
