import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? "home" : 'home-outline';
                            break;
                        // case 'Analytics':
                        //     iconName = focused ? 'analytics' : 'analytics-outline';
                        //     break;
                        // case 'Profile':
                        //     iconName = focused ? 'person' : 'person-outline';
                        //     break;
                        // case 'Workout':
                        //     iconName = focused ? 'barbell' : 'barbell-outline';
                        //     break;
                        // case 'Food':
                        //     iconName = focused ? 'fast-food' : 'fast-food-outline';
                        //     break;
                        default:
                            iconName = 'ellipse-outline';
                            break;
                    }

                    return <Icon name={iconName} size={size || 25} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    display: 'flex',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Tab.Screen
                name="Analytics"
                component={Analytics}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Workout"
                component={Workout}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Food"
                component={Food}
                options={{
                    headerShown: false,
                }}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomNavigator;