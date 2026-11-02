
import { StyleSheet, Text, View } from 'react-native';

type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

export default function Encabezado({
  titulo,
  subtitulo,
}: EncabezadoProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitulo: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 6,
  },
});
