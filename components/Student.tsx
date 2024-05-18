import React, {useState, Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView,  } from 'react-native';

class Student extends Component{
    render(){
        console.warn(this.props)
        return(
            <View>
                <Text style={{color:'#f00', backgroundColor:'#00f', fontSize:30}}>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}

export default Student;
