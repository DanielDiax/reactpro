// esta es la estructura basica de react
import React, {Component} from 'react';  // Importes principales 
import { View, StyleSheet } from 'react-native';// Importes principales 


class home extends Component { //Creacion de clase de tipo componente
  render(){
    return(
      <View style = {{flex: 1, backgroundColor: 'blue',}}>
        <View style = {{width: 400 , height: 400, backgroundColor: 'red'}}>
              
        </View>
      </View>
    );
    
  }
}

const estilos = StyleSheet.create({ //Estilos de el componente



});


export default home; // se exporta el contenido de la clase home de tipo componente