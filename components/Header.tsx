import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import { Colors } from "../constants/Color"
import ThemedText from "./ThemedText";

export default function Header() {
  const { theme } = useTheme();
  const color = Colors[theme];

  return (
    <View style={[styles.container , {backgroundColor: color.navBackground}]}>
      <NavButton label="Home" path="/" />
      <NavButton label="About" path="/about" />
      <NavButton label="Contact" path="/contact" />
    </View>
  );
}

const NavButton = ({ label, path }: { label: string; path: string }) => (
  <Pressable
    onPress={() => router.push(path)}
    style={({ pressed }) => [styles.button, pressed && styles.pressedButton]}
  >
    <ThemedText style={styles.buttonText}>{label}</ThemedText>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    paddingTop: 55,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  pressedButton: {
    backgroundColor: "#444",
  },
  buttonText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
