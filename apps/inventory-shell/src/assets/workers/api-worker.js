// eslint-disable-next-line @typescript-eslint/no-this-alias
const self = this;

function getApiData(url, token, callback) {
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${token}`);
  const request = new Request(url, {
    headers,
  });
  fetch(request)
    .then(res => res.json())
    .then(res => callback(null, res))
    .catch(error => callback(error, null));
}

self.addEventListener('message', function(event) {
  const data = event.data;
  const { url, token } = data;
  getApiData(url, token,function(err, result) {
    console.error('callback for', url, ':', err, result)
    if (err === null) {
      self.postMessage({ status: true, result });
    } else {
      self.postMessage({ status: false, result: err });
    }
  });
});

/*self.onmessage = function(event) {
  const url = event.data;
  getApiData(url, function(err, result) {
    if (err === null) {
      self.postMessage(result);
    } else {
      self.postMessage(err);
    }
  });
};*/
