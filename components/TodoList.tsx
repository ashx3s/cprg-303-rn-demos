import { View, Text, StyleSheet } from "react-native";

interface Todo {
  id: number;
  title: string;
  description: string;
}
interface TodoList {
  list: Todo[];
}
export function TodoList({ list }: TodoList) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>List Title</Text>
      {list.map((todo: Todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </View>
  );
}

function Todo({ title, description }: Todo) {
  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
