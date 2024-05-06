import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn2}>
      <Text style={[styles.hello, styles.helloLayout]}>Hello!</Text>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        style={[styles.vectorIcon, styles.helloLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.emailOrMobile]}>
        Email or Mobile Number
      </Text>
      <View style={[styles.logIn2Inner, styles.childLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={[styles.password, styles.passwordTypo]}>{`Password `}</Text>
      <View style={[styles.logIn2Child, styles.childLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
        Forget Password
      </Text>
      <Text style={[styles.exampleexamplecom]}>
        example@example.com
      </Text>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      <Text style={[styles.dontHaveAnContainer, styles.forgetPasswordTypo]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
      </Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>*************</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloLayout: {
    height: 36,
    position: "absolute",
  },
  passwordTypo: {
    width: 214,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.sans,
    fontWeight: "500",
    textAlign: "left",
    left: 30,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  childLayout: {
    height: 45,
    width: 299,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  forgetPasswordTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    height: 14,
    position: "absolute",
  },
  groupLayout: {
    width: 207,
    height: 45,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  hello: {
    left: 119,
    width: 121,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    height: 14,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMediumslateblue,
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    top: 63,
  },
  welcome: {
    top: 141,
    textAlign: "left",
    left: 30,
    height: 28,
    width: 121,
    alignItems: "center",
    display: "flex",
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  vectorIcon: {
    width: 20,
    height: 16,
    left: 30,
    top: 70,
    position: "absolute",

  },
  emailOrMobile: {
    top: 198,
    height: 20,
    width: 207,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    capitalize: "uppercase",
    

  },
  groupChild: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorAliceblue,
    height: 45,
    width: 299,
    position: "absolute",
  },
  logIn2Inner: {
    top: 224,
    left: 30,
  },
  password: {
    top: 280,
    textTransform: "capitalize",
  },
  logIn2Child: {
    top: 325,
    left: 30,
  },
  forgetPassword: {
    top: 379,
    left: 137,
    textAlign: "right",
    width: 185,
    height: 15,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    color: Color.colorMediumslateblue,
  },
  exampleexamplecom: {
    top: 210, 
    left: 43,
    textTransform: "lowercase",
    width: 219,
    height: 25,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.sans,
    color: Color.colorCornflowerblue,
    fontSize: FontSize.size_xl,
  },
  groupInner: {
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
  },
  groupView: {
    top: 426,
    left: 82,
  },
  logIn: {
    top: 430,
    left: 105,
    color: Color.colorWhite,
    width: 162,
    height: 30,
    position: "absolute",
    justifyContent: "center",
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
  },
  dontHaveAn: {
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
    color: Color.colorGray,
  },
  signUp: {
    fontWeight: "500",
    color: Color.colorMediumslateblue,
  },
  dontHaveAnContainer: {
    top: 492,
    left: 49,
    width: 273,
    height: 28,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  vectorIcon1: {
    top: 339,
    left: 284,
    width: 20,
    height: 16,
    position: "absolute",
  },
  text: {
    top: 340,
    width: 133,
    left: 40,
    textTransform: "capitalize",
  },
  logIn2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default LogIn;
