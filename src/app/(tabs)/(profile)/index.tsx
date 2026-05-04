import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        // name="index"
        options={{ headerShown: false, title: "Profile" }}
      />
      <View style={styles.container}>
        <Text>Profile screen</Text>
        <Text
          onPress={() => router.push("/settings")}
          style={{ color: "blue" }}
        >
          Go to settings screen
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
