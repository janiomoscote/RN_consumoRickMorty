import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Home } from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharacterList"
        component={Home}
        options={{
          title: 'Personajes',
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={Details}
        options={{ title: 'Detalle del personaje' }}
      />
    </Stack.Navigator>
  );
}