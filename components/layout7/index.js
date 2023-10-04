import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, Image, TextInput, Pressable } from 'react-native'

export default function Layout7() {
  return (
    <View style={{flex: 1}}>
        <LinearGradient
            colors={["#FBCB00", "#BF9A00"]}
            style={{flex: 1, paddingVertical: "50px", paddingHorizontal: "15px"}}
        >   
            <Text style={{textTransform: "uppercase", fontSize: "30px", fontWeight: "700", paddingHorizontal: "20px"}}>LOGIN</Text>
            <View style={{width: "100%", marginTop: "80px"}}>'
                <View style={{borderWidth: "1px", borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: "15px"}}>
                    <Image source={require("../../assets/avatar_user.png")}
                        style={{position: "absolute", left: "12px", height: "100%", width: "32px"}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Name' style={{fontSize: "18px", fontWeight: "500", outline: "none"
                    ,padding: "", paddingVertical: "14px", paddingLeft: "60px"}}/>
                </View>
                <View style={{borderWidth: "1px", borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)"
                , position: "relative", marginBottom: "15px"}}>
                    <Image source={require("../../assets/lock-152879.png")}
                        style={{position: "absolute", left: "12px", height: "100%", width: "32px"}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Password' style={{fontSize: "18px", fontWeight: "500", outline: "none"
                    ,padding: "", paddingVertical: "14px", paddingLeft: "60px"}} secureTextEntry={true}/>
                    <Image source={require("../../assets/Eye.png")} style={{position: "absolute"
                    , right: "12px", height: "100%", width: "32px"}}
                        resizeMode='contain'
                    />

                </View>
            </View>

            <Pressable width="100%" style={{marginTop: "50px"}}>
                <Text style={{textAlign: "center", backgroundColor: "#000", color: "#fff", paddingVertical: "10px"
                , fontSize: "20px", fontWeight: "700"}}>LOGIN</Text>
            </Pressable>
            <Pressable style={{marginTop:"40px"}}>
                <Text style={{textTransform: "uppercase", textAlign: "center", fontSize: "20px", fontWeight: "700"}}>CREATE ACCOUNT</Text>
            </Pressable>
        </LinearGradient>
    </View>
  )
}