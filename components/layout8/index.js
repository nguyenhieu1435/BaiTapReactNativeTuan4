import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React from 'react'


export default function Layout8() {
  return (
    <View style={{flex: 1, paddingHorizontal: "25px", paddingVertical: "25px"}}>
        <View style={{width: "100%", alignItems: "center", marginBottom: "25px", marginTop: "15px"}}> 
            <Image source={require("../../assets/eyeBall.svg")}
              style={{width: "141px", height: "141px"}}  
              resizeMode="contain"
            />
        </View>
        <View style={{width: "100%"}}>
            <View style={{position: "relative", marginBottom: "40px"}}>
                <Image source={require("../../assets/eyelayout8.svg")}
                    style={{width: "30px", height: "100%", position: "absolute", left: "10px"}}
                    resizeMode="contain"
                />
                <TextInput placeholder='Please input user name'
                    style={{borderBottomWidth: "1px", borderBottomColor: "#ccc"
                    , paddingLeft: "50px", paddingVertical: "10px", fontSize: "18px", color: "#c4c4c4", outline: "none"}}
                ></TextInput>
            </View>
            <View style={{position: "relative", marginBottom: "40px"}}>
                <Image source={require("../../assets/secureProfile.png")}
                    style={{width: "30px", height: "100%", position: "absolute", left: "10px"}}
                    resizeMode="contain"
                />
                <TextInput placeholder='Please input user name'
                    style={{borderBottomWidth: "1px", borderBottomColor: "#ccc"
                    , paddingLeft: "50px", paddingVertical: "10px", fontSize: "18px", color: "#c4c4c4", outline: "none"}}
                    secureTextEntry={true}
                ></TextInput>
            </View>
        </View>
        <Pressable>
            <Text style={{backgroundColor: "#386ffc", textAlign: "center"
            , color: "#fff", paddingVertical: "14px", fontSize: "18px", borderRadius: "12px"}}>
                LOGIN
            </Text>
        </Pressable>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop:"10px"}}>
            <Text style={{fontSize: "18px", marginTop: "15px"}}>Register</Text>
            <Text style={{fontSize: "18px", marginTop: "15px"}}>Forgot Password</Text>
        </View>
        
        <View style={{width: "100%", position: "relative", marginTop: "45px"}}>
            <View style={{width: "100%", position: "absolute", height: "1px", backgroundColor: "#0e18f5", top: "50%", transform: "translateY(-50%)"}}></View>
            <Text style={{fontSize: "18px", width: "50%", backgroundColor: "#fff", marginHorizontal: "auto"}}>Other Login Method</Text>
        
        </View>

        <View style={{width: "100%", flexDirection: "row", justifyContent:"space-between", alignContent:"center", marginTop :"30px"}}>
            <Image
                source={require("../../assets/addUser.svg")}
                style={{width: "74px", height: "74px"}}
                resizeMode="contain"
            />
            <Image
                source={require("../../assets/wireless.svg")}
                style={{width: "74px", height: "74px"}}
                resizeMode="contain"
            />
            <View
                style={{width: "74px", height: "74px", backgroundColor: "#3A579C", borderRadius: "12px"
                , justifyContent: "center", alignItems: "center"}}
                resizeMode="contain"

            >
                <Image source={require("../../assets/facebook.png")} 
                    style={{width: "35px", height: "35px"}}
                    resizeMode='contain'

                />
            </View>
        </View>

    </View>
  )
}