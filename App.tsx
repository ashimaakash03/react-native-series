import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

const App = (): React.JSX.Element =>{
	return(
		<View style={{flex:1}}>{/**Parent Container */}
			<View style={{flex:1}}>
            			<View style={{flex:3, backgroundColor:'red'}}></View>{/**3/5 ratio */}
            			<View style={{flex:1, backgroundColor:'green'}}></View>
            			<View style={{flex:1, backgroundColor:'blue'}}></View>
            </View>
            <View style={{flex:1}}>
				<View style={{flex:1}}>
                    <View style={{flex:3, backgroundColor:'red'}}></View>
                    <View style={{flex:3, backgroundColor:'green'}}></View>
                    <View style={{flex:4, backgroundColor:'blue'}}></View>{/**4/10 ratio */}
                </View>
           	</View>
		</View>
	)
}

export default App;
