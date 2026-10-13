import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const onPress = (route: string) => {
    router.push({ pathname: route });
  };
  return (
    <View>
      <Text>Home Page</Text>
      {/* TODO: Compare with Link */}
      <Pressable onPress={() => onPress("/")}>
        <Text>Go to...</Text>
      </Pressable>
    </View>
  );
}
