import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from './styles';
import { BoxShadow } from 'react-native-shadow';

export default function SearchButton() {
  const shadowOpt = {
    width: 50,
    height: 50,
    color: '#C6649A',
    border: 10,
    radius: 25,
    opacity: 0.05,
    x: 5,
    y: 3,
    style: { marginVertical: 5 }
  }

  return (
    <BoxShadow setting={shadowOpt}>
      <Button>
        <FontAwesome name='search' size={24} color='#EEBAD5' />
      </Button>
    </BoxShadow>
  );
}