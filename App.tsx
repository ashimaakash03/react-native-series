import React from 'react';
import {Text, View, Button} from 'react-native';


let firstName="Clarke";
let lastName="Kent";
let age= 16;
const App = (): React.JSX.Element => {
  return (

      <View>
        <Text style={{fontSize: 20}}> Hello React Native <Text style={{fontSize: 30}}> Myself Ashim Aakash Roy </Text></Text>
        <Button title='Press Here' color="red"/>
        <View><Text>Another View inside a view...</Text></View>
        <Text>{firstName+" "+lastName}</Text>
        <Text>{firstName} {lastName}</Text>
        <Text>{age>25? "He can fly": "He hasn't learnt flying"}</Text>
      </View>

  );
};

export default App;