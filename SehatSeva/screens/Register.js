import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.register}>
      <View style={styles.frame}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-92.png")}
          />
        </View>
        <Text
          style={styles.loremIpsumDolor}
        >{`kuch na kuch to likhna padega yaha `}</Text>
      </View>
      <View style={styles.frame2}>
        <TouchableOpacity style={[styles.frame3, styles.frameFlexBox]} onPress={() => navigation.navigate('LogIn')}>
          <View style={[styles.logInWrapper, styles.wrapperLayout]}>
            <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.frame4, styles.frameFlexBox]} onPress={() => navigation.navigate('SignUp')}>
          <View style={[styles.signUpWrapper, styles.wrapperLayout]}>
            <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: Border.br_11xl,
  },
  logInTypo: {
    height: 36,
    width: 162,
    display: "flex",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  frameChild: {
    width: 256,
    height: 256,
  },
  frame1: {
    width: 256,
    justifyContent: "center",
  },
  loremIpsumDolor: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: FontFamily.sans,
    color: "#070707",
    marginTop: 98,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  logIn: {
    color: Color.colorWhite,
  },
  logInWrapper: {
    backgroundColor: Color.colorMediumslateblue,
    paddingHorizontal: 0,
    paddingVertical: 13,
    justifyContent: "flex-end",
  },
  frame3: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  signUp: {
    color: Color.colorMediumslateblue,
  },
  signUpWrapper: {
    backgroundColor: "#cad5ff",
    justifyContent: "center",
  },
  frame4: {
    marginTop: 7,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frame2: {
    marginTop: 16,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  register: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingHorizontal: 52,
    paddingTop: 235,
    paddingBottom: 67,
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default Register;
