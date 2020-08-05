import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled.View`
  padding: 16px;
  align-items: center;
  height: 300px;
  background-color: #fff;
  border-bottom-right-radius: 50px;
`;

export const HeaderBorder = styled.Image`
  transform: scaleY(1) rotate(180deg);
`;


export const HeaderTitle = styled.Text`
  align-self: flex-start;
  font-size: 28px;
  font-weight: bold;
  color: #C6649A;
`;

export const ProfileDetails = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 24px 0;
`;

export const ProfileName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #C6649A;
`;

export const ProfileUsername = styled.Text`
  font-size: 16px;
  color: #E0B1CB;
`;

