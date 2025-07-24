// (home-tabs)/_layout.tsx
import { Stack } from "expo-router";
import MenuBar from "@/components/menuBar";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNavigator from "../(navigation)/HomeNavigator";
import CartNavigator from "../(navigation)/CartNavigator";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartNavigator />
    </SafeAreaView>
  );
}
