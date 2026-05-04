import { Stack } from "expo-router";

export default function RootLayout() {
  const isAuthenticated = true;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "Home",
          }}
        />
      </Stack.Protected>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(onboarding)" options={{ title: "Onboarding" }} />
      </Stack.Protected>
    </Stack>
  );
}
