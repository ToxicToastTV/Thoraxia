function fetchApi(url) {
  const request = new Request(url);
  return fetch(request)
    .then(res => res.json())
    .then(data => {
      postMessage(data);
    }).catch(error => {
      postMessage(error);
    });
}

self.addEventListener('message', (event) => {
  self.postMessage(fetchApi(event.data));
});

