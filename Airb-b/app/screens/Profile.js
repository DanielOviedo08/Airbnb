import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect}from 'react';
import UserGuest from "./profile/UserGuest";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserLogged from "../screens/profile/UserLogged"

export default function Profile(props) {
  const {navigation} = props;
  const [login, setLogin]=useState()

  useEffect(()=>{
    const auth = getAuth()
     onAuthStateChanged(auth,(user)=>{
      !user ? setLogin(false):setLogin(true)
    })
  },[])

  return login ? <UserLogged/>:
    <UserGuest navigation={navigation}/>
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
