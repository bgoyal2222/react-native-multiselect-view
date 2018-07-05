import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Alert, onPress, TouchableOpacity, ScrollView, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class ListItem extends Component {

	constructor(props) {
		super(props);
		this.onTouch = this.onTouch.bind(this);
		this.state = {
			checked: false
		}
	}

	onTouch() {
		const { checked } = this.state;
		this.setState({ checked: !checked });
		this.props.onTouch(!checked, this.props.index);
	}

	static getDerivedStateFromProps(nextProps, nextState) {
		if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
			const { checked } = nextProps;
			return { checked };
		}
	}
	render() {
		const { checked } = this.state;
		const { text, style, props, TextStyle, ContainerStyle } = this.props;
		return (
			<TouchableOpacity onPress={this.onTouch}>
				<View style={[styles.mainContainer, style]}>
					<View style={[styles.container, { backgroundColor: checked ? 'green' : 'white', borderColor: checked ? 'transparent' : 'black' }, ContainerStyle]}>
						<Text numberOfLines={1} style={[styles.text, { color: checked ? 'white' : 'black' }, TextStyle]}>{text}</Text>
						{checked ?
							<Entypo name='cross' color={'white'} size={20} /> :
							<Entypo name='plus' color={'black'} size={20} />
						}
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create(
	{
		mainContainer: {
			backgroundColor: 'transparent',
		},

		container: {
			paddingVertical: 5,
			marginTop: 10,
			marginRight: 10,
			paddingHorizontal: 10,
			borderWidth: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
		},

		text: {
			fontSize: 16,
			color: 'black',
			paddingRight: 10
		}

	});