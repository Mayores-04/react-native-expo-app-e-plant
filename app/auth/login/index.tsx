import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../../components/ThemedView";
import { router } from "expo-router";
import { Dimensions } from "react-native";

export default function LoginPage() {
  const [text, setText] = useState("");
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: 800, fontSize: 60 }}>
        E-Plants
      </Text>
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
          Login
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
            placeholder="Username"
            onChangeText={setText}
            value={text}
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
            onChangeText={setText}
            value={text}
          />
        </View>
        <Text style={{ padding: 5, color: "white" }}>Forgot password?</Text>

        <TouchableHighlight
          onPress={() => {
            Alert.alert("Login Successful", "Do you want to continue?", [
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
            <Text style={{ color: "lightgray" }}>Login</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.signuptoggle}>
          <Text style={{ padding: 5, color: "white", fontWeight: 600 }}>
            Don't have an account?
          </Text>
          <Pressable onPress={() => router.push("/auth/register")}>
            <Text style={{ color: "white", padding: 5, paddingHorizontal: 15 }}>
              sign up
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
  signuptoggle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
