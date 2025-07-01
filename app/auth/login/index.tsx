import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth/react-native";

import { auth } from "../../../FirebaseConfig";
import { router } from "expo-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const screenWidth = Dimensions.get("window").width;

  const handleLogin = async () => {
  console.log("Login triggered");

  router.replace("/home");
  // try {
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     email.trim(),
  //     password
  //   );

  //   console.log("User logged in:", userCredential.user.uid);

  //   Alert.alert("Success", "Logged in!", [
  //     {
  //       text: "Continue",
  //       onPress: () => router.replace("/home"),
  //     },
  //   ]);
  // } catch (error: any) {
  //   console.log("Login error:", error);
  //   let errorMessage = error.message;
  //   if (errorMessage.includes("auth/invalid-credential")) {
  //     errorMessage = "Invalid email or password.";
  //   }
  //   Alert.alert("Login Error", errorMessage);
  // }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Plants</Text>
      <View style={{ width: screenWidth * 0.8 }}>
        <Text style={styles.header}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <TouchableHighlight
          onPress={handleLogin}
          style={styles.button}
          underlayColor="#1F1F1F"
        >
          <Text style={{ color: "lightgray" }}>Log In</Text>
        </TouchableHighlight>

        <View style={styles.toggle}>
          <Text style={{ color: "white", fontWeight: "600" }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => router.push("/auth/register")}>
            <Text style={styles.link}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#81A48B",
    paddingVertical: 80,
  },
  title: {
    color: "white",
    fontWeight: "800",
    fontSize: 60,
  },
  header: {
    color: "white",
    fontSize: 20,
    marginTop: 25,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    alignSelf: "center",
    height: 40,
    width: "100%",
    padding: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  link: {
    color: "white",
    paddingLeft: 10,
    textDecorationLine: "underline",
  },
});
