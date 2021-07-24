import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewbg}>
    <Text style={styles.text}>Hello world!</Text>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#5170d6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,


  },

text:{
color: '#5170d6',
fontSize: 50,

},

viewbg:{

alignItems:'centert',
justifyContent:'center',
width:300,
height: 60,
backgroundColor:'#ffff'

}


});
