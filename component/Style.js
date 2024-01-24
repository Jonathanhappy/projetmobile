import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  viewGlobal: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    color: 'blue',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  imgLogin: {
    width: 120,
    height: 120,
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 60,
    margin: 40,
  },
  inputMDB: {
    width: 220,
    height: 45,
    borderBottomWidth: 2,
    borderColor: 'green',
    margin: 10,
    padding: 4,
  },
  MDBDirectionRow:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLogin: {
    width: 220,
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 50,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAjout:{
    backgroundColor:'#092B86',
    width:120,
    height:45,
    margin:15,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:40,

  },
  btnText:{
    color:'white',
    fontWeight:"700"
  },
});

module.exports = style;
