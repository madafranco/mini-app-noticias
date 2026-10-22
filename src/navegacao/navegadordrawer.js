import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import NavegadorAbas from './navegadorabas';
import Sobre from '../telas/sobre';
import BotaoTema from '../componentes/botaotema';
import { fonteTitulo } from '../tema';

const Menu = createDrawerNavigator();

export default function NavegadorDrawer() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerRight: () => <BotaoTema />,
        headerTitleStyle: { fontFamily: fonteTitulo, fontSize: 22 },
        drawerLabelStyle: { fontFamily: fonteTitulo, fontSize: 16 },
      }}
    >
      <Menu.Screen
        name="Noticias"
        component={NavegadorAbas}
        options={{
          title: 'Notícias',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Menu.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Menu.Navigator>
  );
}