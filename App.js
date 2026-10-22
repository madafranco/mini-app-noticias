import { NavigationContainer } from '@react-navigation/native';
import NavegadorDrawer from './src/navegacao/navegadordrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavegadorDrawer />
    </NavigationContainer>
  );
}