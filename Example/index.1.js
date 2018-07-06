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
	TouchableOpacity,
	ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListItem from './ListItem';

export default class MultiSelectView extends Component {
	constructor(props) {
		super(props);
		this.onTouch = this.onTouch.bind(this);
		this.state = {
			data: []
		}
	}
	static propTypes = {
		...(ViewPropTypes || View.PropTypes),
		data: PropTypes.array
	}
	static getDerivedStateFromProps(nextProps, nextState) {
		if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
			const { data } = nextProps;
			const oldData = this.props == undefined ? [] : this.props.data;
			if (oldData.length != data.length) {
				data = data.map(
					(item) => {
						return { value: item, checked: false };
					}
				)
			}
			return { data };
		}
	}
	onTouch(status, index) {
		const { data } = this.state;
		data[index].checked = status;
		this.setState({ data });
	}
	render() {
		const { data } = this.state;
		return (
			<ScrollView>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, padding: 15 }}>
					{data.map((item, index) => <ListItem key={index} index={index} text={item.value} checked={item.checked} onTouch={this.onTouch} />)}
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});