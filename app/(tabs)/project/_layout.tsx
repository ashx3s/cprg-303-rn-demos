import { Stack } from "expo-router";

export default function ProjectLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Projects", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: "Project Details", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
