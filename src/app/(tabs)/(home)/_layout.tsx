import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Home" }}
      />
      <Stack.Screen
        name="explore"
        options={{ headerShown: true, title: "Explore" }}
      />
      <Stack.Screen
        name="generation"
        options={{ headerShown: true, title: "Generation" }}
      />
    </Stack>
  );
}
