import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTema } from '../tema';

export default function BotaoTema() {
  const { cores, escuro, alternar } = useTema();

  return (
    <TouchableOpacity onPress={alternar} style={{ marginRight: 16 }}>
      <Ionicons
        name={escuro ? 'sunny-outline' : 'moon-outline'}
        size={24}
        color={cores.texto}
      />
    </TouchableOpacity>
  );
}