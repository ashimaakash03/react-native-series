import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import User from './components/User.tsx';

const App = (): React.JSX.Element =>{
    const[count, setCount]= useState(0);
    const[data, setData]= useState(10);

//         useEffect(()=>{
//             console.warn("Count Updated...")
//         }, [count])
//         useEffect(()=>{
//             console.warn("Data Updated...")
//         },[data]);

    return(
        <View>
            <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30, marginBottom:30}}>
                useEffect demo as componentDidUpdate
            </Text>
            {/*<Text style={{color:'#00f',fontSize:30}}>Count: {count}</Text>
            <Text style={{color:'#00f',fontSize:30}}>Data: {data}</Text>*/}
            <Button title='Update Count' onPress={()=> setCount(count+1)}/>
            <Button title='Update Data' onPress={()=> setData(data+1)}/>

            <User info={{count,data}}/>
        </View>
    )
}

export default App;
