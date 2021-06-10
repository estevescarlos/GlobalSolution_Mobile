import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'


class BotaoMenu extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={ this.props.pagina }
                style={ this.props.estiloTouch }>
                <Text style={ this.props.estiloText }>
                { this.props.texto || 'Texto padrão'}
                </Text>
          </TouchableOpacity>
        )
    }
}

export default BotaoMenu