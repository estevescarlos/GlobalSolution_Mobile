import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'


class BotaoMenu extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={ this.props.pagina }
                style={ this.props.estilo }>
                <Text style={ estilos.menuLinkText }>
                { this.props.texto || 'Texto default'}
                </Text>
          </TouchableOpacity>
        )
    }
}

const estilos = StyleSheet.create({
    menuLinkText : {
        fontSize : 16,
        fontWeight : 'bold'
    }
})

export default BotaoMenu