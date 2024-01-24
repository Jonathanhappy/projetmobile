/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Style from './component/Style';

export default class App extends Component {
  render() {
    return (
      <View style={Style.viewGlobal}>
        <Text style={Style.title}>Starting Mag.</Text>
        <Image
          style={Style.imgLogin}
          //source={{uri:'https://ssl.sitew.org/images/blog/articles/exemples-logos/apple.png'}}
          source={require('./image/orange.jpg')}
        />
        <TextInput 
          style={Style.inputMDB} 
          placeholder={'Username'} 
          value={''} 
        />
        <TextInput
          style={Style.inputMDB}
          placeholder={'Password'}
          secureTextEntry={true}
          value={''}
        />
        <TouchableHighlight
          style={Style.btnLogin}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Connection!')}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
