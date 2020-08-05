import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import { BoxShadow } from 'react-native-shadow';
import { Ionicons } from '@expo/vector-icons';
import ChatMessageReceived from '../../components/ChatMessageReceived';
import ChatMessageSent from '../../components/ChatMessageSent';

import ReceiverUserImage from '../../images/storie-01.jpg';
import Border from '../../images/details-border.png';

import {
  Container,
  HeaderContainer,
  HeaderContainerBorder,
  ReceiverImage,
  ChatWrapper,
  TextBoxContainer,
  Input,
  Button,
  TouchableButton
} from './styles';


interface MessageProps {
  from: string;
  text: string;
};

const initialMessages: MessageProps[] = [
  {
    from: '@jessica',
    text: 'Olá, Michele!'
  },
  {
    from: 'me',
    text: 'Heeey, Jessica! 🥰'
  },
  {
    from: '@jessica',
    text: 'Quanto tempo! Com o que anda trabalhando?'
  },
  {
    from: 'me',
    text: 'Atualmente sou desenvolvedora web 💻 e mobile 📱!'
  },
  {
    from: '@jessica',
    text: 'Que demais! Eu também! 😍'
  },
  {
    from: '@jessica',
    text: 'Por onde posso acompanhar seu trabalho?'
  },
  {
    from: 'me',
    text: 'Me segue lá no instagram 👇'
  },
  {
    from: 'me',
    text: '@programi_'
  },
  {
    from: '@jessica',
    text: '😘'
  },
];

export default function Chat() {
  const shadowOpt = {
    width: 70,
    height: 70,
    color: '#F6B6D0',
    border: 20,
    radius: 25,
    opacity: 0.3,
    x: 5,
    y: 3,
    style: { marginVertical: 5 }
  }

  const scrollViewRef = useRef();
  const [messages, setMessages] = useState<MessageProps[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>('');

  function handleChangeMessage(text: string) {
    setNewMessage(text);
  }

  function sendMessage() {
    if (!newMessage) {
      return;
    }

    const chat = JSON.parse(JSON.stringify(messages));
    chat.push({ from: 'me', text: newMessage });

    setMessages(chat);
    setNewMessage('');
  }

  return (
    <Container colors={['#FFF', '#FDE9EB']}>
      <HeaderContainer>
        <Header principalText='Jessica' subText='Online'>
          <BoxShadow setting={shadowOpt}>
            <ReceiverImage source={ReceiverUserImage} />
          </BoxShadow>
        </Header>
      </HeaderContainer>
      <HeaderContainerBorder source={Border} />

      <ChatWrapper
        ref={scrollViewRef}
        onContentSizeChange={(contentWidth, contentHeight)=> {scrollViewRef.current.scrollToEnd({animated: true})}}
      >
        {messages.map(message => (
          message.from === 'me'
            ? <ChatMessageSent key={`sent-${Math.random().toString()}`} message={message.text} />
            : <ChatMessageReceived key={`received-${Math.random().toString()}`} message={message.text} />
        ))}
      </ChatWrapper>
      <TextBoxContainer>
        <Input
          value={newMessage}
          placeholder='Escreva uma mensagem'
          onChangeText={(text) => handleChangeMessage(text)}
        />

        <TouchableButton onPress={sendMessage}>
          <Button colors={['#76B6F5', '#EFA09D']} start={[1, 0.2]}>
            <Ionicons name='md-send' size={24} color='#fff' />
          </Button>
        </TouchableButton>
      </TextBoxContainer>
    </Container>
  );
}
