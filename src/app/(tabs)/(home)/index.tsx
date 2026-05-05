import { Stack, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  async function hitApi() {
    const response = await fetch("/api/hello");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  }
  async function hitWorldApi() {
    const response = await fetch("/api/world", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ name: "World" }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  }

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
        {/* @ts-ignore */}
        <Button title="Clear" onPress={() => router.push("/clear")} />

        <Button title="Hit API" onPress={hitApi} />
        <Button title="Hit World API" onPress={hitWorldApi} />
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
