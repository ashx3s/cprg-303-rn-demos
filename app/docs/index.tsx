import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const docs = [
  {
    id: "1",
    title: "Getting Started",
    content: "Welcome to the documentation!",
  },
  { id: "2", title: "Installation", content: "How to install the app" },
  { id: "3", title: "Usage", content: "How to use the app" },
];

export default function DocsListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={docs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/docs/${item.id}`} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
});
