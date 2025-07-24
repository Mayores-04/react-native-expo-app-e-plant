import {
  Pressable,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { router, usePathname } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import { Colors } from "../constants/Color";
import { useState, useMemo } from "react";
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import ToggleThemeMode from "../components/ToggleThemeButton";
import LogoutModal from "./LogoutModal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MenuBar() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT = 72;
  const { theme } = useTheme();
  const color = Colors[theme];

const pathItems = [
  { path: "/(home-tabs)/home", label: "Home" },
  { path: "/(cart-tabs)/cart", label: "Cart" },
  { path: "/(screens)/helpCenter", label: "Help Center" },
  { path: "/(screens)/contactUs", label: "Contact Us" },
];


  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.push("/login");
  };

const pageTitle = () => {
  const cleaned = pathname.replace(/\([^)]+\)\//g, "/");

  if (cleaned === "/home") return "E-Plant";
  else if (cleaned === "/profile") return "Profile";
  else if (cleaned === "/Messenger") return "Messenger";
  else if (cleaned === "/cart") return "Cart";
  else if (cleaned === "/helpCenter") return "Help Center";
  else if (cleaned === "/contactUs") return "Contact Us";
  else return cleaned.split("/").pop()?.replace(/^\w/, (c) => c.toUpperCase()) || "";
};



  if (pathname.startsWith("/auth")) return null;

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: color.navBackground }]}
      >
        <Pressable onPress={toggleDrawer}>
          <ThemedText title={true} style={{ fontSize: 26, fontWeight: "900" }}>
            ☰
          </ThemedText>
        </Pressable>
        <ThemedText title={true} style={{ fontSize: 26, fontWeight: "700" }}>
          {pageTitle()}
        </ThemedText>
      </View>

      {isDrawerOpen && (
        <ThemedView style={StyleSheet.absoluteFill}>
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <ThemedView
            style={[
              styles.drawer,
              {
                backgroundColor: color.drawerBackground,
                top: insets.top + HEADER_HEIGHT,
              },
            ]}
          >
            {pathItems.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <Pressable
                  key={i}
                  style={[
                    styles.drawerItem,
                    {
                      backgroundColor: isActive
                        ? color.activeDrawerItem
                        : color.drawerItemsBG,
                    },
                  ]}
                  onPress={() => {
                    closeDrawer();
                    router.push(item.path);
                  }}
                >
                  <ThemedText style={styles.drawerText}>
                    {item.label}
                  </ThemedText>
                </Pressable>
              );
            })}

            <Pressable
              style={[
                styles.drawerItem,
                { backgroundColor: color.drawerItemsBG },
              ]}
              onPress={() => {
                closeDrawer();
                setShowLogoutModal(true);
              }}
            >
              <ThemedText style={styles.drawerText}>Logout</ThemedText>
            </Pressable>

            <ToggleThemeMode />
          </ThemedView>
        </ThemedView>
      )}

      <LogoutModal
        visible={showLogoutModal}
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  drawer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 0,
    elevation: 10,
    zIndex: 1001,
    flexDirection: "column",
  },
  drawerItem: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  drawerText: {
    fontSize: 14,
    color: "#fff",
  },
});
