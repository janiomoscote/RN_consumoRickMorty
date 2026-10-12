import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './screens/Details';
import StackNavigation from './StackNavigation';
import { Feather } from '@react-native-vector-icons/feather';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={StackNavigation} options={{ headerShown: false, tabBarIcon: () => <Feather name="home" size={32} color="#3b82f6"/> }} />
      <Tab.Screen name="Details" component={Details} options={{ headerShown: false, tabBarIcon: () => <MaterialDesignIcons name="details" size={32} color="#3b82f6" /> }} />
    </Tab.Navigator>
  )
}

export default TabNavigation