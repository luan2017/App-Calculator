import React, { Component } from 'react';       //importações React

import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native'; // importacões de tipos que minha app vai conter


export default class InputNumberButton extends Component {            // exportando minha classe dos botões
  render() {
    const {value, handleOnPress} = this.props;
    return ( 
        <TouchableOpacity style={styles.container} onPress={() => handleOnPress(value)} >     
          <Text style={styles.text}>{value}</Text>    
        </TouchableOpacity>
    );  //TouchableOpacity : Um wrapper para quando pressionar o Botão a opacidade é diminuída, dando efeito de clique.
  }
}

const styles = StyleSheet.create({          // criando a variável dos meus estilos
  container: {
    flex: 1,                                 // tamanho do container
    margin: 1,                              // margem da borda
    backgroundColor: 'rgba(255, 255, 255, 0.1)',      // Os valores de cores RGBA especifica a opacidade de uma cor.
    justifyContent: 'center',               // centralizar os botões no meio
    alignItems: 'center'                    // centralizar os botões no meio
  },
  text: {
    color: 'white',                  // Cor dos botões
    fontSize: 50,                   // Tamanho da Fonte dos meus botões 
    fontWeight: 'bold'              // Deixando meus botões em Negrito

  }

});