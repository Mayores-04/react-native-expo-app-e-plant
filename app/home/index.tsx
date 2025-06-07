import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Header from "../../components/Header";
import ToggleThemeMode from "../../components/ToggleThemeButton";
import { StyleSheet } from "react-native";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <ThemedView style={[styles.container]}>
        <ThemedText title={true} className="text-4xl">Home Page</ThemedText>
          <ThemedText className={`text-4xl`}>Tailwind?</ThemedText>
      </ThemedView>
      <ToggleThemeMode />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
  },
});
