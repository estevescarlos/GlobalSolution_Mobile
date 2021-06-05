import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

{/* Páginas */}
import Contato from './componentes/pages/Contato'

{/* Json */}
import hoteis from './assets/json/hoteis.json'

{/* Componentes Personalizados */}
import BotaoMenu from './componentes/BotaoMenu'
import OpcaoHotel from './componentes/OpcaoHotel'
import DescricaoHotel from './componentes/DescricaoHotel'


const PAGE_ONDE_HOSPEDAR = 0
const PAGE_DESCRICAO_HOTEL = 1
const PAGE_CONTATO = 2

class App extends React.Component {

  state = {
    paginaAtual : PAGE_ONDE_HOSPEDAR,
    hotelAtual : null
  }

  paginaMaisVendidos = () => this.setState({ paginaAtual : PAGE_ONDE_HOSPEDAR })

  paginaContato = () => this.setState({ paginaAtual : PAGE_CONTATO })

  render() {

    const estiloBotao = estilos.menuLink
    const estiloBotaoAtivo = [ estilos.menuLink, estilos.menuLinkAtivo ]

    return (
      <SafeAreaView>
        <StatusBar backgroundColor='#2ca42c' />

        {/* Header */}
        <View style={ estilos.menu }>
          <BotaoMenu 
            pagina = { this.paginaMaisVendidos}
            estilo = { this.state.paginaAtual === PAGE_ONDE_HOSPEDAR ? estiloBotaoAtivo : estiloBotao}
            texto = "ONDE SE HOSPEDAR" />

          <BotaoMenu 
            pagina = { this.paginaContato }
            estilo = { this.state.paginaAtual === PAGE_CONTATO ? estiloBotaoAtivo : estiloBotao}
            texto = "CONTATO" />
        </View>

        {/* Onde se hospedar */}
        { this.state.paginaAtual === PAGE_ONDE_HOSPEDAR && (
          <FlatList 
            data={ hoteis }
            keyExtractor={ (item) => item.id.toString() }
            renderItem={ ({item}) => (
             
              <OpcaoHotel
                descricaoHotel = {() => {
                  this.setState({
                   paginaAtual : PAGE_DESCRICAO_HOTEL,
                   hotelAtual : item
                  })
              }}
                imagemHotel = {item.imagem}
                nomeHotel = {item.nome}
                valorHotel = {item.valor}
                imagemEstrelas = {item.estrelas}
                />

              ) } 
            style={ estilos.page }/>
        ) }

        {/* Descrição do hotel */}
        { this.state.paginaAtual === PAGE_DESCRICAO_HOTEL && (
          <View style={ estilos.page }>
            <TouchableOpacity 
              onPress={ this.paginaMaisVendidos }
              style={ estilos.descricaoVoltar }>
              <Text>&lt; VOLTAR</Text>
            </TouchableOpacity>

            <DescricaoHotel
              nomeHotel  = {this.state.hotelAtual.nome}
              imagemHotel = {this.state.hotelAtual.imagem}
              estrelasHotel = {this.state.hotelAtual.estrelas}
              endereco = {this.state.hotelAtual.endereco}
              telefone = {this.state.hotelAtual.telefone}
              valor = {this.state.hotelAtual.valor}
           />
            
          </View>
        ) }
        
        {/* Contato */}
        { this.state.paginaAtual === PAGE_CONTATO && (
          <Contato />
        ) }
        
      </SafeAreaView>
    )
  }
}

const estilos = StyleSheet.create({
  menu : {
    backgroundColor : '#312FA8',
    flexDirection : 'row',
    justifyContent : 'center',
    padding : 16
  },
  menuLink : {
    borderRadius : 5,
    marginHorizontal : 8,
    padding : 8
  },
  menuLinkAtivo : {
    backgroundColor : '#4467DB'
  },
  menuLinkText : {
    fontSize : 16,
    fontWeight : 'bold'
  },
  page : {
    padding : 8,
    marginBottom: 88,
    borderRadius: 20
  },
  descricaoEstrelas : {
    height : 50,
    width : 150,
    marginLeft: 114
  },
card : {
  shadowColor: "#999",
  shadowOffset: {
    width: 3,
    height: 5,},
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
  margin: 4
}
})

export default App