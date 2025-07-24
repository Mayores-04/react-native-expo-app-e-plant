import { SafeAreaView } from "react-native-safe-area-context";
import HomeNavigator from "../(navigation)/HomeNavigator";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <HomeNavigator/>
    </SafeAreaView>
  );
}
