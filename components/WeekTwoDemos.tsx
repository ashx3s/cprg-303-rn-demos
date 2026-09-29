import { StyleSheet, Text, View, Image, Button } from "react-native";

export function PageHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.imageStyle}
      />
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Hello World!</Text>
        <Text style={styles.screenSubtitle}>
          React Native is a lot like React, but there's no DOM and thus no HTML
          or CSS.
        </Text>
        <Button
          onPress={() => console.log("Message in console")}
          title="Click me"
        />
      </View>
    </View>
  );
}

export function FlexDemo() {
  return (
    // <> </> is a Fragment
    <>
      <View style={styles.boxLayout}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 40,
    backgroundColor: "#eff1f5",
    alignItems: "flex-end",
  },
  screenHeader: {
    flex: 1,
    paddingVertical: 20,
    marginTop: 60,
    gap: 12,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4c4f69",
  },
  screenSubtitle: {
    fontSize: 18,
    color: "#5c5f77",
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  boxLayout: {
    backgroundColor: "#ccd0da",
    flex: 1,
    // React Native's default flexDirection is "column"; CSS's is "row".
    // This is one area where CSS and RN styles differ.
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 20,
  },
  box: {
    backgroundColor: "#e64553",
    padding: 25,
  },
  boxText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#eff1f5",
  },
});
