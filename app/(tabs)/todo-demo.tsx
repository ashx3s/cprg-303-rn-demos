import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TodoList, TodoItem } from "../../components/TodoList";
import { AddTodo } from "../../components/AddTodo";
import todos from "../../data/todos.json";
const seed: TodoItem[] = todos;
export default function TodoScreen() {
  const [todos, setTodos] = useState<TodoItem[]>(seed);

  function addTodo(title: string, description: string) {
    setTodos((prev) => [...prev, { id: Date.now(), title, description }]);
  }

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo onAdd={addTodo} />
      <TodoList list={todos} onDelete={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
