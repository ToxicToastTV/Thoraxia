function websocketConnector(url) {
  const websocket = new WebSocket(url);
  websocket.onmessage = (event) => {
    postMessage(JSON.parse(event.data));
  }
}

self.addEventListener('message', (event) => {
  self.postMessage(websocketConnector(event.data));
});
