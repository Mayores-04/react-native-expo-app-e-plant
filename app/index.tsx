import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import LoginPage from "./auth/login";

export default function Home() {
  return (
    <>
      <ThemedView style={styles.container}>
        {/* <ThemedText title={true} style={{ fontSize: 35, textAlign: "center" }}>
        E-Plant
      </ThemedText>
      <Pressable onPress={() => router.push("/about")}>
        <ThemedText style={{ textDecorationLine: "underline" }}>About</ThemedText>
      </Pressable>
      <Pressable onPress={() => router.push("/contact")}>
        <ThemedText style={{ textDecorationLine: "underline" }}>Contact</ThemedText>
      </Pressable> */}
        <LoginPage />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81A48B",
  },
});
