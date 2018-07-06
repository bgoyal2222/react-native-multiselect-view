# react-native-multiselect-view

[ ![release](https://img.shields.io/badge/release-v1.0.0-blue.svg?maxAge=2592000?style=flat-square)](https://github.com/bgoyal2222/react-native-multiselect-view/releases)
[ ![NPM version](https://img.shields.io/badge/npm%20package-v1.0.0-green.svg?style=flat)](https://www.npmjs.com/package/react-native-multiselect-view)
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
/>```

 ### Example 2

```javascript
<MultiSelectView
    ref='list2'
    data={LoremIpsum1}
    activeContainerStyle={styles.activeCom}
    inactiveContainerStyle={styles.inactiveCom}
    activeTextStyle={styles.activeText}
    inactiveTextStyle={styles.inactiveText}
/>```

  ### Example 3

```javascript
<MultiSelectView
    ref='list3'
    data={LoremIpsum2}
    activeIcon={<Ionicons name='md-checkmark-circle' size={16} style={styles.icon} />}
    inactiveIcon={<Ionicons name='md-log-in' size={16} style={styles.icon} />}
/>```

## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | ViewPropTypes.style  | true |   |   Custom style for container
text | PropTypes.number && PropTypes.string  | false |   |  Text to be displayed in the container
activeContainerStyle | PropTypes.object |true | backgroundColor: '#BDD358',borderColor: 'transparent'|Active Container Style
inactiveContainerStyle| PropTypes.object | true |  |Inactive Container Style
activeTextStyle | PropTypes.object |true | color: '#fff'  | Active Text Style
inactiveTextStyle | PropTypes.object | true |   | Inactive Text Style
checked  |  PropTypes.bool  | False  |  | Checked State
activeIcon |  PropTypes.element  | true  |  Icon  | Active Container Icon
inactiveIcon |  PropTypes.element |  true  |  false  | Inactive Text Icon
onTouch   |  PropTypes.func |  false  |  | OnClick Function





**MIT Licensed**
