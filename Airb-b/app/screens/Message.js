import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Message() {
  return (
    <View style={styles.container}>
      <Text>Mensaje</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
