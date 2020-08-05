import React from 'react';
import { Wrapper, DetailsBorderContainer, Container, Photo, Details, DetailsBorder, ProfileContainer, ProfilePhoto, ProfileInfos, ProfileName, PostedAt } from './styles';

import Border from '../../images/details-border.png';
import ImgPost01 from '../../images/post-01.jpg';
import ImgPost02 from '../../images/post-02.jpg';
import ImgPost03 from '../../images/post-03.jpg';
import ImgPost04 from '../../images/post-04.jpg';
import ImgPost05 from '../../images/post-05.jpg';
import UserPhoto01 from '../../images/storie-01.jpg';
import UserPhoto02 from '../../images/storie-02.jpg';
import UserPhoto03 from '../../images/storie-03.jpg';
import UserPhoto04 from '../../images/storie-04.jpg';
import UserPhoto05 from '../../images/storie-05.jpg';

export default function Post() {
  const posts = [
    {
      key: Math.random(),
      image: ImgPost01,
      postedAt: '1 hour ago',
      user: {
        name: 'Jessica Parker',
        photo: UserPhoto01
      }
    },
    {
      key: Math.random(),
      image: ImgPost02,
      postedAt: '1 hour ago',
      user: {
        name: 'Elisabeth Morgan',
        photo: UserPhoto02
      }
    },
    {
      key: Math.random(),
      image: ImgPost03,
      postedAt: '2 hour ago',
      user: {
        name: 'Anna Somerhalder',
        photo: UserPhoto03
      }
    },
    {
      key: Math.random(),
      image: ImgPost04,
      postedAt: '3 hour ago',
      user: {
        name: 'Mary Tracy',
        photo: UserPhoto04
      }
    },
    {
      key: Math.random(),
      image: ImgPost05,
      postedAt: '3 hour ago',
      user: {
        name: 'Melissa Morie',
        photo: UserPhoto05
      }
    }
  ];

  return (
    <Wrapper>
      {posts.map((post) => (
        <Container key={post.key}>
          <Photo source={post.image} />
          <DetailsBorderContainer>
            <DetailsBorder source={Border} />
          </DetailsBorderContainer>
          <Details>
            <ProfileContainer>
              <ProfilePhoto source={post.user.photo} />
              <ProfileInfos>
                <ProfileName>{post.user.name}</ProfileName>
                <PostedAt>{post.postedAt}</PostedAt>
              </ProfileInfos>
            </ProfileContainer>
          </Details>
        </Container>
      ))}
    </Wrapper>
  );
}
