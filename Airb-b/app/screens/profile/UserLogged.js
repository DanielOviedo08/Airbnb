import React, {useEffect, useState} from "react";
import { View,Text, StyleSheet} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { getAuth } from "firebase/auth";

export default function UserLogged(){
const [reaload,setReaload]=useState()
const [infoUser, setInfoUser]=useState()

    const auth =getAuth()

    useEffect(()=>{
        (async()=>{
            const user= auth.currentUser
            setInfoUser(user)
        })
        setReaload(false)
    },[reaload])
    return(
        <View>
           <Button 
           title=" Cerrar Sesion"
           buttonStyle={styles.btn}
           containerStyle={styles.btnContainer}
           onPress={()=>auth.signOut()}


           />
        </View>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#FFF",
        justifyContent:"center",
        alignItems:"center"
    },

    btnContainer:{
        width:"80%",
    },
    btn:{
        backgroundColor:"ff5a60",
        color:"#FFF"
    }
})