import React, { PureComponent } from 'react';
import { Dimensions, View, StyleSheet, Alert, onPress, TouchableOpacity, ScrollView, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ListItem extends PureComponent {

	constructor(props) {
		super(props);
		this.onTouch = this.onTouch.bind(this);
	}

	onTouch() {
		const { checked, index, onTouch } = this.props;
		onTouch(!checked, index);
	}

	render() {
		const { text, activeContainerStyle, activeTextStyle, inactiveContainerStyle, inactiveTextStyle, checked, activeComponent, inactiveComponent } = this.props;
		return (
			<TouchableOpacity onPress={this.onTouch}>
				{checked ? <View style={[styles.container, { backgroundColor: '#BDD358', borderColor: 'transparent' }]}>
					<Text numberOfLines={1} style={[styles.text, { color: 'white' }]}>{text}</Text>
					<Ionicons name='md-close' color={'white'} size={16} style={styles.icon}/>
				</View> :
					<View style={[styles.container, { backgroundColor: '#f8f8f8' }]}>
						<Text numberOfLines={1} style={[styles.text, { color: 'black' }]}>{text}</Text>
						<Ionicons name='md-add' color={'black'} size={16} style={styles.icon}/>
					</View>}
			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create(
	{

		container: {
			paddingVertical: 5,
			marginTop: 10,
			marginRight: 10,
			paddingLeft: 10,
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems:'center',
			borderWidth: 1,
			borderRadius:2
		},
		text: {
			fontSize: 16,
			color: 'black',
			paddingRight: 10
		},
		icon:{
			marginTop:3,
			width:20,

		}

	});