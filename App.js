import * as React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "./PostScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerStyle: { backgroundColor: "#373142" },
            headerTitleStyle: { color: "#FFF" },
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: "Overview",
            headerStyle: { backgroundColor: "#373142" },
            headerTitleStyle: { color: "#FFF" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
