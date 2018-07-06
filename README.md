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
<!-- - [API](#api) -->

## Demo  

![Screenshots](https://github.com/bgoyal2222/react-native-multiselect-view/blob/master/demo.gif)

## Installation

* 1.Run `npm i react-native-multiselect-view --save`
* 2.`import MultiSelectView from 'react-native-multiselect-view'`  


## Getting started  

Add `react-native-multiselect-view` to your js file.   

`import MultiSelectView from 'react-native-multiselect-view'`  

Inside your component's render method, use MultiSelectView:   


<!-- ### Basic usage  

```javascript
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>this.onClick(data)}
    isChecked={data.checked}
    leftText={leftText}
/>;
```

### Custom CheckBox   

```javascript
renderCheckBox(data) {
    var leftText = data.name;
    return (
    <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={()=>this.onClick(data)}
        isChecked={data.checked}
        leftText={leftText}
        checkedComponent={<Text>1</Text>}
        unCheckedComponent={<Text>0</Text>}
    />);
}
```

## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | ViewPropTypes.style  | true |   |   Custom style checkbox
leftText | PropTypes.string |true |   | Custom left Text
leftTextStyle  |  Text.propTypes.style | true |  | Custom left Text style
rightText | PropTypes.string |true |   | Custom right Text
rightTextView | PropTypes.element | true |   | Custom right TextView
rightTextStyle  | Text.propTypes.style | true |  | Custom right Text style
checkedComponent  |  PropTypes.element  | true  | Icon | Custom  checked Component
unCheckedComponent  |  PropTypes.element  | true  |  Icon  | Custom  unchecked Component
isChecked  |  PropTypes.bool |  false  |  false  | checkbox checked state
onClick   |  PropTypes.func |  false  |  | callback  function
index | PropTypes.number |false| |key to return in onClick callback
disabled  |  PropTypes.bool            | true  |  false | Disable the checkbox button
checkBoxColor | PropTypes.string | true |   | Tint color of the checkbox image (this props is for both checked and unchecked state)
checkedCheckBoxColor | PropTypes.string | true |   | Tint color of the checked state checkbox image (this prop will override value of `checkBoxColor` for checked state)
uncheckedCheckBoxColor | PropTypes.string | true |   | Tint color of the unchecked state checkbox image (this prop will override value of `checkBoxColor` for unchecked state) -->




**MIT Licensed**
