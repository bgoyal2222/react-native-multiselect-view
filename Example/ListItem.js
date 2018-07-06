import React, { PureComponent } from 'react';
import { Dimensions, View, StyleSheet, Alert, onPress, TouchableOpacity, ScrollView, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

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
		const { text, activeContainerStyle, activeTextStyle, inactiveContainerStyle, inactiveTextStyle, checked, activeIcon, inactiveIcon } = this.props;
		return (
			<TouchableOpacity onPress={this.onTouch}>
				{checked ? <View style={[styles.container, styles.activeContainer, activeContainerStyle]}>
					<Text numberOfLines={1} style={[styles.text, styles.activeText, activeTextStyle]}>{text}</Text>
					{activeIcon ? activeIcon : <Ionicons name='md-close' size={16} style={[styles.icon,styles.activeText]} />}
				</View> :
					<View style={[styles.container, inactiveContainerStyle]}>
						<Text numberOfLines={1} style={[styles.text, inactiveTextStyle]}>{text}</Text>
						{inactiveIcon ? inactiveIcon : <Ionicons name='md-add'  size={16} style={[styles.icon,styles.text]} />}
					</View>}
			</TouchableOpacity>
		);
	}
}

ListItem.propTypes = {
	...TouchableOpacity.propTypes,
	text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	activeContainerStyle: PropTypes.object,
	inactiveContainerStyle: PropTypes.object,
	activeTextStyle: PropTypes.object,
	inactiveTextStyle: PropTypes.object,
	checked: PropTypes.bool.isRequired,
	activeIcon: PropTypes.element,
	inactiveIcon: PropTypes.element,
	onTouch: PropTypes.func.isRequired
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
			alignItems: 'center',
			borderWidth: 1,
			borderRadius: 2,
			backgroundColor: '#f8f8f8'
		},
		activeContainer: {
			backgroundColor: '#BDD358',
			borderColor: 'transparent'
		},
		activeText: {
			color: '#fff'
		},
		text: {
			fontSize: 16,
			color: 'black',
			paddingRight: 10
		},
		icon: {
			marginTop: 3,
			width: 20,

		}

	});