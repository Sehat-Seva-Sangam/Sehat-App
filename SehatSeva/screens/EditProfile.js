import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image, Pressable, } from "react-native";
import { FontSize, Color, FontFamily, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.editProfile}>
      <Text style={[styles.profile, styles.profilePosition]}>Profile</Text>
      <Image
        style={[styles.vectorIcon, styles.profilePosition]}
        contentFit="cover"
        // source={require("../assets/vector.png")}
      />
      <Text style={[styles.fullName, styles.emailTypo]}>Full Name</Text>
      <View style={[styles.editProfileInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.phoneNumber, styles.emailTypo]}>Phone number</Text>
      <View style={[styles.editProfileChild, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.email, styles.emailTypo]}>email</Text>
      <View style={[styles.groupView, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.dateOfBirth, styles.emailTypo]}>Date of birth</Text>
      <View style={[styles.editProfileInner1, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Pressable onTouchStart={() => navigation.navigate("Profile")}>
      <View style={[styles.editProfileItem, styles.groupChildLayout]} />
        </Pressable>
      <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
      <Text style={[styles.johndoeexamplecom, styles.johnDoeTypo]}>
        Johndoe@example.com
      </Text>
      <Text style={[styles.text, styles.textTypo]}>+123 567 89000</Text>
      <Text style={[styles.ddMm, styles.textTypo]}>DD / MM /YYY</Text>
      <Text style={styles.updateProfile}>Update</Text>
      <View style={[styles.editProfileInner2, styles.groupChild1Layout]}>
        {/* <View style={[styles.groupChild1, styles.groupChild1Layout]} /> */}
      </View>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        // source={require("../assets/vector32.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/mask-group-gojo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition: {
    height: 28,
    top: 55,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 30,
    height: 25,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupChildLayout: {
    height: 45,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  johnDoeTypo: {
    fontFamily: FontFamily.leagueSpartanRegular,
    left: 54,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  textTypo: {
    width: 144,
    fontFamily: FontFamily.leagueSpartanRegular,
    left: 54,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    height: 25,
    alignItems: "center",
    display: "flex",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupChild1Layout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  profile: {
    marginLeft: -60,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 121,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    left: "50%",
    height: 14,
    color: Color.colorMediumslateblue,
    textTransform: "capitalize",
    top: 63,
  },
  vectorIcon: {
    width: 8,
    left: 30,
    height: 14,
    top: 63,
  },
  fullName: {
    top: 245,
    width: 113,
  },
  groupChild: {
    backgroundColor: Color.colorAliceblue,
    height: 45,
    position: "absolute",
    width: 299,
  },
  editProfileInner: {
    top: 276,
    width: 299,
    height: 45,
    left: 30,
  },
  phoneNumber: {
    top: 347,
    width: 146,
  },
  editProfileChild: {
    top: 378,
    width: 299,
    height: 45,
    left: 30,
  },
  email: {
    top: 449,
    width: 101,
  },
  groupView: {
    top: 480,
    width: 299,
    height: 45,
    left: 30,
  },
  dateOfBirth: {
    top: 551,
    width: 131,
  },
  editProfileInner1: {
    top: 582,
    width: 299,
    height: 45,
    left: 30,
  },
  editProfileItem: {
    top: 688,
    left: 77,
    width: 207,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_11xl,
  },
  johnDoe: {
    top: 287,
    width: 104,
    textTransform: "capitalize",
    fontFamily: FontFamily.leagueSpartanRegular,
    left: 54,
  },
  johndoeexamplecom: {
    top: 491,
    textTransform: "lowercase",
    width: 219,
  },
  text: {
    top: 390,
    color: Color.colorBlack,
    width: 144,
  },
  ddMm: {
    top: 593,
    width: 144,
    color: Color.colorMediumslateblue,
  },
  updateProfile: {
    marginLeft: -81,
    top: 692,
    color: Color.colorWhite,
    width: 162,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    left: "50%",
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  editProfileInner2: {
    top: 59,
    left: 309,
  },
  vectorIcon1: {
    top: 64,
    left: 314,
    width: 12,
    height: 12,
    position: "absolute",
  },
  groupIcon: {
    top: 90,
    left: 126,
    width: 106,
    height: 107,
    position: "absolute",
  },
  editProfile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default EditProfile;
