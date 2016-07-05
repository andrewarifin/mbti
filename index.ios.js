/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TabBarIOS,
  DatePickerIOS,
  TouchableHighlight,
  Image
} from 'react-native';

import BigButtonContainer from './src/containers/BigButtonContainer'
var LandingPage = require('./src/Pages/LandingPage')
var LearnMore = require('./src/Pages/LearnMore')
var SignUp = require('./src/containers/SignUpContainer')

const styles = require('./src/Styles/styles')

class mbti extends Component{
  render() {
    return (
      <Navigator
        style = {styles.navContainer}
        initialRoute = {{id: 'landing'}}
        renderScene ={(route, navigator) => this.navigatorRenderScene(route, navigator) } />
    );
  }

  navigatorRenderScene(route, navigator) {
    const _navigator = navigator
    switch (route.id) {
      case 'landing':
        return (
          <LandingPage navigator = {_navigator}/>
        )
      case 'learnmore':
        return (
          <LearnMore navigator = {_navigator} />
        )
      case 'signup':
        return (
          <SignUp navigator = {_navigator} />
        )
    }
  }
}

mbti.defaultProps = {
  date: new Date()
}


AppRegistry.registerComponent('mbti', () => mbti);
