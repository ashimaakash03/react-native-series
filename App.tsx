import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import {WebView} from 'react-native-webview';


const App = (): React.JSX.Element =>{

	return(
		<View style={styles.main}>
			<Text style={styles.text}>Stack Navigation</Text>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		justifyContent: 'flex-start'
	},
	text:{
		fontSize: 30,
		color: '#fff',
		backgroundColor: '#00f',
		textAlign: 'center',
		margin: 20,
		padding: 10
	}
})

export default App;
