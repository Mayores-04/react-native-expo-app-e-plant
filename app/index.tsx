import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Text>Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
});
