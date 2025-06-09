import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ThemedText from "../../components/ThemedText";

export default function HomePage() {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {Array.from({ length: 30 }).map((_, i) => (
          <ThemedText key={i} style={styles.itemText}>
            Scrollable Item {i + 1}
          </ThemedText>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  scrollContent: {
    padding: 20,
  },
  itemText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
