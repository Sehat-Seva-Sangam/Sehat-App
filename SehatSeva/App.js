import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FirstScreen from "./screens/FirstScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Register from "./screens/Register";
import LogIn from "./screens/login";
import SignUp from "./screens/signup";
import Home from "./screens/Home";


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
          
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
