import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = (): React.JSX.Element => {
    const [name, setName]= useState("");
  return (
       <>
	  <View>
		<Text style={{fontSize: 25, color: "black"}}>Props in React Native {name}</Text>
		<Child name={name} age={30}/>
		<Button title="Update Name" onPress={()=>setName("Aayush")}/>
	  </View>
        </>
  );
};

const Child = ({name, age})=>{
return <View>
    <Text style={{color: "black", fontSize: 20}}>This is a child component inside App Component {name}. Your age is: {age}</Text>
</View>
}

export default App;