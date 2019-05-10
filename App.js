import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
    
//importando class dos Botões
import InputNumberButton from './InputNumberButton' 

//criando as const dos meus botões
const buttons = [ 
  [ 'Clear', 'DL', 'H'],             //CLEAR = zerar, DEL: apagar    H: Histórico
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'], 
  ['0', '.', '=', '+']
];

export default class App extends Component {

  constructor() {
    super()
    this.initialState = {
      displayValue: '0',
      operator : null                     //estado do operador operador
    }
    this.state  = this.initialState; 
 }

  //criando um render para os meus botões
  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {      //Matriz dos Botões que vai retornar o valor no container
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {  
        return <InputNumberButton
          value={buttonItems}                               //atribuindo valor aos meus botões
          handleOnPress={this.handleInput.bind(this, buttonItems)}       // {() => {} }  retorna vazio //
          key={'btn-' + buttonIndex} />
      });
      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });
    return layouts
  }

  handleInput = (input) => {                            //definindo um valor inicial a minha calculadora
    const {displayValue, operator} = this.state;
    switch (input) {  //numeros de 0 a 9
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7': 
        case '8':
        case '9':
          this.setState({
            displayValue: (displayValue === '0') ? input : displayValue + input     // se o valor de entrada for =! 0 o valor substitui
          })    
          break;  //operadores lógicos
        case '+':
        case '-':
        case 'x':
        case '/':
          this.setState({
            operator: input,
            displayValue : (operator !== null ? displayValue.substr(0, displayValue.length -1) : displayValue) + input 
                              // condição para não deixar repitir os operadores na mesma sequiencia
          })  
          break;
        case '.':
          let dot = displayValue.slice(-1)          //  pega o ultimo caractere
          this.setState({
            displayValue: dot !== '.' ? displayValue + input : displayValue       // se o ultimo digito for '.' ele não aceita mais o mesmo ponto
          })
          break;
        case 'Clear':
          this.setState(this.initialState);
          break;
        case 'DL':
          let string = displayValue.toString();
          let deletedString = string.substr(0, string.length -1)
          let length = string.length
          this.setState  ({
            displayValue: length == 1 ? '0' : deletedString

          })
    }
    
  }
  
  render() { 
    return (
      <View style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
                {this.state.displayValue}
            </Text>
          </View>

          <View style={styles.inputContainer}> 
            {this.renderButtons()}
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
    justifyContent: 'center',    // centraliza meus numeros mesmo ao girar a tela
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
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'        //Organiza os quadrados dos botões
  }

});