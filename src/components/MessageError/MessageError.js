import React from 'react';
import MessageErrorStyles from './MessageErrorStyles';

const MessageError = ({ message }) => {
  return <MessageErrorStyles>{message}</MessageErrorStyles>;
};

export default MessageError;
