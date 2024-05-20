import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const App = (): React.JSX.Element =>{
	return(
		<View style={styles.parent}>{/**Parent Container */}
            			<View style={styles.child1}></View>{/**3/5 ratio */}
            			<View style={styles.child2}></View>
            			<View style={styles.child3}></View>
        </View>
	)
}

const styles= StyleSheet.create({
	parent: {flex:1, flexDirection: 'row'},
	child1: {flex:3, backgroundColor:'red'},
	child2: {flex:1, backgroundColor:'green'},
	child3: {flex:1, backgroundColor:'blue'}
})

export default App;
