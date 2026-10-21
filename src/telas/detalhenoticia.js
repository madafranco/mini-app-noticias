import { useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';

export default function DetalheNoticia({ route, navigation }) {
  const { noticia } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: noticia.titulo });
  }, [navigation, noticia]);

  return (
    <ScrollView>
      <Text>{noticia.titulo}</Text>
      <Text>{noticia.conteudo}</Text>
      <Text>Fonte: {noticia.fonte}</Text>
    </ScrollView>
  );
}