import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ToggleThemeMode from "../../components/ToggleThemeButton";
import { StyleSheet } from "react-native";
import React from "react";

export default function HomePage() {
  return (
    <>
      <ThemedView style={[styles.mainContainer]}>
        <ThemedText title={true} className="text-4xl">Home Page</ThemedText>
          <ThemedText className={`text-4xl`}>Tailwind?</ThemedText>
      </ThemedView>
      <ToggleThemeMode />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: -13,
    alignItems: "center",
    justifyContent: "center",
  },
});
