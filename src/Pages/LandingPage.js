import React, {Component} from 'react'
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Navigator,
  TabBarIOS,
  DatePickerIOS,
  TouchableHighlight,
  Image
} from 'react-native';

var BigButtonContainer = require('../containers/BigButtonContainer')

const styles = require('../Styles/styles')

class LandingPage extends Component {
  render() {
    return (
      <View>
        <View style = {styles.titleContainer}>
          <Text style = {styles.titleTest1}>Welcome to the</Text>
          <Text style = {styles.titleText2}>Meyer's Brigg Test</Text>
        </View>
        <View style = {styles.container}>
          <Image style = {styles.logo} source = {require('../Resources/Brain.png')} />
          <BigButtonContainer navigator = {this.props.navigator}/>
         </View>
       </View>
    );
  }
}

module.exports = LandingPage


// class MBProject extends Component{
//   render() {
//     return (
//
//     );
//   }
// }
