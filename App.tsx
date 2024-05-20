import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

const App = (): React.JSX.Element =>{

const [selectedRadio, setSelectedRadio]= useState(1);
	return(
		<View style={styles.main}>
			<TouchableOpacity onPress={()=> setSelectedRadio(1)}>
				<View style={styles.wrapper}>
					<View style={styles.radio}>
						{selectedRadio=== 1? <View style={styles.background}></View>: null}
					</View>
					<Text style={styles.radioText}>Radio 1</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=> setSelectedRadio(2)}>
                <View style={styles.wrapper}>
            	    <View style={styles.radio}>
            	        {selectedRadio=== 2? <View style={styles.background}></View>: null}
            	    </View>
           			<Text style={styles.radioText}>Radio 2</Text>
   				</View>
   			</TouchableOpacity>
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
