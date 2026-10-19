import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function WeekDetailScreen() {
  interface Project {
    id: number;
    topic: string;
  }
  interface Todo {
    id: number;
    title: string;
    description: string;
  }
  const { id } = useLocalSearchParams();
  const projects = require("../../../data/projects.json");
  const todos = require("../../../data/todos.json");
  const project = projects.find(
    (project: Project) => project.id === Number(id),
  );

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Project not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Project {project.id}: {project.topic}
      </Text>
      <Text style={styles.content}>Todos:</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text style={styles.todoDescription}>{item.description}</Text>
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  todoItem: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  todoDescription: {
    fontSize: 14,
    color: "#666",
  },
});
