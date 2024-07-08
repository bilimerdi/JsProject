import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { Audio } from "expo-av";

const SplashScreen = () => {
  const soundUrl = require("../../assets/sounds/SplashSound.mp3");

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundUrl);
    await sound.playAsync();
  };

  React.useEffect(() => {
    playSound();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo1.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.header}>Word</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 1,
    height: height * 0.5,
  },
  header: {
    marginTop: 20,
    color: "#3A7D44",
    fontSize: 40,
    textAlign: "center",
  },
});

export default SplashScreen;
