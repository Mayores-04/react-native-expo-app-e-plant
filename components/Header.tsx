import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.container}>
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
    <Text style={styles.buttonText}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "gray",
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
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
