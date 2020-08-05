import React, { ReactNode } from 'react';
import { PrincipalText, SubText, Container, TextWrapper } from './styles';

interface Props {
  principalText: string;
  subText: string;
  children?: ReactNode;
}

export default function Header({ principalText, subText, children }: Props) {
  return (
    <Container>
      <TextWrapper>
        <SubText>{subText}</SubText>
        <PrincipalText>{principalText}</PrincipalText>
      </TextWrapper>
      {children}
    </Container>
  );
}