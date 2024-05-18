import React, {useState, Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView,  } from 'react-native';
import Student from './components/Student.tsx'

class App extends Component{

    constructor(){
        super();
        this.state= {
            name: 'Ashim',
            age: 26
        }
    }

    updateName(value){
        this.setState({name: value});
    }
    render(){
        return(
            <View>
                <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30}}>
                    {this.state.name} {this.state.age}
                </Text>
                <View style={{margin:20}}>
                <TextInput placeholder='Enter Name' onChangeText={(text)=> this.updateName(text)}/>
                <Button title='Press here'/>
                </View>
                <Student/>
            </View>
        )
    }
}

export default App;
