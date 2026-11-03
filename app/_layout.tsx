import { Stack } from "expo-router";
// import the Theme Provider
import { ThemeProvider } from "../context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    // Wrap the root layout with the theme provider to make ThemContext globally available
    <ThemeProvider>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
