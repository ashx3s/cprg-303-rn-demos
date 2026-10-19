import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpScreen() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const router = useRouter();

  function handleChange(name: keyof FormData, value: string) {
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function validateForm() {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (validateForm()) {
      // In a real app, you would send the form data to your backend here
      // For this demo, we'll just navigate to the home screen
      router.replace('/home');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Please fill in the form to create an account</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.backLink}>
        <Text style={styles.backLinkText}>Already have an account? Sign In</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#4CD964',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  backLinkText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
