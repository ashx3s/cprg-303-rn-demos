import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { PageHeader, FlexDemo } from "./components/WeekTwoDemos";

export default function App() {
  return (
    <View>
      <PageHeader />
      <FlexDemo />
      <StatusBar style="auto" />
    </View>
  );
}
