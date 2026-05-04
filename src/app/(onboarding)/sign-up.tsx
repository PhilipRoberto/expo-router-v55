import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen = () => {
  const [signupData, setSignupData] = useState<any>(null);
  // const [email, setEmail] = useState<string>("");
  // const [name, setName] = useState<string>("");

  async function hitApi() {
    const response = await fetch("/api/hello");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    setSignupData(data);
  }

  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>

      <TextInput
        placeholder="Enter your email"
        // onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your name"
        // onChangeText={setName}
        style={styles.input}
      />

      <Button title="Submit" onPress={hitApi} />

      <Text>{signupData?.message}</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
