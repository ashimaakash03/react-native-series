import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';

const App = (): React.JSX.Element =>{
const[show, setShow]= useState(false)

	return(
		<View style={styles.main}>
			{show ? <View style={styles.modal}>
                    				<View style={styles.body}>
                    					<Text>Dummy Random Text</Text>
                    					<Button title='Close Dialog Box' onPress={() => setShow(false)}/>
                    				</View>
                    			</View>: null}
			<Button title='Open Dialog Box' onPress={() => setShow(true)}/>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		justifyContent: 'flex-end'
	},
	modal:{
		flex:1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	body:{
		width: 200,
		height: 200,
		backgroundColor: 'white',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: 20
	}
})

export default App;
