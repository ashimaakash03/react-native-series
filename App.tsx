import React from 'react';
import {Text, View, Button} from 'react-native';

const App = (): React.JSX.Element => {
  return (

      <View>
        <Text>Components</Text>
        <FirstComponent/>
        <FirstComponent/>
        <FirstComponent/>
        <FirstComponent/>
        <FirstComponent/>
      </View>

  );
};

const FirstComponent= (): React.JSX.Element=>{
    return <View>
    <Text>This is one separate component</Text>
    <Text>Name: Ashim Aakash Roy</Text>
    <Text>Age: 30</Text>
    <Text>E-Mail: ashim@test.com</Text>
    </View>
}

export default App;