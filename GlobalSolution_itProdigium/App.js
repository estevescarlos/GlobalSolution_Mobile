import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

{/* Páginas */ }
import Contato from './componentes/pages/Contato'

{/* Json */ }
import hoteis from './assets/json/hoteis.json'

{/* Componentes Personalizados */ }
import BotaoMenu from './componentes/BotaoMenu'
import OpcaoHotel from './componentes/OpcaoHotel'
import DescricaoHotel from './componentes/DescricaoHotel'


const PAGE_ONDE_HOSPEDAR = 0
const PAGE_DESCRICAO_HOTEL = 1
const PAGE_CONTATO = 2

class App extends React.Component {

  state = {
    paginaAtual: PAGE_ONDE_HOSPEDAR,
    hotelAtual: null
  }

  paginaOndeHospedar = () => this.setState({ paginaAtual: PAGE_ONDE_HOSPEDAR })

  paginaContato = () => this.setState({ paginaAtual: PAGE_CONTATO })

  render() {

    const estiloBotao = estilos.menuLink
    const estiloBotaoAtivo = [estilos.menuLink, estilos.menuLinkAtivo]

    return (
      <SafeAreaView>
        <StatusBar backgroundColor='#2ca42c' />

        {/* Header */}
        <View style={estilos.menu}>
          <BotaoMenu
            pagina={this.paginaOndeHospedar}
            estiloTouch={this.state.paginaAtual === PAGE_ONDE_HOSPEDAR ? estiloBotaoAtivo : estiloBotao}
            texto="ONDE SE HOSPEDAR"
            estiloText={estilos.menuLinkText} />

          <BotaoMenu
            pagina={this.paginaContato}
            estiloTouch={this.state.paginaAtual === PAGE_CONTATO ? estiloBotaoAtivo : estiloBotao}
            texto="CONTATO"
            estiloText={estilos.menuLinkText} />
        </View>

        {/* Onde se hospedar */}
        { this.state.paginaAtual === PAGE_ONDE_HOSPEDAR && (
          <FlatList
            data={hoteis}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <OpcaoHotel
                descricaoHotel={() => {
                  this.setState({
                    paginaAtual: PAGE_DESCRICAO_HOTEL,
                    hotelAtual: item
                  })
                }}
                imagemHotel={item.imagem}
                nomeHotel={item.nome}
                valorHotel={item.valor}
                imagemEstrelas={item.estrelas}
              />
            )}
            style={estilos.page} />
        )}

        {/* Descrição do hotel */}
        { this.state.paginaAtual === PAGE_DESCRICAO_HOTEL && (
          <View style={estilos.page}>

            <DescricaoHotel
              voltar={this.paginaOndeHospedar}
              nomeHotel={this.state.hotelAtual.nome}
              imagemHotel={this.state.hotelAtual.imagem}
              estrelasHotel={this.state.hotelAtual.estrelas}
              endereco={this.state.hotelAtual.endereco}
              telefone={this.state.hotelAtual.telefone}
              valor={this.state.hotelAtual.valor}
              imagemLocalizacao={this.state.hotelAtual.mapaLocalizacao}
              descricao={this.state.hotelAtual.descricao}
              descricaoLocalizacao={this.state.hotelAtual.descricaoLocalizacao}
              siteOficial={this.state.hotelAtual.siteOficial}
            />
          </View>
        )}

        {/* Contato */}
        { this.state.paginaAtual === PAGE_CONTATO && (
          <Contato />
        )}
      </SafeAreaView>
    )
  }
}

const estilos = StyleSheet.create({
  menu: {
    backgroundColor: '#EB0B18',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16
  },
  menuLink: {
    borderRadius: 5,
    marginHorizontal: 8,
    padding: 8
  },
  menuLinkAtivo: {
    backgroundColor: '#EE535B'
  },
  menuLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  page: {
    padding: 8,
    marginBottom: 88,
    borderRadius: 20
  }
})

export default App