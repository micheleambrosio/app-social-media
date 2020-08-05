import React from 'react';
import { Wrapper, Container } from './styles';
import Header from '../../components/Header';
import SearchButton from '../../components/SearchButton';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

export default function Home() {
  return (
    <Wrapper>
      <Container colors={['#FFF', '#FDE9EB']}>
        <Header principalText='Michele' subText='Hello,'>
          <SearchButton />
        </Header>

        <Stories />

        <Post />
      </Container>
    </Wrapper>
  );
}