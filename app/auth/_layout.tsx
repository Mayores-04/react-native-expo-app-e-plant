import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#81A48B" }}>
      <StatusBar style="light" />
      {/* <Stack screenOptions={{ headerShown: false }} /> */}
      < Slot />
    </View>
  );
}
