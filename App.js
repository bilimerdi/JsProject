import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/animations/Loading.json")}
        style={{ width: 250, height: 250 }}
        autoPlay
        loop
      ></LottieView>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
