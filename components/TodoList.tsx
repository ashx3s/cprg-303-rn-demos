import { View, Text, FlatList, StyleSheet } from "react-native";

export interface TodoItem {
  id: number;
  title: string;
  description?: string;
}

interface TodoListProps {
  list: TodoItem[];
}

export function TodoList({ list }: TodoListProps) {
  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
      ListHeaderComponent={<Text style={styles.listTitle}>List Title</Text>}
      ListEmptyComponent={<Text>Nothing to do yet.</Text>}
      contentContainerStyle={styles.listContainer}
    />
  );
}

function Todo({ title, description }: TodoItem) {
  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>{title}</Text>
      {description ? <Text>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
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
