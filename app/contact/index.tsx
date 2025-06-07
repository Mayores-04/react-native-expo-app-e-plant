import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Text>Contact Page</Text>
    </View>
  );
}

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
