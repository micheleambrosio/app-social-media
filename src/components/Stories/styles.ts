import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16
  }
}))``;

export const Container = styled.View`
  flex-direction: row;
  height: 70px;
  margin-bottom: 40px;
`;

export const StorieContainer = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-left: 16px;
`;

export const StorieBorder = styled(LinearGradient)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
`;

export const Storie = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 35px;
`;

export const AddButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;