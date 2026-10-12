import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from './screens/Settings';
import { Profile } from './screens/Profile';
import { Messages } from './screens/Messages';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user: 'User' }}
        options={{ title: 'Profile' }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{ title: 'Messages' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}
