import { Stack, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Setting = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        // name="settings"
        options={{}}
      />
      <View style={styles.container}>
        <Text>Edit Screen from Settings Screen on profile stack tab</Text>
        <Button title="Save" onPress={() => router.dismiss()} />
      </View>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
