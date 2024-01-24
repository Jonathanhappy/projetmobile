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
import Style1 from './Style';
import Btn from './Bouton';

export default class App extends Component {
  state = {
    nom: '',
    prenom: '',
    email: '',
    fonction: '',
    telephone: '',
    pays: '',
    utilisateur: '',
    motdepass: '',
  };

  Ajouter = () => {

   this.props.navigation.navigate('Liste')
  };
  Annuler = () => {
    this.setState({
      nom: '',
      prenom: '',
      email: '',
      fonction: '',
      telephone: '',
      pays: '',
      utilisateur: '',
      motdepass: '',
    });
  };

  render() {
    return (
      <View style={Style1.viewGlobal}>
        {/* 
      <View style={Style1.row}>
        <Text> Nom: </Text>
        <TextInput
          style={Style1.inputAjout}
          value={this.state.nom}
          //placeholder={'Nom'}
          onChangeText={text => this.setState({nom: text})}
    />
      </View>
    */}
        <TextInput
          style={Style1.inputAjout}
          value={this.state.nom}
          placeholder={'Nom'}
          onChangeText={text => this.setState({nom: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.prenom}
          placeholder={'Prenom'}
          onChangeText={text => this.setState({prenom: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.telephone}
          placeholder={'Telephone'}
          keyboardType={'numeric'}
          onChangeText={text => this.setState({telephone: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.fonction}
          placeholder={'Fonction'}
          onChangeText={text => this.setState({fonction: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.email}
          placeholder={'Email'}
          keyboardType={'email-address'}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.pays}
          placeholder={'Pays'}
          onChangeText={text => this.setState({pays: text})}
        />
        <TextInput
          style={Style1.inputAjout}
          value={this.state.utilisateur}
          placeholder={'Utilisateur'}
          onChangeText={text => this.setState({utilisateur: text})}
        />

        <TextInput
          style={Style1.inputAjout}
          value={this.state.motdepass}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
          maxLength={10}
          onChangeText={text => this.setState({motdepass: text})}
        />
        {/* <View style={Style1.row}>
          <TouchableHighlight
            onPress={() => this.Ajouter()}
            style={Style1.btnAjout}>
            <Text style={Style1.btnText}>Ajouter</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.Annuler()}
            style={Style1.btnAjout}>
            <Text style={Style1.btnText}>Annuler</Text>
          </TouchableHighlight>
       </View>*/}
        <View style={Style1.row}>
          <Btn text={'Ajouter'} action={this.Ajouter} />
          <Btn text={'Annuler'} action={this.Annuler} />
        </View>
      </View>
    );
  }
}
