import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'

class OpcaoHotel extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.descricaoHotel}
                style={ estilos.hotel }>
                
                <Image 
                  source={{ uri : this.props.imagemHotel }}
                  style={ estilos.hotelImagem } />

                <View>
                  <Text style={ estilos.hotelNome }>
                    { this.props.nomeHotel }
                  </Text>
                  
                  <Text style={ estilos.hotelValor }>
                    { this.props.valorHotel }
                  </Text>

                  <Image 
                  source={ { uri: this.props.imagemEstrelas }}
                  style={ estilos.hotelEstrelas } />
                </View>
                
              </TouchableOpacity>
        )
    }
}

const estilos = StyleSheet.create({
    hotel : {
      borderBottomColor : '#CCC',
      borderBottomWidth : 1,
      flexDirection : 'row',
      padding : 16,
      shadowColor: "black",
      shadowOffset: {
        width: 5,
        height: 4,},
      shadowOpacity: 1,
      shadowRadius: 4.65,
      elevation: 6,
      margin: 4,
      borderRadius: 8
    },
    hotelImagem : {
      height : 80,
      marginRight : 6,
      width : 100
    },
    hotelNome : {
      fontSize : 18,
      fontWeight : 'bold'
    },
    hotelValor : {
      marginTop : 8,
      fontSize : 18
    },
    hotelEstrelas : {
      height : 30,
      width : 100
    }
  })
export default OpcaoHotel