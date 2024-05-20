import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';

const App = (): React.JSX.Element =>{
	return(
		<View>
            <View style={styles.main}>
                <TouchableHighlight>
                    <Text style={[styles.button, styles.primary]}>Primary Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[styles.button, styles.success]}>Success Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[styles.button, styles.warning]}>Warning Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={[styles.button, styles.error]}>Error Button</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text style={styles.button}>Button</Text>
                </TouchableHighlight>
            </View>
        </View>
	)
}

const styles= StyleSheet.create({
	main:{
	},
	button:{
		backgroundColor: 'grey',
		color: 'white',
		margin:10,
		padding: 10,
		textAlign: 'center',
		textTransform: 'uppercase',
		borderRadius: 10,
		elevation: 10
	},
	primary:{backgroundColor: 'blue'},
	success:{backgroundColor: 'green'},
	warning:{backgroundColor: 'gold'},
	error: {backgroundColor: 'red'}
})

export default App;
