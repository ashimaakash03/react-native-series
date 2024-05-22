import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';

const App = (): React.JSX.Element =>{
const[show, setShow]= useState(false)

	return(
		<View style={styles.main}>

		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		justifyContent: 'flex-end'
	}
})

export default App;
