import React from 'react';
import {
  Header,
  HeaderTitle,
  ProfileDetails,
  HeaderBorder,
  ProfileImage,
  ProfileName,
  ProfileUsername,
} from './styles';

import Border from '../../images/details-border.png';

interface Props {
  name: string;
  userName: string;
  image: any;
}

export default function ProfileHeader({ name, userName, image }: Props) {
  return (
    <>
      <Header>
        <HeaderTitle>My Profile</HeaderTitle>
        <ProfileDetails>
          <ProfileImage source={image} />

        <ProfileName>{name}</ProfileName>
        <ProfileUsername>@{userName}</ProfileUsername>
        </ProfileDetails>
      </Header>
      <HeaderBorder source={Border} />
    </>
  );
}
