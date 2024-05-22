import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import {WebView} from 'react-native-webview';

const App = (): React.JSX.Element =>{

	return(
		<WebView source={{uri: 'https://www.google.com'}}/>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		justifyContent: 'flex-start'
	}
})

export default App;
