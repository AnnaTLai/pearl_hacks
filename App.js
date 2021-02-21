import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mainscreen from "./Mainscreen";
import Timescreen from "./Timescreen";
import Breakcreen from "./Breakscreen";

const Stack = createStackNavigator();

// This is the home Screen that will show one button
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mainscreen" component={Mainscreen} />
        <Stack.Screen name="Timescreen" component={Timescreen} />
        <Stack.Screen name="Breakscreen" component={Breakcreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}