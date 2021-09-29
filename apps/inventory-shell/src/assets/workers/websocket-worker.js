function websocketConnector(url) {
  const websocket = new WebSocket(url);
  websocket.onmessage = (event) => {
    console.error('event', event);
    postMessage(JSON.parse(event.data));
  }
}

self.addEventListener('message', (event) => {
  self.postMessage(websocketConnector(event.data));
});
