var React = require('react');

module.exports = {
	// export react methods as a reference
	...React,
	
	// export the classes
	StyleSheet: require('./classes/StyleSheet'),
	AppRegistry: require('./classes/AppRegistry'),
	PixelRatio: require('./classes/PixelRatio'),
	AsyncStorage: require('./classes/AsyncStorage'),
	
	// export the components
	View: require('./components/View'),
	ScrollView: require('./components/ScrollView'),
	Image: require('./components/Image'),
	Text: require('./components/Text'),
	TextInput: require('./components/TextInput'),
	TouchableWithoutFeedback: require('./components/TouchableWithoutFeedback'),
	TouchableOpacity: require('./components/TouchableOpacity'),
	PickerIOS: require('./components/PickerIOS'),
	
	// todo components
	TouchableHighlight: require('./components/TouchableWithoutFeedback')
};