import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Schedule = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.schedule}>
      <View style={styles.rectangleParent}>
      </View>
      <Text style={[styles.drOliviaTurner, styles.text6Typo]}>
        Dr. Olivia Turner, M.D.
      </Text>
      <View style={[styles.scheduleChild, styles.scheduleChildPosition]} />
      <Image
        style={styles.scheduleItem}
        contentFit="cover"
        // source={require("../assets/group-60.png")}
      />
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupChildLayout2]} />
        <View style={[styles.groupInner, styles.groupChildLayout2]} />
        <View style={[styles.rectangleView, styles.groupChildLayout2]} />
        <View style={[styles.groupChild1, styles.groupChildLayout2]} />
        <View style={[styles.groupChild2, styles.groupChildLayout2]} />
        <View style={[styles.groupChild3, styles.groupChildLayout2]} />
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        <View style={[styles.groupChild5, styles.groupChildLayout1]} />
        <View style={[styles.groupChild6, styles.groupChildLayout1]} />
        <View style={[styles.groupChild7, styles.groupChildLayout1]} />
        <View style={[styles.groupChild8, styles.groupChildLayout1]} />
        <View style={[styles.groupChild9, styles.groupChildLayout1]} />
        <View style={[styles.groupChild10, styles.groupChildLayout1]} />
        <View style={[styles.groupChild11, styles.groupChildLayout1]} />
        <View style={[styles.groupChild12, styles.groupChildLayout1]} />
      </View>
      <Text style={[styles.am, styles.amTypo]}>9:00 am</Text>
      <Text style={[styles.am1, styles.amTypo]}>11:30 am</Text>
      <Text style={[styles.pm, styles.amTypo]}>2:00 pm</Text>
      <Text style={[styles.am2, styles.mTypo]}>9:30 am</Text>
      <Text style={[styles.m, styles.mTypo]}>12:00 m</Text>
      <Text style={[styles.pm1, styles.mTypo]}>2:30 pm</Text>
      <Text style={[styles.am3, styles.m1Typo]}>10:00 am</Text>
      <Text style={[styles.m1, styles.m1Typo]}>12:30 m</Text>
      <Text style={[styles.pm2, styles.m1Typo]}>3:00 pm</Text>
      <Text style={[styles.am4, styles.am4Typo]}>19:30 am</Text>
      <Text style={[styles.pm3, styles.am4Typo]}>1:00 pm</Text>
      <Text style={[styles.pm4, styles.am4Typo]}>3:30 pm</Text>
      <Text style={[styles.am5, styles.am5Typo]}>11:00 am</Text>
      <Text style={[styles.pm5, styles.am5Typo]}>1:30 pm</Text>
      <Text style={[styles.pm6, styles.am5Typo]}>4:00 pm</Text>
      <View style={[styles.scheduleInner, styles.groupViewLayout]}>
        <View style={[styles.groupView, styles.groupViewLayout]}>
          <View style={[styles.groupChild13, styles.groupChildLayout]} />
          <View style={[styles.groupChild14, styles.text6Position]} />
          <View style={styles.groupChild15} />
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
          <Text style={[styles.text, styles.textTypo2]}>22</Text>
          <Text style={[styles.text1, styles.textTypo2]}>23</Text>
          <Text style={[styles.text2, styles.textTypo1]}>24</Text>
          <Text style={[styles.text3, styles.thuPosition]}>25</Text>
          <Text style={[styles.text4, styles.textTypo]}>26</Text>
          <Text style={[styles.text5, styles.textTypo]}>27</Text>
          <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
          <Text style={[styles.tue, styles.monTypo]}>Tue</Text>
          <Text style={[styles.wed, styles.monTypo]}>Wed</Text>
          <Text style={[styles.thu, styles.monTypo]}>thu</Text>
          <Text style={[styles.fri, styles.monTypo]}>fri</Text>
          <Text style={[styles.sat, styles.monTypo]}>sat</Text>
        </View>
      </View>
      <View style={styles.scheduleChild1} />
      <View style={[styles.scheduleChild2, styles.scheduleChildLayout]} />
      <View style={[styles.scheduleChild3, styles.scheduleChildLayout]} />
      <View style={[styles.scheduleChild4, styles.scheduleChildLayout]} />
      <Text style={[styles.patientDetails, styles.monthTypo]}>
        Patient Details
      </Text>
      <Text style={[styles.fullName, styles.yourTypo]}>Full Name</Text>
      <Text style={[styles.describeYourProblem, styles.yourTypo]}>
        Describe your problem
      </Text>
      <Text style={[styles.age, styles.yourTypo]}>Age</Text>
      <Text style={[styles.gender, styles.yourTypo]}>Gender</Text>
      <Text style={[styles.female, styles.maleTypo]}>female</Text>
      <Text style={[styles.male, styles.maleTypo]}>male</Text>
      <Text style={[styles.other, styles.maleTypo]}>Other</Text>
      <Text style={[styles.enterYourProblem, styles.confirmText]}>
        enter your Problem here...
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.scheduleChild5, styles.lineViewLayout]} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        // source={require("../assets/vector16.png")}
      />
      <Text style={[styles.month, styles.monthTypo]}>Month</Text>
      <Text style={[styles.availableTime, styles.monthTypo]}>
        Available Time
      </Text>
      <View style={[styles.scheduleInner1, styles.scheduleInnerLayout]}>
        <View style={[styles.groupChild19, styles.scheduleInnerLayout]} />
      </View>
      <View style={[styles.scheduleInner2, styles.scheduleInnerLayout]}>
        <View style={[styles.groupChild19, styles.scheduleInnerLayout]} />
      </View>
      <Text style={[styles.janeDoe, styles.text6Position]}>Jane Doe</Text>
      <Text style={[styles.text6, styles.text6Position]}>30</Text>
      <View style={[styles.heading, styles.headingLayout]}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View style={[styles.headingChild, styles.headingLayout]} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.confirm, styles.headingLayout]}>Confirm</Text>
      <View style={[styles.scheduleChild6, styles.scheduleChildPosition]} />
      <View style={styles.scheduleChild7} />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: 8,
    position: "absolute",
  },
  text6Typo: {
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  scheduleChildPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 24,
    width: 55,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 25,
    width: 56,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  amTypo: {
    height: 13,
    width: 51,
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    left: 32,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  mTypo: {
    width: 52,
    left: 91,
    height: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  m1Typo: {
    width: 54,
    left: 150,
    height: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  am4Typo: {
    left: 210,
    width: 54,
    height: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  am5Typo: {
    left: 270,
    width: 54,
    height: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupViewLayout: {
    height: 61,
    width: 284,
    position: "absolute",
  },
  groupChildLayout: {
    width: 40,
    height: 65,
    borderRadius: Border.br_lg,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text6Position: {
    left: 49,
    position: "absolute",
  },
  textTypo2: {
    height: 25,
    fontSize: FontSize.size_5xl,
    color: Color.colorLightskyblue,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 16,
    position: "absolute",
  },
  textTypo1: {
    width: 30,
    height: 25,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 16,
    position: "absolute",
  },
  thuPosition: {
    left: 152,
    color: Color.colorBlack,
  },
  textTypo: {
    width: 32,
    height: 25,
    color: Color.colorLightskyblue,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 16,
    position: "absolute",
  },
  monTypo: {
    height: 15,
    top: 40,
    width: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  scheduleChildLayout: {
    height: 18,
    top: 459,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  monthTypo: {
    color: Color.colorMediumslateblue,
    left: 38,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  yourTypo: {
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  maleTypo: {
    height: 15,
    top: 459,
    textTransform: "capitalize",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  confirmText: {
    textTransform: "capitalize",
    textAlign: "left",
  },
  lineViewLayout: {
    height: 1,
    width: 293,
    borderTopWidth: 1,
    left: 33,
    borderColor: Color.colorMediumslateblue,
    borderStyle: "solid",
    position: "absolute",
  },
  scheduleInnerLayout: {
    height: 35,
    width: 299,
    position: "absolute",
  },
  headingLayout: {
    height: 38,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 708,
    position: "absolute",
  },
  vectorIcon: {
    height: 14,
    left: 30,
    top: 16,
    width: 8,
  },
  groupChild: {
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    height: 21,
    width: 21,
    position: "absolute",
  },
  vectorIcon1: {
    top: 5,
    left: 4,
    width: 12,
    height: 11,
    position: "absolute",
  },
  rectangleParent: {
    top: 12,
    left: 316,
    height: 21,
    width: 21,
    position: "absolute",
  },
  drOliviaTurner: {
    top: 17,
    left: 58,
    width: 145,
    height: 15,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  scheduleChild: {
    top: 43,
    height: 114,
    backgroundColor: Color.colorLightsteelblue_200,
  },
  scheduleItem: {
    top: 104,
    left: 23,
    width: 314,
    height: 10,
    position: "absolute",
  },
  groupItem: {
    top: 28,
    backgroundColor: Color.colorLightsteelblue_200,
    left: 0,
  },
  groupInner: {
    left: 60,
    top: 56,
    backgroundColor: Color.colorLightsteelblue_200,
  },
  rectangleView: {
    left: 120,
    backgroundColor: Color.colorMediumslateblue,
    top: 0,
  },
  groupChild1: {
    left: 120,
    top: 56,
    backgroundColor: Color.colorLightsteelblue_200,
  },
  groupChild2: {
    left: 180,
    top: 28,
    backgroundColor: Color.colorLightsteelblue_200,
  },
  groupChild3: {
    left: 240,
    top: 28,
    backgroundColor: Color.colorLightsteelblue_200,
  },
  rectangleGroup: {
    top: 191,
    height: 80,
    width: 295,
    left: 30,
    position: "absolute",
  },
  groupChild4: {
    left: 0,
    top: 0,
  },
  groupChild5: {
    top: 56,
    left: 0,
  },
  groupChild6: {
    left: 60,
    top: 0,
  },
  groupChild7: {
    left: 60,
    top: 28,
  },
  groupChild8: {
    left: 120,
    top: 28,
  },
  groupChild9: {
    left: 180,
    top: 0,
  },
  groupChild10: {
    left: 180,
    top: 56,
  },
  groupChild11: {
    left: 240,
    top: 0,
  },
  groupChild12: {
    left: 240,
    top: 56,
  },
  am: {
    color: Color.colorCornflowerblue,
    top: 198,
  },
  am1: {
    color: Color.colorBlack,
    top: 226,
  },
  pm: {
    top: 254,
    color: Color.colorCornflowerblue,
  },
  am2: {
    color: Color.colorCornflowerblue,
    top: 198,
  },
  m: {
    top: 226,
    color: Color.colorCornflowerblue,
  },
  pm1: {
    top: 254,
    color: Color.colorBlack,
  },
  am3: {
    top: 198,
    color: Color.colorWhite,
  },
  m1: {
    top: 226,
    color: Color.colorCornflowerblue,
  },
  pm2: {
    top: 254,
    color: Color.colorBlack,
  },
  am4: {
    color: Color.colorCornflowerblue,
    top: 198,
  },
  pm3: {
    color: Color.colorBlack,
    top: 226,
  },
  pm4: {
    top: 254,
    color: Color.colorCornflowerblue,
  },
  am5: {
    color: Color.colorCornflowerblue,
    top: 198,
  },
  pm5: {
    color: Color.colorBlack,
    top: 226,
  },
  pm6: {
    top: 254,
    color: Color.colorCornflowerblue,
  },
  groupChild13: {
    left: 0,
    position: "absolute",
  },
  groupChild14: {
    width: 40,
    height: 61,
    borderRadius: Border.br_lg,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupChild15: {
    left: 99,
    width: 38,
    borderColor: Color.colorMediumslateblue,
    height: 61,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorMediumslateblue,
    top: 0,
    position: "absolute",
  },
  groupChild16: {
    left: 146,
    position: "absolute",
  },
  groupChild17: {
    left: 195,
    position: "absolute",
  },
  groupChild18: {
    left: 244,
    position: "absolute",
  },
  text: {
    left: 6,
    width: 31,
  },
  text1: {
    left: 53,
    width: 33,
  },
  text2: {
    left: 104,
    color: Color.colorWhite,
  },
  text3: {
    width: 30,
    height: 25,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 16,
    position: "absolute",
  },
  text4: {
    left: 199,
  },
  text5: {
    left: 247,
  },
  mon: {
    left: 8,
    height: 20,
    top: 37,
  },
  tue: {
    left: 56,
    color: Color.colorLightskyblue,
    height: 12,
    top: 37,
  },
  wed: {
    left: 104,
    color: Color.colorWhite,
  },
  thu: {
    left: 152,
    color: Color.colorBlack,
  },
  fri: {
    left: 202,
    color: Color.colorLightskyblue,
    height: 12,
    top: 37,
  },
  sat: {
    left: 250,
    color: Color.colorLightskyblue,
    height: 12,
    top: 37,
  },
  groupView: {
    left: 0,
    top: 0,
  },
  scheduleInner: {
    top: 79,
    left: 38,
  },
  scheduleChild1: {
    top: 524,
    height: 107,
    borderColor: Color.colorLightsteelblue_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    width: 295,
    left: 30,
    position: "absolute",
  },
  scheduleChild2: {
    width: 62,
    height: 18,
    top: 459,
    borderColor: Color.colorLightsteelblue_100,
    left: 30,
  },
  scheduleChild3: {
    left: 100,
    width: 61,
    height: 18,
    top: 459,
    // borderColor: Color.colorMediumslateblue,
    // backgroundColor: Color.colorMediumslateblue,
  },
  scheduleChild4: {
    left: 169,
    width: 62,
    height: 18,
    top: 459,
    borderColor: Color.colorLightsteelblue_100,
  },
  patientDetails: {
    top: 304,
  },
  fullName: {
    top: 322,
    left: 38,
    color: Color.colorBlack,
    textAlign: "left",
  },
  describeYourProblem: {
    top: 500,
    left: 38,
    color: Color.colorBlack,
    textAlign: "left",
  },
  age: {
    top: 379,
    left: 38,
    color: Color.colorBlack,
    textAlign: "left",
  },
  gender: {
    top: 440,
    left: 38,
    color: Color.colorBlack,
    textAlign: "left",
  },
  female: {
    left: 107,
    width: 48,
    color: Color.colorCornflowerblue,
  },
  male: {
    left: 36,
    width: 46,
    color: Color.colorCornflowerblue,
  },
  other: {
    left: 174,
    width: 50,
    color: Color.colorCornflowerblue,
  },
  enterYourProblem: {
    top: 537,
    left: 54,
    color: Color.colorGray,
    width: 239,
    height: 84,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  lineView: {
    top: 291,
  },
  scheduleChild5: {
    top: 498,
  },
  vectorIcon2: {
    top: 59,
    left: 94,
    height: 5,
  },
  month: {
    top: 56,
  },
  availableTime: {
    top: 170,
  },
  groupChild19: {
    backgroundColor: Color.colorAliceblue,
    width: 299,
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
  },
  scheduleInner1: {
    top: 338,
    left: 30,
  },
  scheduleInner2: {
    top: 396,
    left: 30,
  },
  janeDoe: {
    top: 348,
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  text6: {
    top: 408,
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  headingChild: {
    borderRadius: Border.br_81xl,
    width: 195,
    height: 38,
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
  },
  heading: {
    left: 76,
    width: 195,
    height: 38,
    top: 641,
  },
  confirm: {
    left: 140,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.leagueSpartanRegular,
    width: 670,
    top: 642,
    textTransform: "capitalize",
    textAlign: "left",
    height: 38,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
  },
  scheduleChild6: {
    top: 682,
    height: 77,
    backgroundColor: Color.colorWhite,
  },
  scheduleChild7: {
    top: 696,
    left: 11,
    borderRadius: Border.br_5xl,
    width: 337,
    height: 48,
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
  vectorIcon3: {
    left: 26,
    width: 23,
    height: 23,
  },
  vectorIcon4: {
    left: 122,
    width: 24,
    height: 21,
  },
  vectorIcon5: {
    left: 219,
    width: 19,
    height: 21,
  },
  vectorIcon6: {
    left: 311,
    width: 18,
    height: 21,
  },
  schedule: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Schedule;
