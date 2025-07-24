import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(home-tabs)/home";
import MessengerScreen from "../(home-tabs)/Messenger";
import Profile from "../(home-tabs)/profile";
import { Ionicons } from "@expo/vector-icons";
import MenuBar from "@/components/menuBar";
import Cart from "../(cart-tabs)/cart";
import Purchase from "../(cart-tabs)/purchase";

const Tab = createBottomTabNavigator();

const CartNavigator = () => {
  return (
    <>
      <MenuBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === "Cart") {
              iconName = "cart-outline";
            } else if (route.name === "Purchase") {
              iconName = "bag-outline";
            } else {
              iconName = "ellipse-outline";
            }

            return (
              <Ionicons
                name={iconName as keyof typeof Ionicons.glyphMap}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Purchase" component={Purchase} />
      </Tab.Navigator>
    </>
  );
};

export default CartNavigator;
