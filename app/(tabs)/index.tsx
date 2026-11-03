import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// useTheme NOTE: It doesn't matter if the button is declared and set up here or a component -> it should work either way
// import useTheme so we can engage with the colour theme setting and switch it with a click
import { useTheme } from "../../context/ThemeContext";
export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // apply that logic to a button or some sort of toggle -> UI Element + function call before return
  // apply colours to test bg changes
  const { colors, toggle } = useTheme();

  function handleSignIn() {
    // In a real app, you would verify the credentials here
    // For this demo, we'll just navigate to the home screen
    router.replace("/");
  }

  function handleSignUp() {
    router.push("/signup");
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <Text style={{ color: colors.text }}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 15,
    marginBottom: 20,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: "#4CD964",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
