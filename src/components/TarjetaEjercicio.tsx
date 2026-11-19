
import { View, Text, StyleSheet } from 'react-native';
import Etiqueta from './Etiqueta';

interface TarjetaEjercicioProps {
  nombre: string;
  series: number;
  repeticiones: number;
  grupoMuscular: string;
  destacado?: boolean;
}

export default function TarjetaEjercicio({
  nombre,
  series,
  repeticiones,
  grupoMuscular,
  destacado = false,
}: TarjetaEjercicioProps) {
  return (
    <View
      style={[
        estilos.tarjeta,
        destacado && estilos.tarjetaDestacada,
      ]}
    >
      <View style={estilos.contenido}>
        <View style={estilos.encabezado}>
          <Text style={estilos.nombre}>{nombre}</Text>
          <Etiqueta
            texto={grupoMuscular}
            colorFondo={destacado ? '#2563EB' : '#475569'}
          />
        </View>

        <Text style={estilos.detalle}>
          {series} series · {repeticiones} repeticiones
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tarjetaDestacada: {
    borderColor: '#2563EB',
    borderWidth: 2,
  },
  contenido: {
    gap: 12,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
    flexShrink: 1,
  },
  detalle: {
    fontSize: 14,
    color: '#64748B',
  },
});
