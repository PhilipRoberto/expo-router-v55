// import { Unmatched } from "expo-router";
// export default Unmatched;

import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NotFound() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text>404 Not Found</Text>

      <Button title="Go Home" onPress={() => router.dismiss()} />
    </View>
  );
}
