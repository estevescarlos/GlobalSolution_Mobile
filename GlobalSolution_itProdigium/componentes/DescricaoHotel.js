import React from 'react'
import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Linking
} from 'react-native'

import BotaoMenu from './BotaoMenu'

{/* Imagens */ }
import endereco from '../assets/img/pin.png'
import cifrao from '../assets/img/dollar.png'
import tel from '../assets/img/phone.png'

const PAGE_DESCRICAO = 0
const PAGE_LOCALIZACAO = 1
const PAGE_AVALIAR = 2

class DescricaoHotel extends React.Component {

  state = {
    paginaAtual: PAGE_DESCRICAO,
  }

  paginaDescricao = () => this.setState({ paginaAtual: PAGE_DESCRICAO })
  paginaLocalizacao = () => this.setState({ paginaAtual: PAGE_LOCALIZACAO })
  paginaAvaliar = () => this.setState({ paginaAtual: PAGE_AVALIAR })

  render() {

    const estiloBotao = estilos.menuBotao
    const estiloBotaoAtivo = [estilos.menuBotaoAtivo]

    return (
      <SafeAreaView>

        <Text style={estilos.descricaoNome}>
          {this.props.nomeHotel}
        </Text>

        <View style={estilos.menu}>
          <BotaoMenu
            pagina={this.props.voltar}
            estiloText={estilos.descricaoVoltar}
            texto="&lt; VOLTAR" />

          <BotaoMenu
            pagina={this.paginaDescricao}
            estiloText={this.state.paginaAtual === PAGE_DESCRICAO ? estiloBotaoAtivo : estiloBotao}
            texto="Descrição" />

          <BotaoMenu
            pagina={this.paginaLocalizacao}
            estiloText={this.state.paginaAtual === PAGE_LOCALIZACAO ? estiloBotaoAtivo : estiloBotao}
            texto="Localização" />
        </View>

        {/*DESCRIÇÃO*/}
        { this.state.paginaAtual === PAGE_DESCRICAO && (
          <View style={estilos.descricao}>
            <Image
              source={{ uri: this.props.imagemHotel }}
              style={estilos.descricaoImagem} />

            <Image
              source={{ uri: this.props.estrelasHotel }}
              style={estilos.imagemEstrelas} />

            {/* BREVE DESCRIÇÃO */}
            <View>
              <Text style = {estilos.descricaoText}> {this.props.descricao} </Text>
            </View>

            {/* TELEFONE */}
            <View style={estilos.descricaoInformacao}>
              <Image
                source={tel}
                style={estilos.icone} />

              <Text style={estilos.descricaoTelefone}>
                {this.props.telefone}
              </Text>
            </View>

            {/* VALOR */}
            <View style={estilos.descricaoInformacao}>
              <Image
                source={cifrao}
                style={estilos.icone} />

              <Text style={estilos.descricaoValor}>
                {this.props.valor}
              </Text>
            </View>

            <Button
              color='red'
              title='Site Oficial'
              onPress={ ()=> Linking.openURL(this.props.siteOficial)} />
          </View>
        )}


        {/*LOCALIZAÇÃO*/}
        { this.state.paginaAtual === PAGE_LOCALIZACAO && (
          <View style={estilos.descricao}>
            <Image
              source={{ uri: this.props.imagemLocalizacao }}
              style={estilos.descricaoImagem} />
            
            {/* BREVE DESCRIÇÃO DA LOCALIZAÇÃO */}
            <View>
              <Text style = {estilos.descricaoText}> {this.props.descricaoLocalizacao} </Text>
            </View>
            
            {/* ENDEREÇO */}
            <View style={estilos.descricaoInformacao}>
              <Image
                source={endereco}
                style={estilos.icone} />

              <Text style={estilos.descricaoEndereco}>
                {this.props.endereco}
              </Text>
            </View>
          </View>
        )}

      </SafeAreaView>
    )
  }
}

const estilos = StyleSheet.create({

  descricao:{
    borderBottomColor : '#CCC',
    borderBottomWidth : 1,
    padding : 6,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 4,},
    shadowOpacity: 1,
    shadowRadius: 4.65,
    elevation: 5,
    margin: 4,
    borderRadius: 8
  },
  descricaoInformacao: {
    flexDirection: 'row',
    margin: 8
  },
  descricaoText:{
    fontSize: 18,
    padding: 8,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 8,
    textAlign: 'justify'
  },
  descricaoEndereco: {
    fontSize: 18,
    paddingRight: 24,
    marginRight: 8
  },
  descricaoTelefone: {
    marginTop: 4,
    fontSize: 18
  },
  descricaoImagem: {
    height: 200
  },
  descricaoNome: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 8
  },
  descricaoValor: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4
  },
  icone: {
    height: 40,
    width: 40,
    marginRight: 8
  },
  imagemEstrelas: {
    height: 50,
    width: 150,
    alignSelf: 'center'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    padding: 8
  },
  descricaoVoltar: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 8
  },
  menuBotao: {
    color: 'black',
    marginLeft: 18,
    fontSize: 20
  },
  menuBotaoAtivo: {
    color: 'red',
    borderBottomColor : 'red',
    borderBottomWidth : 2,
    paddingBottom: 8,
    marginLeft: 18,
    fontWeight: 'bold',
    fontSize: 20
  }

})

export default DescricaoHotel
