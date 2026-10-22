import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaNoticias from '../telas/listanoticias';
import DetalheNoticia from '../telas/detalhenoticia';
import { fonteTitulo } from '../tema';

const Pilha = createNativeStackNavigator();

export default function NavegadorPilha({ noticias }) {
  return (
    <Pilha.Navigator screenOptions={{ headerTitleStyle: { fontFamily: fonteTitulo } }}>
      <Pilha.Screen
        name="ListaNoticias"
        component={ListaNoticias}
        initialParams={{ noticias }}
        options={{ headerShown: false }}
      />
      <Pilha.Screen name="DetalheNoticia" component={DetalheNoticia} />
    </Pilha.Navigator>
  );
}