import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
// declare documentation screens (mini example)
// render a screen based on the id value in the search parameters

// declare array of pages to template
const docs = [
  {
    id: "1",
    title: "Getting Started",
    content: "Welcome to the documentation!",
  },
  { id: "2", title: "Installation", content: "How to install the app" },
  { id: "3", title: "Usage", content: "How to use the app" },
];
export default function DocScreen() {
  // get the id from the query parameters
  const { id } = useLocalSearchParams();
  // check if query id is in our list of ids
  const doc = docs.find((doc) => doc.id === id);
  // if it isn't render a not found screen
  if (!doc) {
    return (
      <View style={styles.container}>
        <Text>Document not found</Text>
      </View>
    );
  }
  return (
    // if it is, render a doc screen
    <View style={styles.container}>
      <Text style={styles.title}>{doc.title}</Text>
      <Text style={styles.content}>{doc.content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
  },
});
