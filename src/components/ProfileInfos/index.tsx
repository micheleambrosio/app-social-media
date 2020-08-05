import React from 'react';
import {
  Container,
  Infos,
  Item,
  Label,
  Value,
  Border
} from './styles';

import EndBorder from '../../images/details-border.png';

interface Props {
  photos: number;
  followers: number;
  follows: number;
}

export default function ProfileInfos({ photos, followers, follows }: Props) {
  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Container>
      <Infos>
        <Item>
          <Label>Photos</Label>
          <Value>{formatNumber(photos)}</Value>
        </Item>
        <Item>
          <Label>Followers</Label>
          <Value>{formatNumber(followers)}</Value>
        </Item>
        <Item>
          <Label>Follows</Label>
          <Value>{formatNumber(follows)}</Value>
        </Item>
      </Infos>
      <Border source={EndBorder} />
    </Container>
  );
}
