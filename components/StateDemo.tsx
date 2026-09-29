import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export function StateDemo() {
  const [userMessage, setUserMessage] = useState("Default Text");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  // Both calls read the same `count` from this render, so this adds 1, not 2.
  function addTwoBroken() {
    setCount(count + 1);
    setCount(count + 1);
  }

  // Each updater receives the latest pending value, so this adds 2.
  function addTwo() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Week 4 State Demo</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Input Example</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserMessage}
          value={userMessage}
        />
        <Text>{userMessage}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Toggle Box Colour Example</Text>
        <View
          style={[styles.box, isDarkMode ? styles.darkBox : styles.lightBox]}
        >
          <Text style={isDarkMode ? styles.darkText : styles.lightText}>
            Demo
          </Text>
        </View>
        <Pressable onPress={toggleDarkMode} style={styles.button}>
          <Text style={styles.buttonText}>Toggle Box Colour</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Batching Example: {count}</Text>
        <Pressable onPress={addTwoBroken} style={styles.button}>
          <Text style={styles.buttonText}>+2 (value)</Text>
        </Pressable>
        <Pressable onPress={addTwo} style={styles.button}>
          <Text style={styles.buttonText}>+2 (updater)</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#999",
  },
  darkBox: {
    backgroundColor: "black",
  },
  lightBox: {
    backgroundColor: "white",
  },
  darkText: {
    color: "white",
  },
  lightText: {
    color: "black",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
  },
});
