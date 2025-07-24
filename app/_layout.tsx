import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Color";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemedView from "../components/ThemedView";
import "../global.css";

const LayoutContent = () => {
  const { theme } = useTheme();
  const color = Colors[theme];

  return (
    <ThemedView style={{ flex: 1 }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Slot />
    </ThemedView>
  );
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LayoutContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
