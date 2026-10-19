import { View, Text, FlatList, StyleSheet } from "react-native";
import { Link } from "expo-router";

// Sample data for projects
const projects = [
  { id: "1", name: "Project 1", description: "Description for Project 1" },
  { id: "2", name: "Project 2", description: "Description for Project 2" },
  { id: "3", name: "Project 3", description: "Description for Project 3" },
];

export default function ProjectList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/project/${item.id}`} asChild>
            <View style={styles.projectItem}>
              <Text style={styles.projectName}>{item.name}</Text>
              <Text style={styles.projectDescription}>{item.description}</Text>
            </View>
          </Link>
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
    textAlign: "center",
  },
  projectItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  projectName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: 14,
    color: "#666",
  },
});
