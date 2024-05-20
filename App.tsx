import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

const App = (): React.JSX.Element =>{

const [selectedRadio, setSelectedRadio]= useState(0);
const skills= [{id: 1, name:"JAVA"}, {id:2, name:"HTML5"}, {id:3, name:"CSS3"}, {id:4, name:"JS & AJAX"}, {id:5, name: "React"}, {id:6, name:"React Native"}];
	return(
		<View style={styles.main}>
			{skills.map((item)=><TouchableOpacity key={item.id} onPress={()=> setSelectedRadio(item.id)}>
                            				<View style={styles.wrapper}>
                            					<View style={styles.radio}>
                            						{selectedRadio=== item.id? <View style={styles.background}></View>: null}
                            					</View>
                            					<Text style={styles.radioText}>{item.name}</Text>
                            				</View>
                            			</TouchableOpacity>)}
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
		alignItems:'center',
		justifyContent: 'center'
	},
	radioText:{
		fontSize: 20,
		color: 'black',
	},
	radio:{
		height:40,
		width:40,
		borderWidth: 3,
		borderColor: 'black',
		borderRadius: 20,
		margin: 10
	},
	wrapper:{
		flexDirection: 'row',
		alignItems: 'center'
	},
	background:{
		backgroundColor: 'black',
		height: 28,
		width: 28,
		borderRadius: 20,
		margin:3
	}
})

export default App;
