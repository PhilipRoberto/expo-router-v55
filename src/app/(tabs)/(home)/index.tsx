import { Stack, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        // name="index"
        options={{
          headerShown: false,
          title: "Home",
          headerRight: () => (
            <Button
              title="Generation"
              onPress={() => router.push("/generation")}
            />
          ),
        }}
      />
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Text onPress={() => router.push("/explore")} style={{ color: "blue" }}>
          Go to explore screen
        </Text>
        <Button title="Generation" onPress={() => router.push("/generation")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
