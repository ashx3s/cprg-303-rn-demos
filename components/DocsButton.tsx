import { Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export function DocsButton() {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Pressable
        onPress={() => router.push("/docs")}
        style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
      </Pressable>
    </View>
  );
}
