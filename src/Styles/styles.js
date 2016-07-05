'use strict'

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  button: {
    height: 57,
    width: 229,
    backgroundColor: '#00B2CA',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2}
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 5
  },
  titleContainer: {
    backgroundColor: '#1D4E89',
    height: 124
  },
  titleTest1: {
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 30
  },
  titleText2: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  logo: {
    margin: 20,
    height: 244,
    width: 339,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2}
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  signUpWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  textInput: {
    height: 60,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 15,
    borderRadius: 8
  },
  navContainer: {
    flex: 1
  }
});
