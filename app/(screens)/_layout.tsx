import { SafeAreaView } from "react-native-safe-area-context";
import MenuBar from "@/components/menuBar";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <MenuBar/>
        <Slot />
    </SafeAreaView>
  );
}
