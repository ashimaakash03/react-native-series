/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TextInput } from 'react-native';

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
        <TextInput style={{fontSize:25, backgroundColor: 'whitesmoke', margin: 20, borderColor: 'red', borderWidth: 2}} placeholder='Enter Name'/>
      </View>
    </>
  );
};

export default App;
