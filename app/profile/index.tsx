import {
  StyleSheet,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

export default function Profile() {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText>Profile Page</ThemedText>
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
