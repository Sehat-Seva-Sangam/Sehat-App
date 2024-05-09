import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AddFamliy = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.addFamliy}>
      <Text style={styles.addMember}>Add member</Text>
      <Text style={[styles.fullName, styles.emailTypo]}>Full name*</Text>
      <Text style={[styles.relation, styles.emailTypo]}>Relation*</Text>
      <View style={[styles.addFamliyInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.egSonDaughter, styles.textTypo]}>
          Eg. Son, daughter etc
        </Text>
      </View>
      <Text style={[styles.exampleexamplecom, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <View style={[styles.addFamliyChild, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.exampleexamplecom1, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <Text style={[styles.mobileNumber, styles.emailTypo]}>Mobile Number</Text>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.exampleexamplecom2, styles.exampleexamplecomTypo]}>
        example@example.com
      </Text>
      <View style={[styles.addFamliyInner1, styles.groupChild1Layout]}>
        <Pressable onTouchStart={() => navigation.navigate('Family')}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        </Pressable>
      </View>
      <Text style={styles.add}>Add</Text>
      <Text style={[styles.dateOfBirth, styles.aadharTypo]}>
        Date of birth*
      </Text>
      <Text style={[styles.aadhar, styles.aadharTypo]}>AADHAR*</Text>
      <View style={[styles.addFamliyInner2, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <View style={[styles.addFamliyInner3, styles.groupChild3Layout]}>
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.text, styles.textTypo]}>123456789012</Text>
      </View>
      <Text style={styles.ddMm}>DD / MM /YYY</Text>
      <Text style={styles.uploadPhoto}>Upload photo</Text>
      <Image
        style={styles.exportIcon}
        contentFit="cover"
        source={require("../assets/Export.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    width: 214,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 30,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    width: 299,
    position: "absolute",
  },
  groupChildPosition: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  textTypo: {
    width: 219,
    left: 13,
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
  groupChild1Layout: {
    width: 207,
    height: 45,
    position: "absolute",
  },
  aadharTypo: {
    width: 131,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 30,
    height: 25,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupChild3Layout: {
    height: 34,
    width: 150,
    position: "absolute",
  },
  addMember: {
    top: 39,
    left: 62,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 235,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_5xl,
    textTransform: "capitalize",
    position: "absolute",
  },
  fullName: {
    top: 89,
  },
  relation: {
    top: 178,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  groupChild: {
    height: 45,
    width: 299,
    position: "absolute",
  },
  addFamliyInner: {
    top: 115,
    left: 30,
    width: 299,
  },
  egSonDaughter: {
    top: 10,
  },
  rectangleParent: {
    top: 204,
    left: 30,
    width: 299,
  },
  exampleexamplecom: {
    top: 125,
  },
  email: {
    top: 267,
  },
  addFamliyChild: {
    top: 293,
    left: 30,
    width: 299,
  },
  exampleexamplecom1: {
    top: 308,
  },
  mobileNumber: {
    top: 356,
  },
  groupView: {
    top: 382,
    left: 30,
    width: 299,
  },
  exampleexamplecom2: {
    top: 397,
  },
  groupChild1: {
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
    width: 207,
    borderRadius: Border.br_11xl,
  },
  addFamliyInner1: {
    top: 683,
    left: 76,
  },
  add: {
    top: 690,
    left: 99,
    color: Color.colorWhite,
    width: 162,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  dateOfBirth: {
    top: 438,
  },
  aadhar: {
    top: 533,
  },
  addFamliyInner2: {
    top: 470,
    left: 30,
    width: 299,
  },
  groupChild3: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  addFamliyInner3: {
    top: 621,
    left: 179,
  },
  text: {
    top: 10,
  },
  rectangleGroup: {
    top: 559,
    left: 30,
    width: 299,
  },
  ddMm: {
    top: 478,
    left: 54,
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
  uploadPhoto: {
    top: 622,
    left: 207,
    width: 111,
    color: Color.colorCornflowerblue,
    textTransform: "lowercase",
    fontFamily: FontFamily.leagueSpartanRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  exportIcon: {
    top: 626,
    left: 183,
    width: 24,
    height: 24,
    position: "absolute",
  },
  addFamliy: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default AddFamliy;
