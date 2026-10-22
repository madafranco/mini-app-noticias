import { FlatList } from 'react-native';
import CardNoticia from '../componentes/cardnoticia';

export default function ListaNoticias({ route, navigation }) {
  const { noticias } = route.params;

  return (
    <FlatList
      data={noticias}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        maxWidth: 800,
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 8,
      }}
      renderItem={({ item }) => (
        <CardNoticia
          noticia={item}
          aoPressionar={() => navigation.navigate('DetalheNoticia', { noticia: item })}
        />
      )}
    />
  );
}