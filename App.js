
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
    
//importando class dos Botões
import InputNumberButton from './InputNumberButton' 

//criando as const dos meus botões
const buttons = [ 
  [ 'CLEAR', 'DEL'],
  [7, 8, 9, '/'],
  [4, 5, 6, 'x'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+']
];

export default class App extends Component {

  //criando um render para os meus botões
  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
          key={'btn-' + buttonIndex} />
      });
      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });
    return layouts
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>0</Text>
          </View>

          <View style={styles.inputContainer}>

          </View>
      </View>
    );
  }
}

// Estilizações dos meus dados do componente
const styles = StyleSheet.create({
  container: {                  // container principal
    flex: 2,
  },
  resultContainer: {
    flex: 2,
    //justifyContent: 'center',
    backgroundColor: '#4169E1'  // container secundario Azul Claro
  },
  inputContainer: {
    flex: 8,    
    backgroundColor: '#191970'  // container secundario azul Escuro
  },
  resultText: {                 // container do Numero De Entrada
    color: 'white',             
    fontSize: 80,               // Tamanho da fonte
    fontWeight: 'bold',         // linha em Negrito
    padding: 20,                // Altura do meu Texto
    textAlign: 'right'          //lado que meu numero vai ficar
  }

});
