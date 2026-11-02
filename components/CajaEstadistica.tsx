
import { View, Text, StyleSheet } from 'react-native';

interface CajaEstadisticaProps {
  valor: string;
  etiqueta: string;
}

export default function CajaEstadistica({
  valor,
  etiqueta,
}: CajaEstadisticaProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.valor}>{valor}</Text>
      <Text style={estilos.etiqueta}>{etiqueta}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#172554',
  },
  etiqueta: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
    textAlign: 'center',
  },
});
