import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Color";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import Header from "../components/menuBar";
import ThemedView from "../components/ThemedView";
import "../global.css";

const LayoutContent = () => {
  const { theme } = useTheme();
  const color = Colors[theme];

  return (
    <ThemedView style={{ flex: 1, backgroundColor: color.background }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Header />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemedView>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}
