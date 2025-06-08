import { Slot, Stack, usePathname } from "expo-router";
import ThemedView from "../../components/ThemedView";

export default function AuthLayout() {

  return (
    <ThemedView style={{ flex: 1 }}>
      <Slot/>
    </ThemedView>
  );
}
