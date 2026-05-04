import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Generation() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        // name="index"
        options={{}}
      />
      <View style={styles.container}>
        <Text>Generation screen</Text>
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
