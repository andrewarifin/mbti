import React, {Component} from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View
} from 'react-native'

// var Router = require('react-native-router')
var BigButton = require('../components/bigButton')

class BigButtonContainer extends Component{
  goToLearnMore() {
    this.props.navigator.push({
      id: 'learnmore'
    });
  }
  goToSignUp() {
    this.props.navigator.push({
      id: 'signup'
    });
  }
  render() {
    console.log(this.props.navigator)
    return (
      <View>
        <BigButton name = 'Take the Test' onPressButton = {console.log('hello')}/>
        <BigButton name = 'Learn More' onPressButton = {this.goToLearnMore.bind(this)}/>
        <BigButton name = 'Sign Up' onPressButton = {this.goToSignUp.bind(this)} />
      </View>
    );
  }
}

module.exports = BigButtonContainer
