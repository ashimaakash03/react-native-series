import React from 'react';
import {Text, View, Button} from 'react-native';
import FirstComponent from './components/FirstComponent.tsx';
import SecondComponent from './components/SecondComponent.tsx';

const App = (): React.JSX.Element => {

let number = 20;
const handlePress=()=>{
number= 100;
console.warn(number);
}
  return (

      <View>
        <Text style={{fontSize: 25, color: "black"}}>Buttons Demo with onPress {number}</Text>
        <Button title="Press Here" onPress={()=>handlePress()} color="green"/>
        <Button title="Press Here" onPress={()=>handlePress()} color="blue"/>
      </View>

  );
};

export default App;