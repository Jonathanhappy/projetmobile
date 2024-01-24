import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import style from './Style';
const CustomButton = props => {
  return (
    <TouchableHighlight onPress={props.action} style={style.btnAjout}>
      <Text style={style.btnText}>{props.text}</Text>
    </TouchableHighlight>
  );
};
export default CustomButton;
