import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const GetVerified = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.getVerfied}>
      <Text style={[styles.getVerified, styles.vectorIconLayout]}>
        Get verified
      </Text>
      <Image
        style={[styles.vectorIcon, styles.getPosition]}
        contentFit="cover"
        // source={require("../assets/vector.png")}
      />
      <Text style={[styles.aadhar, styles.emailTypo]}>AADHAR*</Text>
      <Text style={[styles.nameAsPer, styles.emailTypo]}>
        Name as per AADHAR*
      </Text>
      <View style={[styles.getVerfiedInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.egSonDaughter}>Eg. Son, daughter etc</Text>
      </View>
      <Text style={[styles.exampleexamplecom, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.getVerfiedChild, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.exampleexamplecom1, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.mobileNumber, styles.enterOtpPosition]}>
        Mobile Number
      </Text>
      <Text style={[styles.enterOtp, styles.enterOtpPosition]}>Enter OTP</Text>
      <View style={[styles.groupView, styles.enterOtpPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.getVerfiedInner1, styles.enterOtpPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.text, styles.textTypo]}>+911234567890</Text>
      <Text style={[styles.text1, styles.textTypo]}>123456</Text>
      <View style={[styles.getVerfiedInner2, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} /> 
      </View>
      <Pressable onTouchStart={() => navigation.navigate("Profile")}>
      <Text style={styles.apply}>Apply</Text>
        </Pressable>
      <Text style={[styles.dateOfBirth, styles.dateOfBirthPosition]}>
        Date of birth*
      </Text>
      <View style={[styles.getVerfiedInner3, styles.dateOfBirthPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={styles.ddMm}>DD / MM /YYY</Text>
      <View style={[styles.getVerfiedInner4, styles.groupLayout]}>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.rectangleWrapper, styles.groupLayout]}>
            <View style={[styles.groupChild4, styles.groupLayout]} />
          </View>
          <Text style={styles.uploadPhotoOf}>Upload photo of aadhar</Text>
          <Image
            style={styles.exportIcon}
            contentFit="cover"
            source={require("../assets/Export.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 32,
    top: 37,
  },
  getPosition: {
    left: 30,
    position: "absolute",
  },
  emailTypo: {
    width: 214,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
  },
  groupChildLayout: {
    height: 45,
    width: 299,
  },
  groupChildPosition: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  exampleexamplecomTypo: {
    left: 43,
    width: 219,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    textTransform: "lowercase",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  enterOtpPosition: {
    left: 38,
    position: "absolute",
  },
  textTypo: {
    left: 51,
    width: 219,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    textTransform: "lowercase",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupChild2Layout: {
    width: 207,
    height: 45,
    position: "absolute",
  },
  dateOfBirthPosition: {
    left: 34,
    position: "absolute",
  },
  groupLayout: {
    height: 34,
    position: "absolute",
  },
  getVerified: {
    left: 62,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 235,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_5xl,
    height: 14,
    textTransform: "capitalize",
    top: 37,
    position: "absolute",
  },
  vectorIcon: {
    width: 8,
    height: 14,
    top: 37,
    left: 30,
  },
  aadhar: {
    top: 85,
    left: 30,
    position: "absolute",
  },
  nameAsPer: {
    top: 176,
    left: 30,
    position: "absolute",
    textTransform: "capitalize",
    width: 214,
  },
  groupChild: {
    height: 45,
    width: 299,
    position: "absolute",
  },
  getVerfiedInner: {
    top: 113,
    left: 30,
    position: "absolute",
  },
  egSonDaughter: {
    top: 10,
    left: 13,
    width: 219,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanRegular,
    textTransform: "lowercase",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleParent: {
    top: 202,
    left: 30,
    position: "absolute",
  },
  exampleexamplecom: {
    top: 122,
  },
  email: {
    top: 265,
    left: 30,
    position: "absolute",
  },
  getVerfiedChild: {
    top: 291,
    left: 30,
    position: "absolute",
  },
  exampleexamplecom1: {
    top: 300,
  },
  mobileNumber: {
    top: 439,
    width: 214,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
  },
  enterOtp: {
    top: 527,
    width: 214,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
  },
  groupView: {
    top: 465,
    height: 45,
    width: 299,
  },
  getVerfiedInner1: {
    top: 553,
    height: 45,
    width: 299,
  },
  text: {
    top: 475,
  },
  text1: {
    top: 563,
  },
  groupChild2: {
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
    borderRadius: Border.br_11xl,
  },
  getVerfiedInner2: {
    top: 681,
    left: 76,
  },
  apply: {
    top: 685,
    color: Color.colorWhite,
    width: 162,
    left: 99,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  dateOfBirth: {
    top: 350,
    width: 131,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 34,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: 25,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
  },
  getVerfiedInner3: {
    top: 376,
    height: 45,
    width: 299,
  },
  ddMm: {
    top: 385,
    left: 58,
    width: 144,
    fontFamily: FontFamily.leagueSpartanRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    color: Color.colorMediumslateblue,
    textTransform: "capitalize",
    position: "absolute",
  },
  groupChild4: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    width: 235,
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
    width: 235,
  },
  uploadPhotoOf: {
    top: 1,
    left: 36,
    width: 220,
    color: Color.colorCornflowerblue,
    textTransform: "lowercase",
    fontFamily: FontFamily.leagueSpartanRegular,
    textAlign: "left",
    fontSize: 18,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  exportIcon: {
    top: 5,
    left: 4,
    width: 32,
    height: 24,
    position: "absolute",
  },
  groupParent: {
    width: 256,
    height: 34,
    left: 0,
    top: 0,
  },
  getVerfiedInner4: {
    top: 622,
    width: 256,
    height: 34,
    left: 99,
  },
  getVerfied: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default GetVerified;
