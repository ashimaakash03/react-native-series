import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const App = (): React.JSX.Element =>{
	const [display, setDisplay]= useState(true);
	return(
		<View>
			<Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30, marginBottom:30, padding:10, textAlign: 'center'}}>
				Responsive UI with flex
			</Text>
		</View>
	)
}

export default App;
