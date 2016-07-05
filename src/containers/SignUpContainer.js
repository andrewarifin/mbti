'use strict'

import React, {Component} from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
  TextInput
} from 'react-native'

const Firebase = require('firebase')

// var app = new Firebase('mbti-test-d6796.firebaseio.com')
import styles from '../Styles/styles'
import BigButton from '../components/bigButton'

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  signUp(){
    Firebase.createUser({
      'email':this.state.email,
      'password': this.state.password
    }, (error, userData) => {
      if (error) {
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }
      } else {
        alert('Your account was created!')
      }

      this.setState({
        email: '',
        password: ''
      });
    })
  }
  render() {
    return(
      <View style={styles.signUpWrapper}>
        <Text>Hello</Text>
        <TextInput style = {styles.textInput}
          // value = {this.state.email}
          placeholder = {'Email Address'}/>
        <TextInput style = {styles.textInput}
          placeholder = {'Password'}
          secureTextEntry = {true} />
        <BigButton name = 'Sign Up'/>
      </View>
    )
  }
}

module.exports = SignUpContainer
