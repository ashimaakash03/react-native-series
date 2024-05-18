import React, {useState, Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView,  } from 'react-native';
import Student from './components/Student.tsx'

class App extends Component{
    handlePress(){
        console.warn("Button Pressed...")
    }
    render(){
        return(
            <View>
                <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30}}>
                    Class components in React Native
                </Text>
                <View style={{margin:20}}>
                <TextInput placeholder='Enter Name'/>
                <Button title='Press here' onPress={this.handlePress}/>
                </View>
                <Student/>
            </View>
        )
    }
}

export default App;
