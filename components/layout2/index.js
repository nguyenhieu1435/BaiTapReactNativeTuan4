import { View, Text, Image, Pressable, TouchableOpacity, Button} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {styles} from "./style";
export default function Layout2() {
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
          style={styles.linearGradient}
        >
            <View style={[styles.flex4, styles.boxContainImg]}>
                <Image source={require("../../assets/Ellipse8.png")}
                    style={styles.imageEclipse}
                ></Image>
            </View>
            <View style={[styles.flex6, styles.boxContainContent]}>
                <Text style={styles.middleMainText}>GROW <br/> YOUR BUSINESS</Text>
                <Text style={styles.middleDescText}>We will help you to grow your business using
                    online server
                </Text>
                <View style={styles.boxBtnControl}>
                    <Pressable>
                        <Text style={styles.btnText}>Login</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </Pressable>
                </View>
                
                <Text style={styles.footerText}>How We Work?</Text>
            </View>
        </LinearGradient>
    </View>
  )
}