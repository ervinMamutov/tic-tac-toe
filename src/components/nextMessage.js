const nextMessage = (value) => {
  const container = document.createElement('div');
  container.classList.add('message-next');

  const textMessage = document.createElement('div');
  textMessage.classList.add('next-text');

  const message = document.createElement('h3');
  message.classList.add('message-text');

  message.innerText = `${value} is next`;

  textMessage.append(message);
  container.append(textMessage);

  return container;
};

export default nextMessage;
