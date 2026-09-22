import { Pressable, View, Text, StyleSheet } from "react-native";

export function PressableDemo() {
  const onLogMsg = () => console.log("on press on second button");

  const onOpenMenu = () => console.log("A long press!");

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => console.log("A simple Press")}
      >
        <Text style={styles.text}>This button has 1 action</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPressOut={onLogMsg}
        onLongPress={onOpenMenu}
      >
        <Text style={styles.text}>This button has 2 actions</Text>
      </Pressable>
    </View>
  );
}

// camelCase is used for logic and variables
// PascalCase is used for components
// SCREAMING_SNAKE_CASE is used for constants (optional)
// kebab-case is basically ignored
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
  },
  button: {
    backgroundColor: "#0f172a",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "fit-content",
  },
  text: { color: "white", fontWeight: "600", textAlign: "center" },
});
