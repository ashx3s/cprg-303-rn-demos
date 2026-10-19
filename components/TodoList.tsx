import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

export interface TodoItem {
  id: number;
  title: string;
  description?: string;
}

interface TodoListProps {
  list: TodoItem[];
  onDelete: (id: number) => void;
}

export function TodoList({ list, onDelete }: TodoListProps) {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} onDelete={onDelete} />}
      ListHeaderComponent={<Text style={styles.listTitle}>List Title</Text>}
      ListEmptyComponent={<Text>Nothing to do yet.</Text>}
      contentContainerStyle={styles.listContainer}
    />
  );
}

function Todo({
  id,
  title,
  description,
  onDelete,
}: TodoItem & { onDelete: (id: number) => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.todoContent}>
        <Text style={styles.todoTitle}>{title}</Text>
        {description ? <Text>{description}</Text> : null}
      </View>
      <Pressable style={styles.deleteButton} onPress={() => onDelete(id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  todoContent: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  listContainer: {
    margin: 20,
    paddingHorizontal: 20,
  },
  listTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
