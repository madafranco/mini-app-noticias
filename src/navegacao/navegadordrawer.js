import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import NavegadorAbas from './navegadorabas';
import Sobre from '../telas/sobre';

const Menu = createDrawerNavigator();

export default function NavegadorDrawer() {
  return (
    <Menu.Navigator>
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