import { Stack } from 'expo-router';

export default function DocsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Documentation' }} />
      <Stack.Screen name="[id]" options={{ title: 'Document' }} />
    </Stack>
  );
}
