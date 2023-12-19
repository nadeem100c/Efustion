import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClinetHome from '../ClientScr/ClinetHome';
import ClientProfile from '../ClientScr/ClientProfile';
import ClientOrderSrc from '../ClientScr/ClientOrderSrc';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Créer une commande') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'green',
                },
            })}
        >
            <Tab.Screen name="Home" component={ClinetHome} options={{ headerShown: false }} />
            <Tab.Screen name="ClientOrderSrc" component={ClientOrderSrc} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ClientProfile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
