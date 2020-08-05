import React from 'react';
import {
  Wrapper,
  Container
} from './styles';

import UserImage from '../../images/profile-image.jpg';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfos from '../../components/ProfileInfos';
import MyPublications from '../../components/MyPublications';

export default function Profile() {
  return (
    <Wrapper>
      <Container colors={['#FFF', '#FDE9EB']}>
        <ProfileHeader
          name='Michele Ambrosio'
          userName='programi_'
          image={UserImage}
        />

        <ProfileInfos
          photos={183}
          followers={10243}
          follows={139}
        />

        <MyPublications />
      </Container>
    </Wrapper>
  );
}
