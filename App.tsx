import React from 'react';
import {Text, View, Button} from 'react-native';
import FirstComponent from './components/FirstComponent.tsx';
import SecondComponent from './components/SecondComponent.tsx';
const App = (): React.JSX.Element => {

const handlePress=(value:string)=>{
console.warn(value)
}
  return (

      <View>
        <Text style={{fontSize: 25, color: "black"}}>Buttons Demo with onPress</Text>
        <Button title="Press Here" onPress={handlePress} color="green"/>
        <Button title="Press Here" onPress={()=>handlePress("Hi Y'all")} color="blue"/>
      </View>

  );
};

export default App;