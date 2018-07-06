/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MultiSelectView from 'react-native-multiselect-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

var LoremIpsum1 = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
  'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
  'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
  'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
  'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
  'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
  'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
  'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
  'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
  'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
  'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque'
];
var LoremIpsum2 = [
  1, 2, 3
];
var LoremIpsum = [
  { id: 1, value: 'fusce' }, { id: 1, value: 'augue' }];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.onTouch = this.onTouch.bind(this);
    this.state = {
      value: true,
      ex1: '',
      ex2: '',
      ex3: '',
    }
  }
  onTouch() {
    this.setState({ value: !this.state.value });
  }
  onSelectionStatusChange(status, index) {
    console.log(status, index);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.txt}>Example 1 for array of json objects and default Styles</Text>
          <MultiSelectView
            ref='list1'
            onSelectionStatusChange={this.onSelectionStatusChange}
            data={LoremIpsum}
            valueKey={'value'}
          />
          <TouchableOpacity onPress={() => { console.log(this.refs.list1.selectedItems()); }}>
            <View style={styles.button}>
              <Text style={styles.text1}>Log selected items of Example 1</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.txt}>Example 2 for array of strings and custom Styling</Text>
          <MultiSelectView
            ref='list2'
            data={LoremIpsum1}
            activeContainerStyle={styles.activeCom}
            inactiveContainerStyle={styles.inactiveCom}
            activeTextStyle={styles.activeText}
            inactiveTextStyle={styles.inactiveText}
          />
          <TouchableOpacity onPress={() => { console.log(this.refs.list2.selectedItems()); }} >
            <View style={styles.button}>
              <Text style={styles.text1}>Log selected items of Example 2</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.txt}>Example 3 with array of numbers and custom Icons</Text>
          <MultiSelectView
            ref='list3'
            data={LoremIpsum2}
            activeIcon={<Ionicons name='md-checkmark-circle' size={16} style={styles.icon} />}
            inactiveIcon={<Ionicons name='md-log-in' size={16} style={styles.icon} />}
          />
          <TouchableOpacity onPress={() => { console.log(this.refs.list3.selectedItems()); }} >
            <View style={styles.button}>
              <Text style={styles.text1}>Log selected items of Example 3</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.margin} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 10,
    borderWidth: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  space: {
    marginBottom: 10,
  },
  txt: {
    color: '#000',
    fontSize: 16,
    padding: 10
  },
  button: {
    alignItems: 'center',
  },
  text1: {
    backgroundColor: '#CFDBD5',
    padding: 10,
    borderWidth: 1,
    color: 'black',
  },
  activeCom: {
    backgroundColor: '#EAD94C',
  },
  inactiveCom: {
    backgroundColor: '#F0F7EE',
  },
  activeText: {
    color: 'white',
  },
  inactiveText: {
    color: '#000',
  },
  icon: {
    marginTop: 3,
    width: 20,
    color: 'black'
  },
  margin: {
    marginBottom: 20,
  }


});
