import { ScrollView, StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";

export default function About() {
  return (
    <ThemedView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>

        <Text style={styles.text}>About Page</Text>
        <Text style={styles.text}>More content...</Text>
        <Text style={styles.text}>Even more content...</Text>
        <Text style={styles.text}>You can keep adding content here.</Text>
        <Text style={styles.text}>This will scroll if it's too long.</Text>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});
