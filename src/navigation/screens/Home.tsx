import { StyleSheet, View } from 'react-native';
import Tarjetas from './Tarjetas ';

export function Home() {
  return (
    <View style={styles.container}>
      <Tarjetas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
