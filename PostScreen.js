import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
      <Button
        title="Go to post page... again"
        onPress={() => navigation.push("Post")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
