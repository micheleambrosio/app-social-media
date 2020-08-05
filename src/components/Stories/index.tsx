import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { BoxShadow } from 'react-native-shadow';
import {
  Wrapper,
  Container,
  AddButton,
  StorieContainer,
  StorieBorder,
  Storie,
} from './styles';

import Img01 from '../../images/storie-01.jpg';
import Img02 from '../../images/storie-02.jpg';
import Img03 from '../../images/storie-03.jpg';
import Img04 from '../../images/storie-04.jpg';
import Img05 from '../../images/storie-05.jpg';

export default function Stories() {
  const stories = [
    { image: Img01, key: Math.random().toString() },
    { image: Img02, key: Math.random().toString() },
    { image: Img03, key: Math.random().toString() },
    { image: Img04, key: Math.random().toString() },
    { image: Img05, key: Math.random().toString() },
    { image: Img01, key: Math.random().toString() },
    { image: Img02, key: Math.random().toString() },
    { image: Img03, key: Math.random().toString() },
    { image: Img04, key: Math.random().toString() },
    { image: Img05, key: Math.random().toString() },
  ];

  function getShadowOpt(color: string, opacity: number) {
    return {
      width: 70,
      height: 70,
      color,
      border: 10,
      radius: 35,
      opacity,
      x: 5,
      y: 3,
      style: { marginVertical: 0 }
    };
  }


  return (
    <Wrapper>
      <Container>
        <BoxShadow setting={getShadowOpt('#C6649A', 0.05)}>
          <AddButton>
            <FontAwesome name='plus' size={24} color='#EDB4D1' />
          </AddButton>
        </BoxShadow>

        {stories.map((storie) => (
          <StorieContainer key={storie.key}>
            <BoxShadow setting={getShadowOpt('#79B4F4', 0.15)}>
              <StorieBorder colors={['#6EC0FF', '#FFA175']} start={[1, 0.2]}>
                <Storie source={storie.image} />
              </StorieBorder>
            </BoxShadow>
          </StorieContainer>
        ))}
      </Container>
    </Wrapper>
  );
}
