import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTema, fonteTitulo } from '../tema';

export default function Sobre({ navigation }) {
  const { cores } = useTema();
  const estilos = criarEstilos(cores);

  return (
    <View style={estilos.container}>
      <Image source={require('../../assets/icon.png')} style={estilos.imagem} />
      <Text style={estilos.titulo}>Sobre o aplicativo</Text>
      <View style={estilos.linha} />
      <Text style={estilos.descricao}>
        Este é um mini aplicativo de notícias desenvolvido como trabalho da disciplina de
        desenvolvimento mobile. Ele reúne notícias do Brasil em duas categorias, Tecnologia
        e Esportes, e permite abrir cada uma delas para ler o conteúdo completo. O projeto
        serve para praticar a navegação com Drawer, abas e pilha de telas no React Native.
      </Text>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Noticias')}
      >
        <Text style={estilos.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const criarEstilos = (cores) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 24,
      maxWidth: 600,
      width: '100%',
      alignSelf: 'center',
    },
    imagem: {
      width: 140,
      height: 140,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: cores.destaque,
      marginBottom: 20,
    },
    titulo: {
      fontFamily: fonteTitulo,
      fontSize: 26,
      fontWeight: 'bold',
      color: cores.texto,
    },
    linha: {
      height: 3,
      width: 60,
      backgroundColor: cores.destaque,
      marginVertical: 14,
    },
    descricao: {
      fontSize: 16,
      lineHeight: 26,
      textAlign: 'center',
      color: cores.textoSecundario,
      marginBottom: 28,
    },
    botao: {
      backgroundColor: cores.destaque,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
    },
    textoBotao: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 1,
    },
  });