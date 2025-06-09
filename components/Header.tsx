import {
  Pressable,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { router, usePathname } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import { Colors } from "../constants/Color";
import { useState } from "react";
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";

export default function Header() {
  const { theme } = useTheme();
  const color = Colors[theme];
  const pathname = usePathname();

  const pathItems = [
    { path: "home", label: "Home" },
    { path: "profile", label: "Profile" },
    { path: "accountSetting", label: "Account Setting" },
    { path: "cart", label: "Cart" },
    { path: "purchase", label: "Purchase" },
    { path: "helpCenter", label: "Help Center" },
    { path: "contactUs", label: "Contact Us" },
    { path: "messenger", label: "Messenger" },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  if (pathname.startsWith("/auth")) return null;

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const currentPath = pathname.slice(1);
  const pageTitle =
    pathname === "/home"
      ? "E-Plants"
      : pathItems.find((item) => item.path === currentPath)?.label ||
        currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  return (
    <>
      <ThemedView
        style={[styles.container, { backgroundColor: color.navBackground }]}
      >
        <Pressable onPress={toggleDrawer}>
          <ThemedText title={true} style={{ fontSize: 26, fontWeight: 900  }}>
            ☰
          </ThemedText>
        </Pressable>
        <ThemedText title={true} style={{ fontSize: 26, fontWeight: 700 }}>
          {pageTitle}
        </ThemedText>
      </ThemedView>

      {isDrawerOpen && (
        <ThemedView style={StyleSheet.absoluteFill}>
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <ThemedView style={styles.drawer}>
            {pathItems.map((item, i) => {
              const isActive = pathname === `/${item.path}`;
              return (
                <Pressable
                  key={i}
                  style={[
                    styles.drawerItem,
                    isActive && styles.activeDrawerItem,
                  ]}
                  onPress={() => {
                    closeDrawer();
                    router.push(`/${item.path}`);
                  }}
                >
                  <ThemedText style={styles.drawerText}>
                    {item.label}
                  </ThemedText>
                </Pressable>
              );
            })}

            <Pressable
              style={[styles.drawerItem]}
              onPress={() => {
                closeDrawer();
                router.push("/auth/login");
              }}
            >
              <ThemedText style={styles.drawerText}>Logout</ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    paddingTop: 55,
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
    top: 108,
    bottom: 0,
    left: 0,
    width: 250,
    backgroundColor: "#C5C5C5",
    paddingVertical: 20,
    paddingHorizontal: 0,
    elevation: 10,
    zIndex: 1001,
    flexDirection: "column",
  },
  drawerItem: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#2C2C2C",
    marginBottom: 10,
  },
  drawerText: {
    fontSize: 14,
    color: "#fff",
  },
  activeDrawerItem: {
    backgroundColor: "#5D5D5D",
  },
});
