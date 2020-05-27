import React from "react";
import { View, Text, Stylesheet, StyleSheet } from "react-native";

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>+</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#8fbc8f",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "absolute",
    bottom: 40,
    right: 40,
  },
  buttonText: {
    fontSize: 45,
    lineHeight: 50,
  },
});
