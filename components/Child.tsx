import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default Child= (): React.JSX.Element =>{
	useEffect(()=>{
		return ()=>{console.warn('Child component unmounted');}
	})
	useEffect (()=>{
		console.warn("Child component mounted");
	})
	return(
		<View>
		<Text style={{color:'green', backgroundColor:'yellow', fontSize:30, marginBottom:30, textAlign: 'center'}}> This is the child component</Text>
		</View>
	)
}
