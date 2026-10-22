import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import NavegadorDrawer from './src/navegacao/navegadordrawer';
import { TemaProvider, useTema } from './src/tema';

function Raiz() {
  const { cores, escuro } = useTema();
  const base = escuro ? DarkTheme : DefaultTheme;

  const temaNavegacao = {
    ...base,
    colors: {
      ...base.colors,
      background: cores.fundo,
      card: cores.fundo,
      text: cores.texto,
      border: cores.borda,
      primary: cores.destaque,
    },
  };

  return (
    <NavigationContainer theme={temaNavegacao}>
      <NavegadorDrawer />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <TemaProvider>
      <Raiz />
    </TemaProvider>
  );
}