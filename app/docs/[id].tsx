import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const docs = [
  { id: '1', title: 'Getting Started', content: 'Welcome to the documentation!' },
  { id: '2', title: 'Installation', content: 'How to install the app' },
  { id: '3', title: 'Usage', content: 'How to use the app' }
];

export default function DocDetailScreen() {
  const { id } = useLocalSearchParams();
  const doc = docs.find((d) => d.id === id);

  if (!doc) {
    return (
      <View style={styles.container}>
        <Text>Document not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{doc.title}</Text>
      <Text style={styles.content}>{doc.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
  },
});
