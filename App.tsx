/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const App = (): React.JSX.Element => {
const [name, setName]= useState('Ashim');
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
        <TextInput style={styles.textInput} placeholder='Enter Name' onChangeText={(value)=> setName(value)} value={name}/>
        <Button title='Clear Name' onPress={()=> setName('')} />
        <Text style={{fontSize:25, color: 'blue', margin: 10}}>{name}</Text>
      </View>
    </>
  );
};

const styles= StyleSheet.create({
    textInput:{fontSize:25, backgroundColor: 'whitesmoke', margin: 20, borderColor: 'red', borderWidth: 2}
})

export default App;
