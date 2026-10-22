import { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Control, Controller, FieldPath, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// TODO REPLACE WITH ZOD SCHEMA
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "At least 8 characters"),
  confirmPassword: z.string(),
});

type SignupFormData = z.infer<typeof signupSchema>;

type FieldProps = {
  control: Control<SignupFormData>;
  name: FieldPath<SignupFormData>;
  placeholder: string;
  secure?: boolean;
  email?: boolean;
};

function Field({ control, name, placeholder, secure, email }: FieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secure}
            keyboardType={email ? "email-address" : "default"}
            autoCapitalize={email ? "none" : "sentences"}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    />
  );
}
export default function SignUpScreen() {
  const { control, handleSubmit, reset } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit({ password, confirmPassword, ...safe }: SignupFormData) {
    console.log("onSubmit fired", safe);
    const msg = JSON.stringify(safe, null, 2);
    if (Platform.OS === "web") {
      window.alert(msg);
    } else {
      Alert.alert("Valid", msg);
    }
    // reset form
    reset();
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Please fill in the form to create an account
      </Text>
      <Field control={control} name="firstName" placeholder="First Name" />
      <Field control={control} name="lastName" placeholder="Last Name" />
      <Field control={control} name="email" placeholder="Enter Email" email />
      <Field control={control} name="password" placeholder="Password" secure />
      <Field
        control={control}
        name="confirmPassword"
        placeholder="Confirm Password"
        secure
      />
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}> Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: 10,
    backgroundColor: "white",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#4CD964",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  backLink: {
    marginTop: 10,
    alignItems: "center",
  },
  backLinkText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
