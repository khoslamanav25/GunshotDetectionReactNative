import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.logo}
        source={require("../../assets/GAAD.png")}
      />
      <Text style={styles.description}>
        Active Shooter Sensor and Information from Students Transmitter
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: WP(50),
    height: HP(25),
    bottom: HP(7),
    borderRadius: 25,
  },
  description: {
    color: "black",
    fontSize: HP(2),
    textAlign: "center",
    width: WP(80),
    bottom: HP(3),
    alignSelf: "center",
  },
  buttonContainer: {
    alignItems: "center",
    top: HP(13),
  },
  registerButton: {
    backgroundColor: "#FF5349",
    width: WP(70),
    height: HP(7),
    borderRadius: 7,
    justifyContent: "center",
    shadowOffset: { width: WP(0), height: HP(0.24) },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  registerText: {
    fontSize: HP(2.13),
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  loginButton: {
    backgroundColor: "#2B2D2F",
    width: WP(69.49),
    height: HP(6.87),
    borderRadius: 7,
    justifyContent: "center",
    top: HP(3.55),
    shadowOffset: { width: WP(0), height: HP(0.24) },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  loginText: {
    fontSize: HP(2.13),
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
});

export default SplashScreen;