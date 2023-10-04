import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, Image, TextInput } from 'react-native'

export default function Layout7() {
  return (
    <View style={{flex: 1}}>
        <LinearGradient
            colors={["#FBCB00", "#BF9A00"]}
            style={{flex: 1, paddingVertical: "50px", paddingHorizontal: "15px"}}
        >   
            <Text style={{textTransform: "uppercase", fontSize: "30px", fontWeight: "700", paddingHorizontal: "20px"}}>LOGIN</Text>
            <View style={{width: "100%", marginTop: "80px"}}>
                <View style={{borderWidth: "1px", borderColor: "#fff", backgroundColor: "rgba(0,0,0,0.1)", position: "relative"}}>
                    <Image source={require("../../assets/avatar_user.png")}/>
                    <TextInput placeholder='Name' style={{fontSize: "18px", fontWeight: "500", outline: "none"
                    ,padding: "", paddingVertical: "14px", paddingLeft: "60px"}}/>
                </View>
            </View>
        </LinearGradient>
    </View>
  )
}