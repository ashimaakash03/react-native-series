import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';


const App = ()=>{
const[count, setCount]= useState(0);
useEffect(()=>{
    console.warn("Hello...");
},[])
        return(
            <View>
                <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30}}>
                    Life Cycle Hooks - useEffect demo {count}
                </Text>
                <Button title='Update Count' onPress={()=> setCount(count+1)}/>
            </View>
        )
}

export default App;
