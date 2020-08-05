import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  bottom: 30px;
`;

export const Infos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Item = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #E4B8CE;
`;

export const Value = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #8B5E76;
`;

export const Border = styled.Image`
  align-self: flex-end;
  bottom: 30px;
`;
