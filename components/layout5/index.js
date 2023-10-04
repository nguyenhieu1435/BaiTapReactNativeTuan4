import { View, Text, TextInput, Pressable } from 'react-native'
import {styles} from "./style"
import { Image } from 'react-native'

export default function Layout5() {
  return (
    <View
        style={styles.container}
    >   
        <View style={{flex: 1, alignItems: "center", width: "100%"}}>
            <Text style={{textAlign: "center", fontSize: "25px", fontWeight: "700", marginBottom: "50px",}}>LOGIN</Text>
            <View style={{width: "100%", marginBottom: "40px"}}>
                <TextInput placeholder='Email'
                    style={{width: "100%", paddingVertical: "12px"
                    , paddingHorizontal: "20px", backgroundColor: "rgba(0, 0, 0, 0.1)"
                    , flex: 1, fontSize: "18px", fontWeight: "400", outline: "none"}}
                />
            </View>
            <View  style={{width: "100%", marginBottom: "40px", position: "relative"}}>
                <TextInput placeholder='Password'
                      style={{width: "100%", paddingVertical: "12px"
                      , paddingHorizontal: "20px", backgroundColor: "rgba(0, 0, 0, 0.1)"
                      , flex: 1, fontSize: "18px", fontWeight: "400", outline: "none", paddingRight: "53px"}}
                />
                <Image source={require('../../assets/Eye.png')} 
                    resizeMode='contain'
                    style={{position: "absolute", right: "16px", width: "36px", height: "36px", height: "100%"}}
                />
            </View>
        </View>
        <View style={{flex: 1, alignItems: "center"}}>
            <Pressable style={{width: "100%"}}>
                <Text style={{textAlign: "center", fontSize: "18px", backgroundColor: "#c34e38"
                , paddingVertical :"12px", color: "#D8EFDE", fontWeight: "700", marginBottom: "20px"}}>LOGIN</Text>
            </Pressable>
            <Text style={{fontWeight: "400", fontSize: "14px", marginBottom: "20px"}}>
                When you agree to terms and conditions
            </Text>
            <Text style={{color: "#5d25fa", fontSize: "14px", marginBottom: "20px"}}>
                For got your password?
            </Text>
            <Text style={{marginBottom: "35px"}}>
                Or login with
            </Text>
            <View style={{flexDirection: "row", width: "100%", height: "50px", borderRadius: "4px", overflow: "hidden"}}>
                <View style={{flex: 1, backgroundColor: "#27538d", alignItems: "center", "justifyContent": "center"}}>
                    <Image source={require("../../assets/facebook.png")} style={{width: "36px", height: "36px"}} resizeMode='contain'/>
                </View>
                <View style={{flex: 1, backgroundColor: "#1593c5", alignItems: "center", "justifyContent": "center"}}>
                    <Text style={{fontSize: "40px", color: "#fff", fontWeight: "700"}}>Z</Text>
                </View>
                <View style={{flex: 1, borderColor: "#1593c5", borderWidth: "2px", alignItems: "center", "justifyContent": "center"}}>
                    <Image source={require("../../assets/google.png")} style={{width: "36px", height: "36px"}} resizeMode='contain'/>
                </View>
            </View>
        </View>
    </View>
  )
}