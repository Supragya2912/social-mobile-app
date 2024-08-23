import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import LikeScreen from '../screens/LikeScreen';
import PostScreen from '../screens/PostScreen';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
    routeName: string;
    focused: boolean;
    size: number;
    color: string;
};

const getTabBarIcon = ({ routeName, focused, size, color }: TabBarIconProps) => {
    let iconName: string;

    switch (routeName) {
        case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'Search':
            iconName = focused ? 'search' : 'search-outline';
            break;
        case 'Post':
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            break;
        case 'Like':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        case 'Profile':
            iconName = focused ? 'person' : 'person-outline';
            break;
        default:
            iconName = 'ellipse-outline';
            break;
    }

    return <Icon name={iconName} size={size} color={color} />;
};

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}: 
                { route: RouteProp<Record<string, object | undefined>, string>;}): BottomTabNavigationOptions => ({
                tabBarIcon: ({ color, focused, size }) =>
                    getTabBarIcon({ routeName: route.name, focused, size, color }),
                tabBarActiveTintColor: 'black',
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
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Like"
                component={LikeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
