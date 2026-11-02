
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Encabezado from './components/encabezado';
import CajaEstadistica from './components/CajaEstadistica';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {
  return (
    <ScrollView style={estilos.pantalla}>
      <View style={estilos.contenedor}>
        <Encabezado
          titulo="Mi rutina de hoy"
          subtitulo="¡Es hora de entrenar!"
        />

        <View style={estilos.resumen}>
          <CajaEstadistica valor="4" etiqueta="Ejercicios" />
          <CajaEstadistica valor="45" etiqueta="Minutos" />
          <CajaEstadistica valor="3" etiqueta="Series" />
        </View>

        <Text style={estilos.tituloSeccion}>
          Tu entrenamiento
        </Text>

        <TarjetaEjercicio
          nombre="Press de banca"
          series={3}
          repeticiones={12}
          grupoMuscular="PECHO"
          destacado={true}
        />

        <TarjetaEjercicio
          nombre="Press militar"
          series={3}
          repeticiones={10}
          grupoMuscular="HOMBROS"
        />

        <TarjetaEjercicio
          nombre="Curl de bíceps"
          series={3}
          repeticiones={12}
          grupoMuscular="BRAZOS"
        />

        <TarjetaEjercicio
          nombre="Sentadillas"
          series={3}
          repeticiones={15}
          grupoMuscular="PIERNAS"
        />

        <View style={estilos.pie}>
          <Text style={estilos.textoPie}>
            Cada repetición cuenta. ¡Dalo todo!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  contenedor: {
    padding: 20,
    paddingTop: 55,
  },
  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 24,
    marginBottom: 28,
  },
  tituloSeccion: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  pie: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  textoPie: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
  },
});
