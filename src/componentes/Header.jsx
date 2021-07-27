import React from "react";
import { View, StyleSheet, Image } from "react-native";



export default function Header() {
    return(
        <View style={styles.ViewHeader}>
            {/* <Text style={styles.textHeader}>Aprenda agora a fazer um App fodona!</Text> */}
            <Image style={styles.tinyLogo} source={require('./logo2.jpg')}/>
        </View>
        )
}



const styles = StyleSheet.create({
ViewHeader:{
    paddingTop:20,
    // height:120,
    backgroundColor: "#cb997e",
    justifyContent: 'center',
    alignItems: 'center'
},
tinyLogo: {
    
    margin: 30,
    width: 350,
    height: 50,
    resizeMode: 'stretch'
  }
});