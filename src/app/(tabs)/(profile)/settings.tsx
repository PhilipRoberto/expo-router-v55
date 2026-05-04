import { Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Setting = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        // name="settings"
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("/edit")}>
              <Text style={{ color: "green" }}>Edit</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text>Settings Screen on profile stack tab</Text>
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
  },
});
