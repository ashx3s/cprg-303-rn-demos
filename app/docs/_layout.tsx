import { Stack } from "expo-router";
export default function DocsLayout() {
  return (
    // implement a stack for documentation
    <Stack>
      <Stack.Screen name="index" options={{ title: "Documentation Home" }} />
      <Stack.Screen name="[id]" options={{ title: "Doc" }} />
    </Stack>
  );
}
