import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Text: {color: 'white', fontSize: 16},
  viewGlobal: {
    backgroundColor: '#F4F1F9',
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
    borderColor: '#4E06AD',
    padding: 4,
  },
  btnLogin: {
    width: 220,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#4E06AD',
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
    borderColor: '#4E06AD',
    borderRadius: 10,
  },
  titre: {
    color: 'white',
    fontSize: 25,
    marginBottom: 25,
    fontWeight: '900',
  },
  btnAjout: {
    backgroundColor: '#360577',
    width: 120,
    height: 45,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
  },
  row: {flexDirection: 'row', marginVertical: 10, alignItems: 'center'},
  btnHome: {
    backgroundColor: '#F4EBFF',
    width: 280,
    height: 60,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ligneList: {
    flexDirection: 'row',
    backgroundColor: '#D5C8E5',
    borderBottomWidth:2,
    borderColor:'#D5C8E5',
    marginBottom: 5,
    marginHorizontal: 7,
    width: '96%',
    height: 35,
    alignItems: 'center',
  },
  textId: {
    margin: 5,
    width: 50,
  },
  textNom: {
    margin: 5,
    width: 100,
  },
  enteteList: {
    flexDirection: 'row',
    backgroundColor: '#5C17B9',
    margin: 5,
    marginHorizontal: 7,
    width: '96%',
    height: 40,
    alignItems: 'center',
  },
  enteteId: {
    margin: 5,
    width: 50,
    color:'white',
    fontWeight:'bold'
  },
  enteteNom: {
    margin: 5,
    width: 100,
    color:'white',
    fontWeight:'bold'


  },
  btnList:{backgroundColor: 'white', margin: 5, padding: 5},
  homeL:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },icon:{width: 40, height: 40, marginEnd: 10}
});

module.exports = styles;
