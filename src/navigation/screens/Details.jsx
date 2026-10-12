import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Details = ({ route }) => {
  const character = route.params?.character;

  if (!character) {
    return (
      <View style={styles.estado}>
        <Text style={styles.titulo}>Selecciona un personaje para ver sus detalles.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contenido}>
      <Image source={{ uri: character.image }} style={styles.imagen} />
      <Text style={styles.titulo}>{character.name}</Text>
      <Text style={styles.dato}>Estado: {character.status}</Text>
      <Text style={styles.dato}>Especie: {character.species}</Text>
      <Text style={styles.dato}>Género: {character.gender}</Text>
      <Text style={styles.dato}>Origen: {character.origin.name}</Text>
      <Text style={styles.dato}>Ubicación: {character.location.name}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  estado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  contenido: {
    alignItems: 'center',
    padding: 24,
  },
  imagen: {
    width: 220,
    height: 220,
    marginBottom: 16,
    borderRadius: 12,
  },
  titulo: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dato: {
    alignSelf: 'stretch',
    marginBottom: 8,
    fontSize: 16,
  },
});

export default Details;