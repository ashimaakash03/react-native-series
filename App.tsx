import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';

const App = (): React.JSX.Element =>{
	return(
		<View style={styles.main}>
			<Text style={{fontSize:30, color:'#fff', textAlign:'center', backgroundColor:'red', margin:20, padding:10}}>Platform: {Platform.OS}</Text>
			{Platform.OS === 'android'? <View style={{backgroundColor:'red', height:100, width:100, margin:20, padding:10}}></View>: <View style={{backgroundColor:'green', height:100, width:100, margin:20, padding:10}}></View>}
			<Text style={styles.text}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		alignItems:'center',
		justifyContent: 'space-around'
	},
	text:{
		fontSize:30,
		color: Platform.OS === 'android' ? 'red' : 'green'
	}
})

export default App;
