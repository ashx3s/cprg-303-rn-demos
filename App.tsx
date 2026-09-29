import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader, FlexDemo } from "./components/WeekTwoDemos";
import { TodoDemo } from "./components/TodoDemo";
import { PressableDemo } from "./components/PressableDemo";
import { StateDemo } from "./components/StateDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <PageHeader />
          <StateDemo />
          <FlexDemo />
          <TodoDemo />
          <PressableDemo />
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { paddingBottom: 24 },
});
