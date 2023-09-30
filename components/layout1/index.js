import { View, Text, Pressable, Image } from 'react-native'
import {styles} from "./style"


export default function Layout1() {
  return (
    <View style={styles.container}>
        <View style={[styles.boxFlex3, styles.boxContainerImage]}>
            <Image source={require("../../assets/Ellipse8.png")}
                style={styles.imageEclipse}
            />
        </View>
        <View style={[styles.boxFlex1, styles.boxCenter]}>
            <Text style={styles.boxCenterText}>GROW <br/> YOUR BUSINESS</Text>
        </View>
        <View style={[styles.boxFlex3, styles.boxFooter]}>
            <View
                style={styles.boxTextFooter}
            >
                <Text style={styles.textFooter}>We will help you to grow your business using
                online server</Text>
            </View>
            <View style={styles.boxControlFooter}>
                <Pressable>
                    <Text title='LOGIN' style={styles.btnControlFooter}>LOGIN</Text>
                </Pressable>
                <Pressable>
                    <Text title='SIGNUP' style={styles.btnControlFooter}>SIGNUP</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}