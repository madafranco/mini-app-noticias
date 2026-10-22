import { View, Text, Image, Button } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View>
      <Image
        source={require('../../assets/icon.png')}
        style={{ width: 120, height: 120 }}
      />
      <Text>Sobre o aplicativo</Text>
      <Text>
        Este é um mini aplicativo de notícias desenvolvido como trabalho. Ele reúne notícias do Brasil em duas categorias, Tecnologia
        e Esportes, e permite abrir cada uma delas para ler o conteúdo completo. O projeto
        serve para praticar a navegação com Drawer, abas e pilha de telas no React Native.
      </Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Noticias')} />
    </View>
  );
}