import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={{ fontSize: 20 }}>
        Kesha Pangit
      </ThemedText>
      <Pressable onPress={() => router.push("/about")}>
        <ThemedText>About</ThemedText>
      </Pressable>
      <Pressable onPress={() => router.push("/contact")}>
        <ThemedText>Contact</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
