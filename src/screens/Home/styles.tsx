import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled(LinearGradient)`
  flex: 1;
  flex-direction: column;
`;
