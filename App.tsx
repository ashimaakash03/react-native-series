import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const App = (): React.JSX.Element =>{

const [activity, setActivity]= useState(false)
const displayActivity=() =>{
	setActivity(true);

	setTimeout(()=>{
		setActivity(false);
	},3000)
}
	return(
		<View style={styles.main}>
 			<Button title='Activity Toggler' onPress={displayActivity}/>
 			<ActivityIndicator size={100} color={"blue"} animating={activity}/>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		alignItems:'center',
		justifyContent: 'center'
	}
})

export default App;
