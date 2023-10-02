import { View, Text, Button, TextInput, Pressable, TouchableOpacity } from 'react-native'
import {styles} from "./style"
import { LinearGradient } from 'expo-linear-gradient'

export default function Layout4() {
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
          style={styles.linearGradient}
        >
            <View style={[styles.headerBoxCenter, styles.flex1]}>
                <Text style={[styles.contentCode]}>CODE</Text>
                <Text style={{fontSize: "20px", fontWeight: "700"}}>VERIFICATION</Text>
            </View>
            <View style={[styles.flex1]}>
                <Text style={styles.contantVerify}>Enter ontime password sent on ++849092605798</Text>
                <View style={{flexDirection: "row", justifyContent: "center", marginTop: "20px"}}>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                    <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                    <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                    <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                    <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                    <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                    <View style={{width: "50px", height: "50px", borderWidth: "1px", alignItems: "center"}}>
                        <TextInput style={{width: "100%", height: "100%", outline: "none", textAlign: "center", fontWeight: "bold"}}/>
                    </View>
                </View>
                <TouchableOpacity style={{width: "100%", paddingVertical: "10px", backgroundColor: "#E3C000", width: "95%", marginHorizontal:"auto", marginTop:"40px"}}>
                    <Text style={{fontWeight: 700, textAlign: "center"}}>NEXT</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
        
    </View>
  )
}