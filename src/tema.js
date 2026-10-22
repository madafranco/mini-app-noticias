import { createContext, useContext, useState } from 'react';
import { Platform } from 'react-native';

export const fonteTitulo = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'Georgia, "Times New Roman", serif',
});

const paletas = {
  escuro: {
    fundo: '#0d0d0d',
    superficie: '#1a1a1a',
    borda: '#444444',
    texto: '#e8e2d0',
    textoSecundario: '#9a9486',
    destaque: '#b3262e',
  },
  claro: {
    fundo: '#efe9db',
    superficie: '#fbf8f0',
    borda: '#cfc6b0',
    texto: '#1a1a1a',
    textoSecundario: '#6b6558',
    destaque: '#b3262e',
  },
};

const TemaContexto = createContext();

export function TemaProvider({ children }) {
  const [escuro, setEscuro] = useState(true);
  const cores = escuro ? paletas.escuro : paletas.claro;
  const alternar = () => setEscuro((atual) => !atual);

  return (
    <TemaContexto.Provider value={{ cores, escuro, alternar }}>
      {children}
    </TemaContexto.Provider>
  );
}

export function useTema() {
  return useContext(TemaContexto);
}