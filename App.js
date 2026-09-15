import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { PageHeader, FlexDemo } from "./components/WeekTwoDemos";
import { TodoList } from "./components/TodoList";
const todoItems = [
  {
    id: 0,
    title: "Walk the dog",
    description: "Go around the block and through the park today.",
  },
  {
    id: 1,
    title: "Make Lunch for week",
    description: "blah blah blah blah blah, Boeuf Bourginon.",
  },
  {
    id: 2,
    title: "Practice Portuguese",
    description: "Focus on assignment that's due tomorrow.",
  },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <PageHeader />
          <FlexDemo />
          <TodoList list={todoItems} />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
