import React, { useEffect } from "react";

import Index from "./src/Screens/index";
import Signup from "./src/Screens/Signup";
import Login from "./src/Screens/Login";

import Splash from "./src/Screens/Splash";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Boarding from "./src/Screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyStorage from "./src/Storage/AsyStorage";
import Onboarding from "react-native-onboarding-swiper";
import ForgetPass from "./src/Screens/ForgetPass";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash"
      component={Boarding}
      options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="Index"
      component={Index}
      options={{headerShown:false}}></Stack.Screen>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="Pass"
        component={ForgetPass}
        options={{ headerShown: true, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: true }}
      ></Stack.Screen>

<Stack.Screen
        name="SignUp"
        component={Signup}
        options={{ headerShown: false, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
