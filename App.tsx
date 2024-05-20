import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import Child from './components/Child.tsx';

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

export default App;
