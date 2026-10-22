import { useLayoutEffect } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useTema, fonteTitulo } from '../tema';

export default function DetalheNoticia({ route, navigation }) {
  const { noticia } = route.params;
  const { cores } = useTema();
  const estilos = criarEstilos(cores);

  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>{noticia.titulo}</Text>
      <View style={estilos.linha} />

      {noticia.conteudo.map((frase, indice) => (
        <View key={indice} style={estilos.item}>
          <Text style={estilos.marcador}>•</Text>
          <Text style={estilos.textoItem}>{frase}</Text>
        </View>
      ))}

      <Text style={estilos.fonte}>Fonte: {noticia.fonte}</Text>
    </ScrollView>
  );
}

const criarEstilos = (cores) =>
  StyleSheet.create({
    container: {
      padding: 20,
      maxWidth: 800,
      width: '100%',
      alignSelf: 'center',
    },
    titulo: {
      fontFamily: fonteTitulo,
      fontSize: 28,
      fontWeight: 'bold',
      color: cores.texto,
      marginBottom: 12,
    },
    linha: {
      height: 3,
      width: 60,
      backgroundColor: cores.destaque,
      marginBottom: 16,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    marcador: {
      fontSize: 17,
      lineHeight: 28,
      color: cores.destaque,
      marginRight: 10,
    },
    textoItem: {
      flex: 1,
      fontSize: 17,
      lineHeight: 28,
      color: cores.texto,
    },
    fonte: {
      fontSize: 12,
      fontStyle: 'italic',
      color: cores.textoSecundario,
      marginTop: 24,
    },
  });