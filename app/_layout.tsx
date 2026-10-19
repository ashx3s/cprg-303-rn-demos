import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="docs"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetAllowedDetents: [0.5, 1],
          sheetGrabberVisible: true,
          sheetCornerRadius: 16,
        }}
      />
    </Stack>
  );
}
