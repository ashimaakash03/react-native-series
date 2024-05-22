import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable } from 'react-native';

const App = (): React.JSX.Element =>{

const [showModal, setShowModal]= useState(false);

	return(
		<View style={styles.main}>
			<Pressable
			onPress={()=>console.warn("Normal Press")}
			onLongPress={()=> console.warn("Press and hold")}
			onPressIn={()=> console.warn("Press in...")}
			onPressOut={()=> console.warn("Press out...")}>
				<Text style={styles.pressableBtn}>Pressable</Text>
			</Pressable>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		justifyContent: 'center'
	},
	pressableBtn:{
		backgroundColor:'blue',
		color: '#fff',
		margin:10,
		padding: 10,
		textAlign:'center',
		fontSize:25,
		borderRadius:10,
		shadowColor: '#f00',
		elevation:4
	}
})

export default App;
