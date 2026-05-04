import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
