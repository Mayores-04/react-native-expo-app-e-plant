import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Color";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { View } from "react-native";

const LayoutContent = () => {
  const { theme } = useTheme();  
  const colorScheme = Colors[theme]; 

  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colorScheme.navBackground },
          headerTintColor: colorScheme.title,
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <ToggleThemeButton />
            </View>
          ),
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about/index" options={{ title: "About Page" }} />
        <Stack.Screen name="contact/index" options={{ title: "Contact Page" }} />
      </Stack>
    </>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}
