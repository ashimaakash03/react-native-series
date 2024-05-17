/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: '#f00',
            backgroundColor: '#00f',
            padding: 10,
          }}>
          Handle text input in React Native
        </Text>
        <TextInput style={styles.textInput} placeholder='Enter Name'/>
      </View>
    </>
  );
};

const styles= StyleSheet.create({
    textInput:{fontSize:25, backgroundColor: 'whitesmoke', margin: 20, borderColor: 'red', borderWidth: 2}
})

export default App;
