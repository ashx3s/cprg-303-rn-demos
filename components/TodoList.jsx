import { View, Text } from "react-native";

export function TodoList({ list }) {
  return (
    <>
      {list.map((todo) => {
        <Todo key={todo.id} {...todo} />;
      })}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
