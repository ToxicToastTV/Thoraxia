// eslint-disable-next-line @typescript-eslint/no-this-alias
const self = this;

function getApiData(url, callback) {
  const request = new Request(url);
  fetch(request)
    .then(res => res.json())
    .then(res => callback(null, res))
    .catch(error => callback(error, null));
}

self.addEventListener('message', function(event) {
  const url = event.data;
  getApiData(url, function(err, result) {
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
