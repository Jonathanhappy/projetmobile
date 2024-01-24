/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableHighlight} from 'react-native';
import Style from './component/Style';

export default class App extends Component {
  state = {
    username: 'Jonathan',
    password: '',
  };

  login = () => {
    alert(
      'Username : ' +
        this.state.username +
        '\nPassword : ' +
        this.state.password,
    );
  };

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
          value={this.state.username}
          onChangeText={text => {
            this.setState({username: text});
          }}
        />
        <TextInput
          style={Style.inputMDB}
          placeholder={'Password'}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={text => {
            this.setState({password: text});
          }}
        />
        <TouchableHighlight
          style={Style.btnLogin}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => this.login()}>
          <Text>Se connecter</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
