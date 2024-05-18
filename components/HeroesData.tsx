import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default HeroesData= (props): React.JSX.Element =>{
    const item= props.item;
    return (<View style={styles.viewBox}><Text style={styles.listItems}>{item.name}</Text><Text style={styles.listItems}>{item.age}</Text></View>)
}

const styles= StyleSheet.create({
    listItems: {
        flex:1,
        margin: 5,
        backgroundColor: 'cyan',
        color: 'purple',
        padding: 10,
        borderRadius: 10,
        height: 90,
        width: 150,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    viewBox:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        borderColor: 'orange',
        borderWidth: 1,
        marginTop: 41,
        height: 100
    }
});