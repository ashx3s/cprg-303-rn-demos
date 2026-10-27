import {
  Alert,
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Control, Controller, FieldPath, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Enter a valid email"),
    password: z.string().min(8, "At least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // attaches the error to this field
  });

type SignupFormData = z.infer<typeof signupSchema>;

// What we actually persist: the form data minus the password fields
type SavedFormData = Omit<SignupFormData, "password" | "confirmPassword">;

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
            autoCapitalize={email || secure ? "none" : "sentences"}
            autoCorrect={!(email || secure)}
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
  const router = useRouter();
  const [savedFormData, setSavedFormData] = useState<SavedFormData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
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

  // Save form data to AsyncStorage
  const saveFormData = async (data: SavedFormData) => {
    try {
      await AsyncStorage.setItem("signupFormData", JSON.stringify(data));
      setSavedFormData(data);
    } catch (error) {
      console.error("Failed to save form data:", error);
    }
  };

  // Strip the passwords out so we never display, log, or store them
  const onSubmit = async ({
    password,
    confirmPassword,
    ...safe
  }: SignupFormData) => {
    console.log("onSubmit fired", safe);
    const msg = JSON.stringify(safe, null, 2);
    if (Platform.OS === "web") {
      window.alert(msg);
    } else {
      Alert.alert("Valid", msg);
    }
    reset();
    await saveFormData(safe);
  };

  // Load form data from AsyncStorage
  const loadFormData = async () => {
    try {
      const value = await AsyncStorage.getItem("signupFormData");
      if (value !== null) {
        setSavedFormData(JSON.parse(value) as SavedFormData);
      }
    } catch (error) {
      console.error("Failed to load form data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load data when the component mounts
  useEffect(() => {
    loadFormData();
  }, []);

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
      <Field control={control} name="email" placeholder="Email" email />
      <Field control={control} name="password" placeholder="Password" secure />
      <Field
        control={control}
        name="confirmPassword"
        placeholder="Confirm Password"
        secure
      />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.backLink}>
        <Text style={styles.backLinkText}>
          Already have an account? Sign In
        </Text>
      </Pressable>

      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      ) : savedFormData ? (
        <>
          <Text style={styles.savedDataText}>Saved Data:</Text>
          <Text style={styles.savedData}>
            Name: {savedFormData.firstName} {savedFormData.lastName}
          </Text>
          <Text style={styles.savedData}>Email: {savedFormData.email}</Text>
        </>
      ) : null}
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
  errorText: { color: "red", marginBottom: 10, marginLeft: 5 },
  button: {
    backgroundColor: "#4CD964",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  backLink: { marginTop: 10, alignItems: "center" },
  backLinkText: { color: "#007AFF", fontSize: 16 },
  loadingIndicator: {
    marginTop: 20,
    alignItems: "center",
  },
  savedDataText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  savedData: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
