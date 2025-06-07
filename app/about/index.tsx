import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";

const About = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>About Page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  Header: {
    backgroundColor: "gray",

    display: "flex",
    flexDirection: "row",
  },
  Link: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
    padding: 15,
    borderRadius: 20,
  },
});
