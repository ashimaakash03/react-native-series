import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExtStyles from './style.js';

const App = (): React.JSX.Element => {
  return (
       <>
	  <View>
		<Text style= {ExtStyles.textbox}>Styling in React Native</Text>
		<Text style= {{fontSize: 50, backgroundColor: "blue", color: "red", textAlignVertical: "center", textAlign:"center", margin: 20, borderRadius: 10}}>Styling in React Native</Text>
        <Text style= {ExtStyles.textbox}>Styling in React Native</Text>
        <Text style= {{fontSize: 50, backgroundColor: "blue", color: "red", textAlignVertical: "center", textAlign:"center", margin: 20, borderRadius: 10}}>Styling in React Native</Text>
		<Text style= {ExtStyles.textbox}>Styling in React Native</Text>

	  </View>
        </>
  );
};

export default App;