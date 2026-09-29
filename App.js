import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader, FlexDemo } from "./components/WeekTwoDemos";
import { TodoList } from "./components/TodoList";
import { PressableDemo } from "./components/PressableDemo";
import { todoItems } from "./assets/demo-data/todoItems";
import { StateDemo } from "./components/StateDemo";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <PageHeader />
          <StateDemo />
          <FlexDemo />
          <TodoList list={todoItems} />
          <PressableDemo />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
