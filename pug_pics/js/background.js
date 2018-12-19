chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message['getDog']){
    makeDogsAPIRequest().then(
      (url)=>{
        sendResponse({ url: url })
      },
      // We don't actually handle this on the front-end, but we could if we wanted to.
      (error)=>{
        sendResponse({ error: error })
      }
    );
  }
  // We return true here to let chrome know to keep the message channel open
  // until the sendResponse() function is called.
  // https://developer.chrome.com/extensions/runtime#event-onMessage
  return true;
});

function makeDogsAPIRequest() {
  return new Promise(function(resolve, reject){
    const req = new XMLHttpRequest();
    const url = 'https://dog.ceo/api/breed/pug/images/random';
    req.open("GET", url, true);
    req.onload = () => {
      if (req.readyState === req.DONE) {
        if (req.status === 200) {
          let responseJSON = JSON.parse(req.responseText);
          let imageURL = responseJSON["message"];
          resolve(imageURL);
        }
        else {
          reject(Error('Error communicating with API.'));
        }
      }
    }
    req.send();
  });
}