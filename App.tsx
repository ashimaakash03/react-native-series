import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App = (): React.JSX.Element =>{
const Stack= createNativeStackNavigator();
	return(
		<View style={styles.main}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Login' component= {Login}/>
					<Stack.Screen name='Home' component={Home}/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{flex:1, justifyContent: 'flex-start'},
	homeText:{fontSize: 30, color: '#fff', backgroundColor:'#f00', margin:20, padding:10},
	loginText:{fontSize: 30, color: '#fff', backgroundColor:'#00f', margin:20, padding:10}
})

const Home= (props): React.JSX.Element =>{
	return(
		<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<Text style={styles.homeText}>Home Screen</Text>
		</View>
	)
}

const Login= (props): React.JSX.Element =>{
	return(
		<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<Text style={styles.loginText}>Login Screen</Text>
			<Button title='Go to Home' onPress={()=> props.navigation.navigate('Home')}/>
		</View>
	)
}


export default App;
