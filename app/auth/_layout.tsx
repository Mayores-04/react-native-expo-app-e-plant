import { Slot, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ThemedView from "../../components/ThemedView";
import { useTheme } from "../../context/ThemeContext";

export default function AuthLayout() {
  const { theme } = useTheme();  

  return (
    <ThemedView style={{ flex: 1 }}>      
    <StatusBar style={theme === "dark" ? "light" : "dark"} />
    
      <Slot/>
    </ThemedView>
  );
}
