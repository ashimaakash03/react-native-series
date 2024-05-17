/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const App = (): React.JSX.Element => {

  const users= [
  {name: 'Peter', age: 26, id:1},
  {name: 'Tony', age: 37, id:2},
  {name: 'Steve', age: 117, id:3},
  {name: 'Clint', age: 29, id:4}
  ]

  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#f00',
            backgroundColor: '#00f',
            padding: 20,
          }}>
          Lists in React Native using FlatList
        </Text>
        <FlatList data={users} renderItem={({item})=><Text style={styles.listItems}>Name: {item.name} Age: {item.age}</Text>}/>
      </View>
    </>
  );
};

const styles= StyleSheet.create({
    listItems: {
        backgroundColor: 'yellow',
        color: 'purple',
        margin: 15,
        padding: 10,
        borderWidth: 2,
        borderColor: '#a6a6a6',
        borderRadius: 10,
        height: 80,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
export default App;
