
import { View, Text, StyleSheet } from 'react-native';

interface EtiquetaProps {
  texto: string;
  colorFondo: string;
}

export default function Etiqueta({
  texto,
  colorFondo,
}: EtiquetaProps) {
  return (
    <View
      style={[
        estilos.contenedor,
        { backgroundColor: colorFondo },
      ]}
    >
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
