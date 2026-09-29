import { useState } from "react";
import { View } from "react-native";
import { TodoList, TodoItem } from "./TodoList";
import { AddTodo } from "./AddTodo";

const seed: TodoItem[] = [
  { id: 1, title: "Prep Week 5", description: "Navigation demo" },
  { id: 2, title: "Mark quizzes" },
];

export function TodoDemo() {
  const [todos, setTodos] = useState<TodoItem[]>(seed);

  function addTodo(title: string) {
    setTodos((prev) => [...prev, { id: Date.now(), title }]);
  }

  return (
    <View style={{ flex: 1 }}>
      <AddTodo onAdd={addTodo} />
      <TodoList list={todos} />
    </View>
  );
}
