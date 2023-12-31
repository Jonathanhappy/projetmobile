import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 30, color: 'blue' }}>Bonjour à tous</Text>
      </View>
    );
  }
}