import React, {Component, PropTypes} from 'react'
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'


const styles = require('../Styles/styles')

const BigButton = (props) => (
  <TouchableHighlight style = {styles.button}
    underlayColor = '#F79256'
    onPress = {props.onPressButton}
    >
    <Text style = {styles.buttonText}>{props.name}</Text>
  </TouchableHighlight>
)

// BigButton.propTypes = { name: PropTypes.string }

module.exports = BigButton
