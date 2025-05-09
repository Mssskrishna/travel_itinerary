import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>C</ThemedText>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7339",
    width: 50,
    marginRight: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 900,
  },
});
export default Profile;
