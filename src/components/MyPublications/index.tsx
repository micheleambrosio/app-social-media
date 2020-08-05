import React from 'react';
import {
  Wrapper,
  Container,
  Photo
} from './styles';

import MyPublication01 from '../../images/my-publication-01.jpg';
import MyPublication02 from '../../images/my-publication-02.jpg';
import MyPublication03 from '../../images/my-publication-03.jpg';
import MyPublication04 from '../../images/my-publication-04.jpg';
import MyPublication05 from '../../images/my-publication-05.jpg';

export default function MyPublications() {
  return (
    <Wrapper>
      <Container>
        <Photo source={MyPublication05} />
        <Photo source={MyPublication01} />
        <Photo source={MyPublication02} />
        <Photo source={MyPublication03} />
        <Photo source={MyPublication04} />
      </Container>
    </Wrapper>
  );
}
