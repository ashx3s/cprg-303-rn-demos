import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
export function StateDemo() {
  const [userMessage, setUserMessage] = useState("Default Text");
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <View>
      <Text>Week 4 State Demo</Text>
      <View>
        <Text>Text Input Example</Text>
        <TextInput onChangeText={setUserMessage} value={userMessage} />
        <Text>{userMessage}</Text>
      </View>
      <View>
        <Text>Toggle Box Colour Example</Text>
        <View style={isDarkMode ? styles.lightBox : styles.darkBox}>
          <Text>Demo</Text>
        </View>
        <Pressable
          onPress={() => setIsDarkMode(!isDarkMode)}
          style={styles.buttonStyles}
        >
          Toggle Button Colour
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  darkBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    height: 100,
    width: 100,
  },
  lightBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    height: 100,
    width: 100,
  },
  buttonStyles: {
    backgroundColor: "blue",
    color: "white",
    width: 100,
  },
});
