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
import ToggleThemeMode from "../components/ToggleThemeButton";
import LogoutModal from "./LogoutModal";

export default function MenuBar() {
  const pathname = usePathname();

  const { theme } = useTheme();
  const color = Colors[theme];

  const pathItems = [
    { path: "home", label: "Home" },
    { path: "profile", label: "Profile" },
    { path: "accountSetting", label: "Account Setting" },
    { path: "cart", label: "Cart" },
    { path: "purchase", label: "Purchase" },
    { path: "helpCenter", label: "Help Center" },
    { path: "contactUs", label: "Contact Us" },
    { path: "(tabs)/Messenger", label: "Messenger" },
  ];

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const currentPath = pathname.slice(1);
  const pageTitle =
    pathname === "/home"
      ? "E-Plants"
      : pathItems.find((item) => item.path === currentPath)?.label ||
        currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.push("/auth/login");
  }
  if (pathname.startsWith("/auth")) return null;
  return (
    <>
      <View
        style={[styles.container, { backgroundColor: color.navBackground }]}
      >
        <Pressable onPress={toggleDrawer}>
          <ThemedText title={true} style={{ fontSize: 26, fontWeight: 900 }}>
            ☰
          </ThemedText>
        </Pressable>
        <ThemedText title={true} style={{ fontSize: 26, fontWeight: 700 }}>
          {pageTitle}
        </ThemedText>
      </View>

      {isDrawerOpen && (
        <ThemedView style={StyleSheet.absoluteFill}>
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <ThemedView
            style={[styles.drawer, { backgroundColor: color.drawerBackground }]}
          >
            {pathItems.map((item, i) => {
              const isActive = pathname === `/${item.path}`;
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
    paddingTop: 55,
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
    top: 108.1,
    bottom: 0,
    left: 0,
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
