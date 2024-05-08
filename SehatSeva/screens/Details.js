import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.details}>
      <View style={styles.detailsChild} />
      <View style={[styles.detailsItem, styles.detailsLayout]} />
      <View style={[styles.detailsInner, styles.groupChildLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.detailsChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.relation, styles.age1Clr]}>Relation</Text>
      <Text style={[styles.age, styles.ageTypo]}>age</Text>
      <Text style={[styles.text, styles.ageTypo]}>60</Text>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group-gojo.png")}
      />
      <Image
        style={styles.vector158Stroke}
        contentFit="cover"
        source={require("../assets/vector_heart.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector_question.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector_chat.png")}
      />
      <Image
        style={styles.detailsChild2}
        contentFit="cover"
        source={require("../assets/vector_chat.png")}
      />
      <Text style={[styles.fullName, styles.janeDoePosition]}>Full Name</Text>
      <Text style={[styles.janeDoe, styles.text1Typo]}>Jane Doe</Text>
      <Text style={[styles.text1, styles.text1Typo]}>30</Text>
      <Text style={[styles.problem, styles.age1Clr]}>Problem</Text>
      <Text style={[styles.age1, styles.age1Clr]}>Age</Text>
      <Text style={[styles.gender, styles.genderPosition]}>Gender</Text>
      <Text style={[styles.female, styles.genderPosition]}>female</Text>
      <Text style={[styles.loremIpsumDolor, styles.maskGroupIconLayout]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <View style={[styles.lineView, styles.detailsChildLayout]} />
      <View style={[styles.detailsChild3, styles.detailsChildLayout]} />
      <View style={[styles.detailsChild4, styles.detailsChildLayout]} />
      <View style={styles.detailsChild5} />
      <Text style={[styles.sep072024, styles.sep072024FlexBox]}>
        Sep 07, 2024
      </Text>
      <Text
        style={[styles.wed1000Am, styles.bookTypo]}
      >{`Wed, 10:00 AM `}</Text>

      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector_correct.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector_x.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector_x1.png")}
      />
      <Text style={[styles.yourAppointment, styles.sep072024FlexBox]}>
        Your appointment
      </Text>
      <View style={[styles.heading, styles.headingLayout]}>
      <TouchableOpacity onPress={() => navigation.navigate('AppointmentSuccessful')}>
        <View style={[styles.headingChild, styles.headingLayout]} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.book, styles.headingLayout]}>Book</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition1: {
    top: 15,
    height: 14,
  },
  detailsLayout: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  groupChildLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 21,
    top: 101,
    borderRadius: Border.br_smi,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  age1Clr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  ageTypo: {
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
  },
  maskGroupIconLayout: {
    height: 69,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    height: 10,
    position: "absolute",
  },
  janeDoePosition: {
    top: 274,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "right",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
  },
  genderPosition: {
    top: 316,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  detailsChildLayout: {
    height: 1,
    width: 293,
    borderTopWidth: 1,
    borderColor: Color.colorMediumslateblue,
    borderStyle: "solid",
    left: 32,
    position: "absolute",
  },
  sep072024FlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  bookTypo: {
    fontFamily: FontFamily.leagueSpartanRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  vectorIconLayout: {
    height: 26,
    width: 26,
    top: 181,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 307,
    top: 190,
    position: "absolute",
  },
  headingLayout: {
    height: 38,
    position: "absolute",
  },
  vectorIcon: {
    left: 30,
    height: 14,
    width: 8,
    position: "absolute",
  },
  detailsChild: {
    top: 43,
    left: 29,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 296,
    height: 86,
    position: "absolute",
  },
  detailsItem: {
    width: 189,
    height: 46,
    left: 122,
    top: 52,
    position: "absolute",
  },
  detailsInner: {
    left: 289,
    top: 101,
    width: 22,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    width: 50,
    left: 122,
  },
  detailsChild1: {
    left: 179,
    width: 48,
  },
  name: {
    top: 63,
    width: 209,
    height: 17,
    color: Color.colorMediumslateblue,
    left: 138,
    position: "absolute",
  },
  relation: {
    top: 79,
    width: 214,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    left: 138,
    position: "absolute",
    height: 14,
  },
  age: {
    left: 145,
    width: 23,
    top: 107,
    fontSize: FontSize.size_xs,
    color: Color.colorMediumslateblue,
    position: "absolute",
    height: 14,
  },
  text: {
    left: 201,
    width: 24,
    top: 107,
    fontSize: FontSize.size_xs,
    color: Color.colorMediumslateblue,
    position: "absolute",
    height: 14,
  },
  maskGroupIcon: {
    left: 43,
    width: 67,
    top: 52,
  },
  vector158Stroke: {
    top: 108,
    left: 295,
    width: 11,
    height: 9,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    height: 22,
    width: 22,
    position: "absolute",
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon1: {
    top: 6,
    left: 8,
    width: 6,
  },
  rectangleParent: {
    left: 263,
    top: 101,
    width: 22,
  },
  groupIcon: {
    left: 185,
    width: 10,
    top: 107,
  },
  detailsChild2: {
    left: 129,
    width: 9,
    height: 9,
    top: 107,
    position: "absolute",
  },
  fullName: {
    left: 50,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
  },
  janeDoe: {
    left: 265,
    top: 274,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1: {
    top: 294,
    left: 297,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  problem: {
    top: 375,
    left: 50,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  age1: {
    top: 295,
    left: 50,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  gender: {
    left: 50,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
  },
  female: {
    textTransform: "capitalize",
    textAlign: "right",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 263,
    height: 15,
    width: 48,
  },
  loremIpsumDolor: {
    top: 395,
    width: 261,
    left: 50,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
  },
  lineView: {
    top: 164,
  },
  detailsChild3: {
    top: 254,
  },
  detailsChild4: {
    top: 352,
  },
  detailsChild5: {
    left: 35,
    borderRadius: Border.br_lg,
    borderWidth: 1,
    width: 154,
    height: 25,
    backgroundColor: Color.colorMediumslateblue,
    top: 181,
    borderColor: Color.colorMediumslateblue,
    borderStyle: "solid",
    position: "absolute",
  },
  sep072024: {
    top: 184,
    width: 102,
    height: 16,
    color: Color.colorWhite,
    left: 50,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  wed1000Am: {
    top: 211,
    textTransform: "uppercase",
    width: 135,
    height: 18,
    left: 50,
    fontSize: FontSize.size_xs,
    color: Color.colorMediumslateblue,
    position: "absolute",
  },
  vectorIcon2: {
    left: 262,
  },
  vectorIcon3: {
    top: 191,
    left: 269,
    width: 12,
    height: 9,
    position: "absolute",
  },
  vectorIcon4: {
    left: 298,
  },
  vectorIcon5: {
    height: 9,
    width: 8,
  },
  vectorIcon6: {
    height: 8,
    width: 9,
  },
  yourAppointment: {
    left: 72,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    textAlign: "center",
    justifyContent: "center",
    width: 235,
    textTransform: "capitalize",
    color: Color.colorMediumslateblue,
    height: 14,
    top: 15,
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
    left: 82,
    width: 195,
    height: 38,
    top: 636,
  },
  book: {
    left: 161,
    fontSize: FontSize.size_xl,
    width: 69,
    top: 640,
    fontFamily: FontFamily.leagueSpartanRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    textTransform: "capitalize",
  },
  detailsChild6: {
    top: 681,
    width: 360,
    height: 77,
    left: 0,
    position: "absolute",
  },
  details: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Details;
