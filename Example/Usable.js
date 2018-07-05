import React, { Component } from 'react';
import { Dimensions,View, StyleSheet, Alert, onPress, TouchableOpacity, ScrollView,Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


export default class Usable extends React.Component{
	
	constructor(props){
		super(props);
		this.onTouch=this.onTouch.bind(this);
		this.state={
			value:true,
			color:true,
		}
	}

	onTouch(){
		this.setState({ value:!this.state.value});
		this.setState({color:!this.state.color});
	}


	render(){
		const {text,style,props,TextStyle,ContainerStyle} = this.props;
	return(

		<TouchableOpacity onPress={this.onTouch}>
			<View style={[styles.mainContainer,style]}>	
				<View style={[styles.container,{backgroundColor:this.state.color?'white':'red'},ContainerStyle]}>
					<Text style={[styles.text,TextStyle]}>{text}</Text>
					{this.state.value?
						<Entypo name='plus' color={'black'} size={25} />:
						<Entypo name='cross' color={'black'} size={25} />
					}		
				</View>
			</View>
		</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create(
{
	mainContainer:{
		backgroundColor:'white',
	},

	container:{
		paddingVertical:10,
		paddingHorizontal:20,
		borderWidth:1,
		flexDirection:'row',
		justifyContent:'space-between',
	},

	text:{
		fontSize:20,
		color:'black',
	}

});