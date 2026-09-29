import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function TodoScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>TODO Page</Text>
      <Pressable onPress={() => router.push({ pathname: "/" })}>
        <Text>Go to...</Text>
      </Pressable>
    </View>
  );
}
