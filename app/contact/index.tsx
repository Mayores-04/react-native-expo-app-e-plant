import {
  StyleSheet,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

export default function Contact() {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText>Contact Page</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -13,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
