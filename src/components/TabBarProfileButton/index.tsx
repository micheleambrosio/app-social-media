import React from 'react';
import { Button, ProfileImage } from './styles';

interface Props {
  profileImage: any;
  onPress: () => void;
  focused: boolean;
}

export default function TabBarProfileButton({ profileImage, onPress, focused }: Props) {
  return (
    <Button onPress={onPress} focused={focused}>
      <ProfileImage source={profileImage} />
    </Button>
  );
}
