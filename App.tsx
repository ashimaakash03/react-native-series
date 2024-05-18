import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const App = (): React.JSX.Element =>{
	const [display, setDisplay]= useState(true);
	return(
		<View>
			<Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30, marginBottom:30, textAlign: 'center'}}>
				Show / Hide components
			</Text>
			<Button title='Show Component' onPress={() => setDisplay(true)}/>
			<Button title='Hide Component' onPress={() => setDisplay(false)}/>
			{display  ? <View style={{marginTop:30}}><Child/></View>: null}


		</View>
	)
}

const Child= (): React.JSX.Element =>{
	return(
		<View>
		<Text style={{color:'green', backgroundColor:'yellow', fontSize:30, marginBottom:30, textAlign: 'center'}}> This is the child component</Text>
		</View>
	)
}

export default App;
