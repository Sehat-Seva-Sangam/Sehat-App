import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "./GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Text style={[styles.newAccount, styles.signUp1FlexBox]}>
        New Account
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.fullName, styles.emailTypo]}>Full name</Text>
      <Text style={[styles.password, styles.emailTypo]}>{`Password `}</Text>
      <View style={[styles.signUpInner, styles.signInnerLayout]}>
        <View style={styles.groupChild} />
      </View>
      <View style={[styles.signUpChild, styles.signInnerLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Text style={[styles.exampleexamplecom, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.groupView, styles.signInnerLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Text style={[styles.exampleexamplecom1, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.mobileNumber, styles.emailTypo]}>Mobile Number</Text>
      <View style={[styles.signUpInner1, styles.signInnerLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Text style={[styles.exampleexamplecom2, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleWrapper, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </View>
        <Text style={[styles.signUp1, styles.logInTypo]}>Sign Up</Text>
        <Text style={[styles.alreadyHaveAnContainer, styles.groupParentLayout]}>
          <Text
            style={styles.alreadyHaveAn}
          >{`already have an account? `}</Text>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </Text>
      </View>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.text}>*************</Text>
      <Text style={styles.dateOfBirth}>Date of birth</Text>
      <View style={[styles.signUpInner2, styles.signInnerLayout]}>
        <View style={styles.groupChild} />
      </View>
      <Text style={styles.ddMm}>DD / MM /YYY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1FlexBox: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
  },
  emailTypo: {
    width: 214,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 30,
    height: 30,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  signInnerLayout: {
    height: 45,
    width: 299,
    left: 30,
    position: "absolute",
  },
  exampleexamplecomTypo: {
    width: 219,
    textTransform: "lowercase",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    left: 43,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 30,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupParentLayout: {
    width: 273,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 207,
    top: 0,
    height: 45,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  newAccount: {
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 235,
    color: Color.colorMediumslateblue,
    left: 62,
    top: 63,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
  },
  vectorIcon: {
    width: 8,
    left: 30,
    height: 14,
    top: 63,
    position: "absolute",
  },
  fullName: {
    top: 113,
  },
  password: {
    top: 202,
    textTransform: "capitalize",
    width: 214,
  },
  groupChild: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorAliceblue,
    left: 0,
    top: 0,
    height: 45,
    width: 299,
    position: "absolute",
  },
  signUpInner: {
    top: 139,
  },
  signUpChild: {
    top: 228,
  },
  exampleexamplecom: {
    top: 148,
  },
  email: {
    top: 291,
  },
  groupView: {
    top: 317,
  },
  exampleexamplecom1: {
    top: 326,
  },
  mobileNumber: {
    top: 375,
  },
  signUpInner1: {
    top: 406,
  },
  exampleexamplecom2: {
    top: 415,
  },
  groupChild1: {
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    borderRadius: Border.br_11xl,
  },
  rectangleWrapper: {
    left: 33,
  },
  signUp1: {
    top:6,
    left: 56,
    color: Color.colorWhite,
    width: 162,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
  },
  alreadyHaveAn: {
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
    color: Color.colorGray,
  },
  logIn: {
    color: Color.colorMediumslateblue,
  },
  alreadyHaveAnContainer: {
    top: 50,
    fontSize: FontSize.size_xs,
    height: 28,
    left: 0,
    width: 273,
    textAlign: "center",
  },
  groupParent: {
    top: 591,
    height: 189,
    left: 43,
    width: 273,
  },
  vectorIcon1: {
    top: 242,
    left: 305,
    width: 20,
    height: 16,
    position: "absolute",
  },
  text: {
    top: 240,
    width: 133,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 18,
    textTransform: "capitalize",
    left: 62,
    position: "absolute",
  },
  dateOfBirth: {
    top: 460,
    width: 131,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 30,
    height: 30,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    position: "absolute",
  },
  signUpInner2: {
    top: 494,
  },
  ddMm: {
    top: 506,
    left: 54,
    width: 144,
    fontFamily: FontFamily.leagueSpartanRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 30,
    alignItems: "center",
    display: "flex",
    color: Color.colorMediumslateblue,
    textTransform: "capitalize",
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SignUp;
