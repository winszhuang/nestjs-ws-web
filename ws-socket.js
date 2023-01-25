// const socket = io("https://socket-test-9taj.onrender.com")
const ws = new WebSocket('wss://nestjs-ws.onrender.com')

ws.onopen = () => {
  console.log('open connection')
}

ws.onclose = () => {
  console.log('close connection')
}

ws.onmessage = (data) => {
  handleNewMessage(data.data)
}

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  ws.send(JSON.stringify({
    event: 'message',
    data: message.value
  }))
}

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}