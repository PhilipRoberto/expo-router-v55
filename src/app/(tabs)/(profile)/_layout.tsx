import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Profile" }}
      />
      <Stack.Screen
        name="settings"
        options={{ headerShown: true, title: "Settings" }}
      />
      <Stack.Screen
        name="edit"
        options={{ headerShown: true, title: "Edit" }}
      />
    </Stack>
  );
}
