// app/auth/register/index.tsx
import React, { useState, useEffect } from "react";
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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native";
import { auth, db } from "../../../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const screenWidth = Dimensions.get("window").width;




const handleRegister = async () => {
  console.log("Register button pressed");

  // try {
  //   if (!email || !password || !confirmPassword || !username) {
  //     Alert.alert("Error", "Please fill in all fields.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     Alert.alert("Error", "Passwords do not match.");
  //     return;
  //   }

  //   const userCredential = await createUserWithEmailAndPassword(
  //     auth,
  //     email.trim(),
  //     password
  //   );

  //   console.log("User created:", userCredential);

  //   const user = userCredential.user;

  //   await setDoc(doc(db, "users", user.uid), {
  //     email: user.email,
  //     username: username.trim(),
  //     createdAt: new Date().toISOString(),
  //   });

  //   Alert.alert("Success", "Account created!", [
  //     { text: "OK", onPress: () => router.replace("/home") },
  //   ]);
  // } catch (error: any) {
  //   console.log("Firebase register error:", error); // 👈 check console
  //   let message = error?.message || "Something went wrong.";
  //   if (message.includes("auth/email-already-in-use")) {
  //     message = "Email already in use.";
  //   }
  //   Alert.alert("Error", message);
  // }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Plants</Text>
      <View style={{ width: screenWidth * 0.8 }}>
        <Text style={styles.header}>Create Account</Text>
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
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />

        <TouchableHighlight
          onPress={handleRegister}
          style={styles.button}
          underlayColor="#1F1F1F"
        >
          <Text style={{ color: "lightgray" }}>Register</Text>
        </TouchableHighlight>

        <View style={styles.toggle}>
          <Text style={{ color: "white", fontWeight: "600" }}>
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push("/auth/login")}>
            <Text style={styles.link}>Log in</Text>
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
