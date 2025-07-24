import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(home-tabs)/home";
import MessengerScreen from "../(home-tabs)/Messenger";
import Profile from "../(home-tabs)/profile";
import { Ionicons } from "@expo/vector-icons";
import MenuBar from "@/components/menuBar";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <>
      <MenuBar/>
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

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            } else if (route.name === "Messenger") {
              iconName = "chatbubble-outline";
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Messenger" component={MessengerScreen} />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigator;
