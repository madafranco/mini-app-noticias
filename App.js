import { NavigationContainer } from '@react-navigation/native';
import NavegadorPilha from './src/navegacao/navegadorpilha';
import { noticiasTecnologia } from './src/dados/noticias';

export default function App() {
  return (
    <NavigationContainer>
      <NavegadorPilha noticias={noticiasTecnologia} />
    </NavigationContainer>
  );
}