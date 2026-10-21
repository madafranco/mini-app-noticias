import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { noticiasTecnologia } from '../dados/noticias';

export default function CardNoticia({ noticia, aoPressionar }) {
  return (
    <TouchableOpacity onPress={aoPressionar}>
      <Text>{noticia.titulo}</Text>
      <Text>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}