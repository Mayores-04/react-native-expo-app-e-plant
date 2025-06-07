import {
  StyleSheet,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import ThemedText from "../../components/ThemedText";

export default function Contact() {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText>Contact Page</ThemedText>
      <ToggleThemeButton />
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
