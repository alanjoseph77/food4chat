import React,{Component} from "react";
import  {
    View,
    StyleSheet,ImageBackground,Image,TextInput,Text,TouchableHighlight
}
    from "react-native";
    
    
    import Index from "./index";



    export default class Splash extends Component{
        // componentDidMount(){
        //     SplashScreen.hide();
            
        // }
        
        render(){
            
              
            return(
                <View style={styles.container}>
                    <Image source={require('../../assets/food2door.png')}
                   style={styles.image}></Image>
                   <Text style={styles.Text}>WELCOME TO FOOD DELIVERY</Text>
                </View>
            )
        }
    }

    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            // height:"100%",
            // width:"100%"

        },
        image:{
            height:100,
            width:100,
            paddingLeft:30
        },
        Text:{
            color:"green",
            fontSize:20,
            fontWeight:'bold',
            marginTop:180
        }
    })