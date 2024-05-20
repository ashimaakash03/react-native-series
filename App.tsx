import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const App = (): React.JSX.Element =>{
	return(
		<View style={styles.parent}>{/**Parent Container */}
            			<View style={styles.child1}>
            			    <View style={styles.child1ofred}><Text>Purple box</Text></View>
            			    <View style={styles.child2ofred}><Text>Yellow box</Text></View>
            			    <View style={styles.child3ofred}><Text>YellowGreen Box</Text></View>
            			</View>{/**3/5 ratio */}
            			<View style={styles.child2}></View>
            			<View style={styles.child3}></View>
        </View>
	)
}

const styles= StyleSheet.create({
	parent: {flex:1, flexDirection: 'column'},
	child1: {flex:2, backgroundColor:'red', flexDirection:'row'},
	child1ofred: {flex:2, backgroundColor:'purple', margin:10, padding:10},
	child2ofred: {flex:1, backgroundColor:'yellow', margin:10, padding:10},
	child3ofred: {flex:1, backgroundColor:'yellowgreen', margin:10, padding:10},
	child2: {flex:1, backgroundColor:'green'},
	child3: {flex:1, backgroundColor:'blue'}
})

export default App;
