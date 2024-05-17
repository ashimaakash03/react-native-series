/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';

const App = (): React.JSX.Element => {

  const users= [
  {name: 'Peter Parker', age: 26, id:1},
  {name: 'Tony Stark', age: 37, id:2},
  {name: 'Steve Rogers', age: 117, id:3},
  {name: 'Clint Barton', age: 29, id:4},
  {name: 'Thor', age: 1500, id:5},
  {name: 'Bruce Banner', age: 40, id:6},
  {name: 'Clarke Kent', age: 36, id:7},
  {name: 'Bruce Banner', age: 37, id:8},
  {name: 'Barry Allen', age: 17, id:9},
  {name: 'Arthur Curry', age: 39, id:10},
  {name: 'Oliver Queen', age: 35, id:11},
  {name: 'Slade Wilson', age: 40, id:12},
  {name: 'Martian Manhunter', age: 2000, id:13}
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
          Lists in React Native using Map Function
        </Text>
        <ScrollView>
        {users.map((item)=> <Text key={item.id} style={styles.listItems}>{item.name} {item.age}</Text>)}
        </ScrollView>
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
