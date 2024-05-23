import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal, Pressable, Platform } from 'react-native';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login.tsx';
import Home from './components/Home.tsx';

const App = (): React.JSX.Element =>{

const headerAction = ()=>{
	console.warn("Button Pressed")
}
const Stack= createNativeStackNavigator();
	return(
		<View style={styles.main}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Login' component= {Login}
					options={{
						headerTitle: ()=><Button title='Left' onPress={headerAction}/>,
						headerRight: ()=><Button title='Right' onPress={headerAction}/>,
						title:'User Login',
						headerStyle: {backgroundColor:'#00f'},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize:40
						}
					}} />
					<Stack.Screen name='Home' component={Home}
					options={{
                        title:'User Home',
                        headerStyle: {backgroundColor:'#f00'},
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize:40
                        }
                    }}/>
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

export default App;
