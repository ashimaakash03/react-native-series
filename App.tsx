import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import FirstComponent from './components/FirstComponent.tsx';
import SecondComponent from './components/SecondComponent.tsx';

const App = (): React.JSX.Element => {
const [name, setName]= useState("Aakash");
let data= "Ashim";

const testUpdate = ()=>{
    setName("Rishabh");
    console.warn(name);
}

  return (

      <View>
        <Text style={{fontSize: 25, color: "black"}}>States in React Native</Text>
        <Text style={{fontSize: 25, color: "red"}}>{name}</Text>
        <Button onPress={testUpdate} title="Update Name"/>
        <Text style={{fontSize: 25, color: "blue"}}>{data}</Text>
      </View>

  );
};

export default App;