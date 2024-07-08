import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import SplashScreen from "./src/screens/SplashScreen";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen></SplashScreen> */}
      <MainScreen></MainScreen>
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
