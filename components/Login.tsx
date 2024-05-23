import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native'

export default Login= (props): React.JSX.Element =>{
	return(
		<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<Text style={styles.loginText}>Login Screen</Text>
			<Button title='Go to Home' onPress={()=> props.navigation.navigate('Home')}/>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{flex:1, justifyContent: 'flex-start'},
	homeText:{fontSize: 30, color: '#fff', backgroundColor:'#f00', margin:20, padding:10},
	loginText:{fontSize: 30, color: '#fff', backgroundColor:'#00f', margin:20, padding:10}
})
