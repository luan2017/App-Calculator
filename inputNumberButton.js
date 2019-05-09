import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';


export default class InputNumberButton extends Component {
  render() {
    const {value, handleOnPress} = this.props;

    return (
        <TouchableOpacity 
          style={styles.container}
          onPress={()=> handleOnPress(value)} >

        <Text style={styles.text}>{value}</Text>        
        </TouchableOpacity>
    );
  }
}

const styles = Stylesheet.create({
  container: {
    fkex 1,
    margin: 1,
    backgroundColor: 'rbga(255, 255, 255, 0.1)',
    justfyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white,',
    fontSize: 26
  }

});
