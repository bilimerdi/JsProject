import { View, Text, Button } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const MainScreen = () => {
  const goToExam = () => {};
  return (
    <View>
      <Text>MainScreen</Text>
      <LottieView
        source={require("../../assets/animations/hello.json")}
        style={{ width: 250, height: 250 }}
        autoPlay
        loop
      ></LottieView>
      <Button onPress={{ goToExam }}></Button>
    </View>
  );
};

export default MainScreen;
