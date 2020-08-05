import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  margin-top: -20px;
  border-top-left-radius: 35px;
`;


export const Container = styled.View`
  flex: 1;
  padding: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Photo = styled.Image`
  width: 130px;
  height: 130px;
  margin: 10px
  border-radius: 35px;
`;