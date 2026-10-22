import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTema, fonteTitulo } from '../tema';

export default function CardNoticia({ noticia, aoPressionar }) {
  const { cores } = useTema();
  const estilos = criarEstilos(cores);

  return (
    <TouchableOpacity style={estilos.card} onPress={aoPressionar}>
      <Text style={estilos.titulo}>{noticia.titulo}</Text>
      <Text style={estilos.resumo}>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}

const criarEstilos = (cores) =>
  StyleSheet.create({
    card: {
      backgroundColor: cores.superficie,
      borderLeftWidth: 4,
      borderLeftColor: cores.destaque,
      padding: 16,
      marginHorizontal: 16,
      marginVertical: 8,
    },
    titulo: {
      fontFamily: fonteTitulo,
      fontSize: 20,
      fontWeight: 'bold',
      color: cores.texto,
      marginBottom: 8,
    },
    resumo: {
      fontSize: 14,
      color: cores.textoSecundario,
    },
  });