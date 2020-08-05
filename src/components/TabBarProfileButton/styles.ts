import styled from 'styled-components/native';

interface PropsButton {
  focused: boolean;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  border: ${({ focused }) => focused ? '2px solid #C6649A' : '0 solid #fff'};
`;

export const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;