import React, {useState, Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView,  } from 'react-native';

class App extends Component{
    render(){
        return(
            <View>
                <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30}}>
                    Class components in React Native
                </Text>
                <View style={{margin:30}}>
                <TextInput placeholder='Enter Name'/>
                <Button style={{color:'#0f0', padding:20}} title='Press here'/>
                </View>
            </View>
        )
    }
}

export default App;
