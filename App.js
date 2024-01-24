/* eslint-disable no-alert */
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
  ScrollView,
  StatusBar,
} from 'react-native';
import Style from './component/Style';
import Btn from './component/Bouton';

export default class App extends Component {
  state = {
    name: '',
    fistname: '',
    number: '',
    email: '',
    country: '',
    fonction: '',
    username: '',
    password: '',
  };

  Ajouter = () => {
    alert('Ajouter');
  };

  Annuler = () => {
    this.setState({
      name: '',
      fistname: '',
      number: '',
      email: '',
      country: '',
      fonction: '',
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={Style.scrollView}>
          <View style={Style.viewGlobal}>
            <Text style={Style.title}>Ajouter un participant</Text>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Noms :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.name}
                placeholder={''}
                onChangeText={text => this.setState({name: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Prenom :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.fistname}
                placeholder={''}
                onChangeText={text => this.setState({fistname: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Telephone :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.number}
                placeholder={''}
                keyboardType={'numeric'}
                onChangeText={text => this.setState({number: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Email :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.email}
                placeholder={''}
                keyboardType={'email-address'}
                onChangeText={text => this.setState({email: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Pays :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.country}
                placeholder={''}
                onChangeText={text => this.setState({country: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Fonction :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.fonction}
                placeholder={''}
                onChangeText={text => this.setState({fonction: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Utilisateur :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.username}
                placeholder={''}
                onChangeText={text => this.setState({username: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Text style={{paddingTop: 30}}>Mot de passe :</Text>
              <TextInput
                style={Style.inputMDB}
                value={this.state.password}
                placeholder={''}
                secureTextEntry={true}
                maxLength={10}
                onChangeText={text => this.setState({password: text})}
              />
            </View>
            <View style={Style.MDBDirectionRow}>
              <Btn text={'Ajouter'} action={this.Ajouter} />
              <Btn text={'Annuler'} action={this.Annuler} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
