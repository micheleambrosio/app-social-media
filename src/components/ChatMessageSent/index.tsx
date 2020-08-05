import React from 'react';
import {
  Balloon,
  Message
} from './styles';

interface Props {
  message: string;
}

export default function ChatMessageSent({ message }: Props) {
  return (
    <Balloon>
      <Message>{message}</Message>
    </Balloon>
  );
}
