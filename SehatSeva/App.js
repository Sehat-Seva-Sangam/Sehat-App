import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FirstScreen from "./screens/FirstScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import LogIn from "./screens/login";
import SignUp from "./screens/signup";
import Home from "./screens/Home";
import MessageScreen from "./screens/MessageScreen";
import Schedule from "./screens/Schedule";
import SelectFamily from "./screens/SelectFamily";
import Details from "./screens/Details";
import AppointmentSuccessful from "./screens/AppointmentSuccessful";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplashScreen(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="LogIn" component={LogIn} /> 
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          {/* <Stack.Screen name="Message" component={Message} /> */}
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="SelectFamily" component={SelectFamily} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="AppointmentSuccessful" component={AppointmentSuccessful} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
