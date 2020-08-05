import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const ReceiverImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const HeaderContainer = styled.View`
  padding-top: 16px;
  background-color: #fff;
  height: 150px;
  border-bottom-right-radius: 35px;
`;

export const HeaderContainerBorder = styled.Image`
  transform: rotate(180deg);
`;

export const ChatWrapper = styled.ScrollView`
  margin-top: -50px;
  padding: 0 24px;
`;

export const TextBoxContainer = styled.View`
  background-color: #fff;
  border-radius: 35px;
  padding: 16px 24px;
  margin: 16px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#E9C8DA'
}))`
  font-size: 16px;
  font-weight: bold;
  color: #C6649A;
  width: 220px;
`;

export const Button = styled(LinearGradient)`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const TouchableButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
