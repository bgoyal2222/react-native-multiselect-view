/**
 * react-native-multiselect-view
 * Customizable list component for react native, it works on iOS and Android
 * https://github.com/bgoyal2222/react-native-multiselect-view
 * Email:bhaveshgoyal999@gmail.com
 * Profile:https://www.linkedin.com/in/bhavesh-goyal/
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	ViewPropTypes,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MultiSelectView extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {
			
		}
	}
	static propTypes = {
		...(ViewPropTypes || View.PropTypes),
		
	}
	
	render() {
		return (
			<View/>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});