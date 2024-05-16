import React from 'react';
import {Text, View, Button} from 'react-native';

const App = (): React.JSX.Element => {
  return (

      <View>
        <Text style={{fontSize: 20}}> Hello React Native <Text style={{fontSize: 30}}> Myself Ashim Aakash Roy </Text></Text>
        <Button title='Press Here' color="red"/>
      </View>

  );
};

export default App;