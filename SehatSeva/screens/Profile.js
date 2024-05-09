import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.profile}>
      <Text style={styles.johnDoe}>John Doe</Text>
      <Text style={[styles.profile1, styles.helpTypo]}>Profile</Text>
      <Text style={[styles.family, styles.helpTypo]}>Family</Text>
      <Text style={[styles.getVerified, styles.helpTypo]}>Get verified</Text>
      <Text style={[styles.privacyPolicy, styles.helpTypo]}>
        Privacy Policy
      </Text>
      <Text style={[styles.settings, styles.helpTypo]}>Settings</Text>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Text style={[styles.logout, styles.helpTypo]}>Logout</Text>
      <Text style={styles.myProfile}>my Profile</Text>
      
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <View style={styles.groupParent}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/group-30.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Family")}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-31.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("GetVerified")}>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        />
        </TouchableOpacity>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-33.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-34.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-35.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/group-36.png")}
        />
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/mask-group-gojo.png")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  helpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xl,
    left: 91,
    height: 28,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textTransform: "capitalize",
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 12,
    left: 321,
    width: 8,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 11,
    left: 321,
    width: 8,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
  },
  groupChildLayout: {
    height: 77,
    width: 360,
    left: 0,
    position: "absolute",
  },
  johnDoe: {
    top: 188,
    left: 120,
    width: 118,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  profile1: {
    top: 256,
    width: 88,
  },
  family: {
    top: 312,
    width: 70,
  },
  getVerified: {
    width: 152,
    top: 368,
  },
  privacyPolicy: {
    top: 424,
    width: 130,
  },
  settings: {
    top: 480,
    width: 84,
  },
  help: {
    top: 536,
    width: 51,
  },
  logout: {
    top: 592,
    width: 69,
  },
  myProfile: {
    left: 122,
    color: Color.colorMediumslateblue,
    width: 121,
    top: 38,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  vectorIcon: {
    width: 8,
    left: 30,
    top: 38,
    height: 14,
    position: "absolute",
  },
  vectorIcon1: {
    top: 258,
  },
  vectorIcon2: {
    top: 313,
  },
  vectorIcon3: {
    top: 368,
  },
  vectorIcon4: {
    top: 422,
  },
  vectorIcon5: {
    top: 476,
  },
  vectorIcon6: {
    top: 531,
  },
  frameItem: {
    marginTop: 16,
  },
  groupParent: {
    top: 252,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  profileChild: {
    top: 75,
    left: 126,
    width: 106,
    height: 107,
    position: "absolute",
  },
  groupChild: {
    top: 2,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 30,
    left: 11,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorMediumslateblue,
    width: 337,
    height: 48,
    position: "absolute",
  },
  rectangleParent: {
    top: 704,
  },
  profileItem: {
    top: 726,
    left: 26,
    width: 303,
    height: 23,
    position: "absolute",
  },
  profile: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
