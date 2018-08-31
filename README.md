# react-native-multiselect-view

[ ![release](https://img.shields.io/badge/release-v1.0.4-blue.svg?maxAge=2592000?style=flat-square)](https://github.com/bgoyal2222/react-native-multiselect-view/releases)
[ ![NPM version](https://img.shields.io/badge/npm%20package-v1.0.4-green.svg?style=flat)](https://www.npmjs.com/package/react-native-multiselect-view)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/bgoyal2222/react-native-multiselect-view/pulls)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://github.com/bgoyal2222/react-native-multiselect-view/blob/master/LICENSE)



MultiSelectView component for react native to select multiple items smoothly with minimum efforts, it works on iOS and Android like a charm.

## Content
- [Demo](#demo)
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)

## Demo  
* [Examples](https://github.com/bgoyal2222/react-native-multiselect-view/tree/master/Example)

![Screenshots](https://github.com/bgoyal2222/react-native-multiselect-view/blob/master/demo.gif)

## Installation

* 1.Run `npm i react-native-multiselect-view --save`
* 2.`import MultiSelectView from 'react-native-multiselect-view'`  


## Getting started  

Add `react-native-multiselect-view` to your js file.   

`import MultiSelectView from 'react-native-multiselect-view'`  

Inside your component's render method, use MultiSelectView:   


### Example 1  

```javascript
<MultiSelectView
    ref='list1'
    onSelectionStatusChange={this.onSelectionStatusChange}
    data={LoremIpsum}
    valueKey={'value'}
/>
```

### Example 2

```javascript
<MultiSelectView
    ref='list2'
    data={LoremIpsum1}
    activeContainerStyle={styles.activeCom}
    inactiveContainerStyle={styles.inactiveCom}
    activeTextStyle={styles.activeText}
    inactiveTextStyle={styles.inactiveText}
/>
```

### Example 3

```javascript
<MultiSelectView
    ref='list3'
    data={LoremIpsum2}
    activeIcon={<Ionicons name='md-checkmark-circle' size={16} style={styles.icon} />}
    inactiveIcon={<Ionicons name='md-log-in' size={16} style={styles.icon} />}
/>
```

## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
activeContainerStyle | View.propTypes.style |true | backgroundColor: '#BDD358',borderColor: 'transparent'|Active or selected Container Style
inactiveContainerStyle| View.propTypes.style | true |  |Inactive Container Style
activeTextStyle | Text.propTypes.style |true | color: '#fff'  | Style for Active Text
inactiveTextStyle | Text.propTypes.style | true |   | Style for Inactive Text 
activeIcon |  PropTypes.element  | true  |  Icon  |  Icon for Active Container
inactiveIcon |  PropTypes.element |  true  |  false  | Icon for Inactive Container 
onSelectionStatusChange  |  PropTypes.func |  true  |  | Function to perform on any item selection state change 
valueKey | PropTypes.string |  false if data is array of object  |   | Text or key to show in container
data    |  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]) |  false  |   | Array of list to be displayed


## Other popular components
https://github.com/bgoyal2222/react-native-checkbox-component



**MIT Licensed**
