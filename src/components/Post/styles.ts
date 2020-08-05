import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView``;


export const Container = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const Photo = styled.Image`
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  width: 349px;
  height: 350px;
  margin-top: 30px;
`;

export const Details = styled.View`
  bottom: 0;
  width: 350px;
  height: 100px;
  background-color: #fff;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
`;

export const DetailsBorderContainer = styled.View`
  width: 349px;
`;

export const DetailsBorder = styled.Image`
  bottom: 100px;
  align-self: flex-end;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 24px;
`;

export const ProfileInfos = styled.View``;

export const ProfileName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #916980;
`;

export const PostedAt = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #F3D8E6;
  margin-top: 4px;
`;
