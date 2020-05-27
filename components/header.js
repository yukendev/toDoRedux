import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>to Do Redux</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    height: 100,
    backgroundColor: "#8fbc8f",
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    position: "absolute",
    bottom: 20,
    fontSize: 25,
  },
});
