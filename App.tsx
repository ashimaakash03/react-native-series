import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const App = (): React.JSX.Element =>{
	const [display, setDisplay]= useState(true);
	return(
		<View>
			<Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30, marginBottom:30, padding:10, textAlign: 'center'}}>
				Show / Hide components using useEffect
			</Text>
			<Button title='Toggle' onPress={()=>setDisplay(!display)}/>
			{display? <View style={{color:'purple', backgroundColor:'yellow', marginTop: 30}}><Child/></View>: null}
			</View>
	)
}

const Child= (): React.JSX.Element =>{
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

export default App;
