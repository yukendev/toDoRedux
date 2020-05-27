import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoList = () => {
  return (
    <View style={styles.ToDoListContainer}>
      <View style={styles.checkBox}></View>
      <Text style={styles.listText}>ゴミ出し</Text>
      <Text style={styles.deleteButton}>+</Text>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  ToDoListContainer: {
    borderColor: "#ddd",
    borderWidth: 1,
    width: "95%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  checkBox: {
    borderColor: "#ddd",
    borderWidth: 1,
    height: 30,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  listText: {
    lineHeight: 50,
    fontSize: 20,
  },
  deleteButton: {
    position: "absolute",
    right: 20,
    fontSize: 30,
    lineHeight: 50,
  },
});
