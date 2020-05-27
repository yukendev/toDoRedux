import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import ToDoList from "./components/toDoList";
import Button from "./components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ToDoList />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
