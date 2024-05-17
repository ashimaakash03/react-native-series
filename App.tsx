import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    textbox:{
        fontSize: 30,
        backgroundColor: "red",
        color: "#fff",
        margin: 20,
        textAlign: "center",
        textAlignVertical: "center",
        borderColor: "yellow",
        borderWidth: 5,
        borderRadius: 20,
        padding: 10
    }
})

const App = (): React.JSX.Element => {
  return (
       <>
	  <View>
		<Text style= {styles.textbox}>Styling in React Native</Text>
		<Text style= {{fontSize: 50, backgroundColor: "blue", color: "red"}}>Styling in React Native</Text>
        <Text style= {styles.textbox}>Styling in React Native</Text>
        <Text style= {{fontSize: 50, backgroundColor: "blue", color: "red"}}>Styling in React Native</Text>
		<Text style= {styles.textbox}>Styling in React Native</Text>

	  </View>
        </>
  );
};

export default App;