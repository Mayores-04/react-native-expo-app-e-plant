import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNbsqVJ8caMh_w1dIqsIU5L45E8c4hu-U",
  authDomain: "react-native-expo-e-plant.firebaseapp.com",
  projectId: "react-native-expo-e-plant",
  storageBucket: "react-native-expo-e-plant.appspot.com",
  messagingSenderId: "243552653347",
  appId: "1:243552653347:web:dc8f091d4a830253376196",
  measurementId: "G-V6F8FSPW8D",
};

// Only initialize Firebase app once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Always call initializeAuth before getAuth in React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db };
