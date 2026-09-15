import { View, Text, StyleSheet } from "react-native";

export function TodoList({ list }) {
  return (
    <View>
      <Text>List Title</Text>
      {list.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </View>
  );
}

function Todo({ title, description }) {
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
    marginVertical: 50,
    padding: 10,
  },
  todoTitle: {
    fontSize: 20,
  },
});
