import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Text: {color: 'white', fontSize: 16},
  viewGlobal: {
    backgroundColor: '#E1F0FD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 30,
  },
  inputLogin: {
    width: 220,
    height: 45,
    borderWidth: 2,
    margin: 10,
    borderColor: 'red',
    padding: 4,
  },
  btnLogin: {
    width: 220,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'blue',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputAjout: {
    width: 300,
    height: 40,
    borderWidth: 2,
    //borderBottomWidth:2,
    padding: 6,
    marginTop: 10,
    borderColor: 'blue',
    borderRadius: 10,
  },
  titre: {
    color: 'blue',
    fontSize: 20,
    marginBottom: 25,
    fontWeight: '900',
  },
  btnAjout:{
    backgroundColor:'#092B86',
    width:120,
    height:45,
    margin:15,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'

  },
  btnText:{
    color:'white',
    fontWeight:"700"
  },
  row:{flexDirection:'row',marginVertical:10,alignItems:'center'}
});

module.exports = styles;
