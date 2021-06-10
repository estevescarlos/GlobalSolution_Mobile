import React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'

class Contato extends React.Component {
  render() {
    return (
      <ScrollView style={ estilos.page }>
        <Text>Nome:</Text>
        <TextInput style={ estilos.input } />

        <Text>E-mail:</Text>
        <TextInput style={ estilos.input } />

        <Text>Avaliação/Recomendação:</Text>
        <TextInput 
          multiline={ true } 
          textAlignVertical='top'
          style={ [estilos.input, estilos.inputMultiline] } />

        <Button color='#2ca42c' title='Enviar' />
      </ScrollView>
    )
  }
}

const estilos = StyleSheet.create({
  input : {
    borderColor : '#CCC',
    borderRadius : 5,
    borderWidth : 1,
    marginBottom : 8
  },
  inputMultiline : {
    height : 200
  },
  page : {
    padding : 16
  }
})

export default Contato