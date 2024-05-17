/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const App = (): React.JSX.Element => {

const resetForm= () =>{
    setUserData(false);
    setUsername('');
    setEmail('');
    setPassword('');
}

const [username, setUsername]= useState('');
const [email, setEmail]= useState('');
const [password, setPassword]= useState('');
const [userdata, setUserData]= useState(false)

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
          Simple Form in React Native
        </Text>
        <TextInput placeholder='Enter Username' style={styles.textInput} onChangeText={(text)=> setUsername(text)} value={username}/>
        <TextInput placeholder='Enter E-Mail' style={styles.textInput} onChangeText={(text)=> setEmail(text)} value={email}/>
        <TextInput placeholder='Enter Password' style={styles.textInput} secureTextEntry={true} onChangeText={(text)=> setPassword(text)} value={password}/>
        <View style={{margin: 10}}>
        <Button title='show data' color='green' onPress={()=> setUserData(true)}/>
        </View>
        <View style={{margin: 10}}>
        <Button title='clear data' color='red' onPress={()=> resetForm()}/>
        </View>
        <View style=
        {{fontSize: 30, margin: 20, color:'blue'}}>
        {userdata ? <View>
        <Text> {username} </Text>
        <Text>{email}</Text>
        <Text>{password}</Text>
        <Text>{userdata}</Text>
        </View>: null}
        </View>
      </View>
    </>
  );
};

const styles= StyleSheet.create({
    textInput:{fontSize:25, backgroundColor: 'whitesmoke', margin: 20, borderColor: 'blue', borderWidth: 2, borderRadius: 10, textAlignVertical: 'center'}
})

export default App;
