import React,{Component} from "react";
import  {
    View,
    StyleSheet,ImageBackground,Image,TextInput,Text,TouchableHighlight
}
    from "react-native";



    export default class Index extends Component{

        // constructor(){
        //     super();
        //     this.state={
        //         name:null
        //     }
        // }
        // updateValue(username){
        //     this.setState({
        //         name:username
        //     })
        // }
        
        render(){
            return(
                <View style={styles.container}>
                    {/* <ImageBackground source={require('../assets/bg.jpeg')}
                    style={styles.bg_Image}>
                        <Image source={require('../assets/favicon.png')} style={styles.logo}></Image> */}
                        <Text style={styles.textview}>alan</Text>
                        <TextInput style={styles.inputview}
                        placeholder="USERNAME"
                        placeholderTextColor='green'
                        maxLength={10}
                        
                        
                        ></TextInput>
                        


                         <TextInput style={styles.inputview}
                        placeholder="PASSWORD"
                        placeholderTextColor='green'
                        secureTextEntry={true}></TextInput>

                        <TouchableHighlight style={styles.buttonView}
                        underlayColor='transparent'
                        onPress={()=>this.props.navigation.navigate('Splash')}>
                            <Text style={styles.Text}>LOGIN</Text>
                        </TouchableHighlight>
                        


                    {/* </ImageBackground> */}



                </View>
            )
        }
    }
    const styles=StyleSheet.create({
        container:{
            height:'100%',
        width:'100%',
        backgroundColor:'#fffff'

        },
        bg_Image:{
            height:'100%',
            width:'100%',
            alignItems:"center",
            justifyContent:'center'

        },
        logo:{
            height:100,
            width:100,
            
            
        },
        textview:{
            fontSize:20,
            fontWeight:'bold',
            marginTop:20
        },
        
        inputview:{
            height:55,
            width:'80%'
            
            ,borderWidth:1,
            borderColor:'green',
            marginTop:20,
            paddingLeft:20
            
        }, buttonView:{
            width:'60%'
            ,height:50
            ,marginTop:20,
            backgroundColor:'green',
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center'
        },
        Text:{
            fontWeight:'bold',
            color:"white"
        }
    })
