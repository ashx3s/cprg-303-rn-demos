import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

interface AddTodoProps {
  onAdd: (title: string, description: string) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle) return;
    onAdd(trimmedTitle, trimmedDescription);
    setTitle("");
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.actionTitle}>Add Todo</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        onSubmitEditing={handleSubmit}
        placeholder="Description"
        returnKeyType="done"
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  actionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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
    alignItems: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
  },
});
