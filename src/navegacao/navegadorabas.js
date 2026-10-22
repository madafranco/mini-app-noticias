import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NavegadorPilha from './navegadorpilha';
import { noticiasTecnologia, noticiasEsportes } from '../dados/noticias';
const Abas = createBottomTabNavigator();

export default function NavegadorAbas() {
  return (
    <Abas.Navigator screenOptions={{ headerShown: false }}>
      <Abas.Screen
        name="Tecnologia"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="laptop-outline" size={size} color={color} />
          ),
        }}
      >
        {() => <NavegadorPilha noticias={noticiasTecnologia} titulo="Tecnologia" />}
      </Abas.Screen>

      <Abas.Screen
        name="Esportes"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" size={size} color={color} />
          ),
        }}
      >
        {() => <NavegadorPilha noticias={noticiasEsportes} titulo="Esportes"  />}
      </Abas.Screen>
    </Abas.Navigator>
  );
}