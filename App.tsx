import React from 'react';
import {Text, View, Button} from 'react-native';
import FirstComponent from './components/FirstComponent.tsx';
import SecondComponent from './components/SecondComponent.tsx';
const App = (): React.JSX.Element => {
  return (

      <View>
        <Text>Components</Text>
        <FirstComponent/>
        <SecondComponent/>
        <FirstComponent/>
        <SecondComponent/>
        <FirstComponent/>
        <SecondComponent/>
      </View>

  );
};




export default App;