import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './StackNavigator';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


export type TabsParamList = {
    HomeTab: { email: string },
    Profile: undefined,
    Settings: undefined
}

const Tab = createBottomTabNavigator<TabsParamList>()


export default function TabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={Home}
                initialParams={{ email: "usuario" }}
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Mi Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: "Configuración",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}