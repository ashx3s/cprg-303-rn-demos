import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleSubmit}
        placeholder="New todo"
        returnKeyType="done"
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
