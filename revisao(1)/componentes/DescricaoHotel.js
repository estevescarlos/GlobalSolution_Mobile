import React from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    Button
} from 'react-native'

{/* Imagens */}
import endereco from '../assets/img/pin.png'
import cifrao from '../assets/img/dollar.png'
import tel from '../assets/img/phone.png'

class DescricaoHotel extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Text style={ estilos.descricaoNome }>
                { this.props.nomeHotel }
                </Text>

                <Image 
                source={{ uri : this.props.imagemHotel }}
                style={ estilos.descricaoImagem } />

                <Image 
                source={{ uri : this.props.estrelasHotel }}
                style={ estilos.descricaoEstrelas } />

                {/* ENDEREÇO */}
                <View style={ estilos.descricao }>
                <Image 
                    source={ endereco }
                    style={ estilos.icone } />
                
                <Text style={ estilos.descricaoEndereco }>
                    { this.props.endereco }
                </Text>
                </View>

                {/* TELEFONE */}
                <View style={ estilos.descricao }>
                <Image 
                    source={ tel }
                    style={ estilos.icone } />
                
                <Text style={ estilos.descricaoTelefone}>
                    { this.props.telefone }
                </Text>
                </View>

                {/* VALOR */}
                <View style={ estilos.descricao }>
                <Image 
                    source={ cifrao }
                    style={ estilos.icone } />
                
                <Text style={ estilos.descricaoValor }>
                    { this.props.valor }
                </Text>

                </View>

                <Button 
                color='#2ca42c' 
                title='Site Oficial' 
                onPress/>

            </React.Fragment>
        )
    }
}

const estilos = StyleSheet.create({

    
descricao : {
    flexDirection : 'row',
    margin: 8
  },
  descricaoEndereco : {
    fontSize : 18,
    paddingRight: 4
  },
  descricaoTelefone : {
    marginTop : 4,
    fontSize : 18
  },
  descricaoVoltar : {
    alignSelf : 'flex-start'
  },
  descricaoImagem : {
    height : 200
  },
  descricaoNome : {
    fontSize : 22,
    fontWeight : 'bold',
    alignSelf: 'center',
    marginBottom : 8
  },
  descricaoValor : {
    fontSize : 20,
    fontWeight : 'bold',
    marginTop: 4
  },
  icone: {
    height : 40,
    width : 40,
    marginRight: 8
  }
})

export default DescricaoHotel
