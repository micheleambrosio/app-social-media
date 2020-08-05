import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import ProfileImage from './images/profile-image.jpg';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import ChatScreen from './screens/Chat';

import TabBarProfileButton from './components/TabBarProfileButton';

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
    size: 32
  },
  Messages: {
    lib: Entypo,
    name: 'direction',
    size: 32
  },
  NewPost: {
    lib: MaterialIcons,
    name: 'add-circle-outline',
    size: 32
  },
  Activities: {
    lib: MaterialCommunityIcons,
    name: 'heart-outline',
    size: 32
  }
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName='Messages'
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused }) => {
          if (route.name === 'Profile') {
            return (
              <TabBarProfileButton
                profileImage={ProfileImage}
                onPress={() => navigation.navigate('Profile')}
                focused={focused}
              />);
          }

          const { lib: Icon, name, size } = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          borderTopColor: '#FEFEFE',
          backgroundColor: '#FEFEFE',
          paddingTop: 12,
        },
        activeTintColor: '#C6649A',
        inactiveTintColor: '#EEBAD5',
      }}
    >
      <Tab.Screen
        name='Activities'
        component={HomeScreen}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name='NewPost'
        component={HomeScreen}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name='Messages'
        component={ChatScreen}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: ''
        }}
      />
    </Tab.Navigator>
  );
}
