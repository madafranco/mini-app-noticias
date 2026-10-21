import { FlatList } from 'react-native';
import CardNoticia from '../componentes/cardnoticia';

export default function ListaNoticias({ route, navigation }) {
  const { noticias } = route.params;

  return (
    <FlatList
      data={noticias}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardNoticia
          noticia={item}
          aoPressionar={() => navigation.navigate('DetalheNoticia', { noticia: item })}
        />
      )}
    />
  );
}