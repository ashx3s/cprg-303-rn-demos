import { Alert, Pressable, View, Text, StyleSheet } from "react-native";

export function PressableDemo() {
  // 1. Simplest form: title + message, one implicit "OK" button
  const onSimplePress = () => {
    Alert.alert("Simple press", "This alert has no custom buttons.");
  };

  // 2. Press logs, long press opens a menu with several choices
  const onLogMsg = () => console.log("on press on second button");

  const onOpenMenu = () => {
    Alert.alert("Menu", "Pick an option", [
      { text: "Share", onPress: () => console.log("Share chosen") },
      { text: "Rename", onPress: () => console.log("Rename chosen") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  // 3. Confirmation: destructive action + cancel + dismiss handling
  const onConfirmDelete = () => {
    Alert.alert(
      "Delete item?",
      "This can't be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Deleted"),
        },
      ],
      {
        cancelable: true, // Android: tapping outside dismisses
        onDismiss: () => console.log("Dismissed without choosing"),
      },
    );
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onSimplePress}>
        <Text style={styles.text}>1 action: simple alert</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={onLogMsg}
        onLongPress={onOpenMenu}
      >
        <Text style={styles.text}>2 actions: press / long press</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onConfirmDelete}>
        <Text style={styles.text}>Confirm before deleting</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  button: {
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});
