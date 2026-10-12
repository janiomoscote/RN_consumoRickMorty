import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme, View } from 'react-native';

import TabNavigation from './navigation/TabNavigation';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

const linking = {
  enabled: 'auto' as const,
  prefixes: [createURL('/')],
};

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
  <NavigationContainer>
    <TabNavigation />
   </NavigationContainer>
  );
}
