import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

async function obtenerPersonajes() {
  const respuesta = await fetch('https://rickandmortyapi.com/api/character');

  if (!respuesta.ok) {
    throw new Error(`Error en la solicitud: ${respuesta.status}`);
  }

  const datos = await respuesta.json();
  return datos.results;
}

function Tarjetas() {
  const navigation = useNavigation();
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let activo = true;

    async function cargarPersonajes() {
      try {
        const resultados = await obtenerPersonajes();
        if (activo) {
          setPersonajes(resultados);
        }
      } catch (errorSolicitud) {
        console.error('Error al obtener los datos:', errorSolicitud);
        if (activo) {
          setError('No se pudieron cargar los personajes.');
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarPersonajes();

    return () => {
      activo = false;
    };
  }, []);

  if (cargando) {
    return <ActivityIndicator style={styles.estado} size="large" />;
  }

  if (error) {
    return (
      <View style={styles.estado}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.lista}
      data={personajes}
      keyExtractor={(personaje) => String(personaje.id)}
      renderItem={({ item }) => (
        <View style={styles.tarjeta}>
          <Image source={{ uri: item.image }} style={styles.imagen} />
          <View style={styles.contenido}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text>{item.status} - {item.species}</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => navigation.navigate('CharacterDetail', { character: item })}
              style={styles.boton}
            >
              <Text style={styles.textoBoton}>Ver detalles</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  estado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    padding: 16,
  },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  contenido: {
    flex: 1,
  },
  imagen: {
    width: 64,
    height: 64,
    marginRight: 12,
    borderRadius: 32,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boton: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#3b82f6',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default Tarjetas;
