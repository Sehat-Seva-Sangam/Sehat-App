import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AppointmentSuccessful = () => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
    <View style={styles.appointmentSuccessful}>
      <Text style={styles.payment}>Payment</Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector_check.png")}
      />
      <Text style={[styles.congratulation, styles.yourNameClr]}>
        Congratulation
      </Text>
      <Text style={styles.appointmentIsBooked}>
        Appointment is booked Successfully
      </Text>
      <Text style={[styles.youHaveSuccessfully, styles.yourNameClr]}>
        You have successfully booked an appointment for
      </Text>
      <Text style={[styles.yourName, styles.yourNameClr]}>Your name</Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector_clock.png")}
        />
        <Text style={[styles.am, styles.amTypo]}>10:00 aM</Text>
        <Text style={[styles.month24Year, styles.amTypo]}>Month 24, Year</Text>
      </View>
      
      <View style={styles.appointmentSuccessfulChild} />
        
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  yourNameClr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconPosition: {
    top: 0,
    position: "absolute",
  },
  amTypo: {
    height: 15,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    top: 1,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textTransform: "capitalize",
    position: "absolute",
  },
  payment: {
    marginLeft: -113,
    top: 15,
    color: Color.colorMediumslateblue,
    width: 226,
    height: 23,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    top: 18,
    left: 30,
    width: 8,
    height: 14,
    position: "absolute",
  },
  vectorIcon1: {
    top: 110,
    left: 98,
    width: 172,
    height: 172,
    position: "absolute",
  },
  congratulation: {
    marginLeft: -131,
    top: 314,
    fontSize: 40,
    width: 270,
    height: 45,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    color: Color.colorWhite,
    left: "50%",
  },
  appointmentIsBooked: {
    marginLeft: -132,
    top: 363,
    width: 271,
    height: 34,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    left: "50%",
    position: "absolute",
  },
  youHaveSuccessfully: {
    marginLeft: -115,
    top: 473,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
    width: 238,
    height: 34,
    left: "50%",
    color: Color.colorWhite,
  },
  yourName: {
    top: 515,
    left: 74,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.leagueSpartanExtraBold,
    width: 220,
    height: 25,
  },
  vectorIcon2: {
    left: 0,
    width: 17,
    height: 19,
  },
  vectorIcon3: {
    left: 130,
    width: 18,
    height: 18,
  },
  am: {
    left: 153,
    width: 62,
  },
  month24Year: {
    left: 23,
    width: 95,
  },
  vectorParent: {
    top: 551,
    left: 76,
    width: 215,
    height: 19,
    position: "absolute",
  },
  appointmentSuccessfulChild: {
    top: 448,
    left: 51,
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 265,
    height: 152,
    position: "absolute",
  },
  appointmentSuccessful: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumslateblue,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AppointmentSuccessful;
