import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text>Logo</Text>
      <Text>Name</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Footer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 15,
  },
});
