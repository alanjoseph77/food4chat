import React ,{Component}from "react";
import { StyleSheet,View,Text,Image,TouchableOpacity,Button} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Boarding from "../Screens/Onboarding";


const AsyStorage =()=>{
    
        
    const [isFirstLaunch,setIsFirstLaunch]=React.useState(null);
    useEffect(()=>{
      AsyncStorage.getItem("alreadyLaunched").then(value=>{
        if(value==null){
          AsyncStorage.getItem('alreadyLaunched','true');
          setIsFirstLaunch(true);
        }else{
          setIsFirstLaunch(false);
        }
      }
  
      )
    },[]);
  
  
    if (isFirstLaunch==null){
      return null;
    }else if(isFirstLaunch==true){
      return(
        <Stack.Navigator>
        <Stack.Screen name="Splash"
        component={Boarding}
        options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Index"
        component={Index}
        options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
      )
    }else{
      <Index/>
    }
    }
    export default AsyStorage;



