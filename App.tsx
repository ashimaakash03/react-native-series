import React, {useState, useEffect} from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';

const App = (): React.JSX.Element =>{

const [showModal, setShowModal]= useState(false);

	return(
		<View style={styles.main}>

			<View style={styles.wrapper}>
				<Button title='Open Modal' onPress={()=> setShowModal(!showModal)}/>
				{showModal?<Modal transparent={true} visible={showModal} animationType={"slide"}>

                           				<View style={styles.modalContainer}>
                           					<View style={styles.modalBox}>
                           						<Text style={styles.modalText}> Hi!! This This a modal...</Text>
                           						<Button title='Close Modal' onPress={()=>setShowModal(!showModal)}/>
                           					</View>
                           				</View>

                           			</Modal>: null}
			</View>
		</View>
	)
}

const styles= StyleSheet.create({
	main:{
		flex:1,
	},
	wrapper:{
		flex:1,
		justifyContent: 'flex-end'
	},
	modalContainer:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalBox:{
		backgroundColor: 'whitesmoke',
        padding: 40,
        borderRadius: 20,
        borderWidth: 1,

	},
	modalText:{
		fontSize: 20,
		color: '#bfbfbf'
	}
})

export default App;
