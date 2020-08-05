import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}