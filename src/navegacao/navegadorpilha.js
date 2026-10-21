import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaNoticias from '../telas/listanoticias';
import DetalheNoticia from '../telas/detalhenoticia';

const Pilha = createNativeStackNavigator();

export default function NavegadorPilha({ noticias }) {
  return (
    <Pilha.Navigator>
      <Pilha.Screen
        name="ListaNoticias"
        component={ListaNoticias}
        initialParams={{ noticias }}
      />
      <Pilha.Screen name="DetalheNoticia" component={DetalheNoticia} />
    </Pilha.Navigator>
  );
}