import {
  Alert,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemedText from "../../../components/ThemedText";
import { router } from "expo-router";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <ThemedText style={{ color: "white", fontWeight: 800, fontSize: 60 }}>
        E-Plants
      </ThemedText>
      <View style={{ width: screenWidth * 0.8 }}>
        <Text
          style={{
            color: "white",
            fontWeight: 400,
            fontSize: 15,
            marginTop: 25,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Register
        </Text>
        <View style={{ padding: 5 }}>
          <TextInput
            style={{
              alignSelf: "center",
              height: 40,
              width: "100%",
              padding: 5,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={{ padding: 5 }}>
          <TextInput
            style={{
              alignSelf: "center",
              height: 40,
              width: "100%",
              padding: 5,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View style={{ padding: 5 }}>
          <TextInput
            style={{
              alignSelf: "center",
              height: 40,
              width: "100%",
              padding: 5,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={{ padding: 5 }}>
          <TextInput
            style={{
              alignSelf: "center",
              height: 40,
              width: "100%",
              padding: 5,
              backgroundColor: "white",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <Text style={{ padding: 5, color: "white" }}>Forgot password?</Text>

        <TouchableHighlight
          onPress={() => {
            Alert.alert("Register Successful", "Do you want to continue?", [
              {
                text: "no",
              },
              {
                text: "continue",
                onPress: () => router.push("/home"),
              },
            ]);
          }}
          accessibilityLabel="Login to your account"
          style={styles.button}
        >
          <View>
            <Text style={{ color: "lightgray" }}>Register</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.logintoggle}>
          <Text style={{ padding: 5, color: "white", fontWeight: 600 }}>
            Already have an account?
          </Text>
          <Pressable onPress={() => router.push("/auth/login")}>
            <Text style={{ color: "white", padding: 5, paddingHorizontal: 15 }}>
              Login
            </Text>
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
  button: {
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 8,
    marginTop: 20,
    margin: 5,
    borderRadius: 5,
  },
  logintoggle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
