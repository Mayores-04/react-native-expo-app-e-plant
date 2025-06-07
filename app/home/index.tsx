import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Header from "../../components/Header";
import ToggleThemeMode from "../../components/ToggleThemeButton";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { Text } from 'nativewind';

export default function HomePage() {
  return (
    <>
      <Header />
      <ThemedView style={[styles.container]}>
        <ThemedText title={true} className="text-4xl">Home Page</ThemedText>
          <Text className="text-white text-4xl">Tailwind?</Text>
      </ThemedView>
      <ToggleThemeMode />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
