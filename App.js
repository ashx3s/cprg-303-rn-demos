import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader, FlexDemo } from "./components/WeekTwoDemos";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <PageHeader />
        <FlexDemo />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
