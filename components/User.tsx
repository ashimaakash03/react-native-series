import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export default User= ({info}): React.JSX.Element =>{

    useEffect(()=>{
        console.warn("Call when data will update")
    },[info.data])
    useEffect(()=>{
        console.warn("Call when count will update")
    }, [info.count])
    return (
        <View>
                <Text style={{color:'#00f',fontSize:30}}>Count: {info.count}</Text>
                    <Text style={{color:'#00f',fontSize:30}}>Data: {info.data}</Text>

                </View>
    )
}
