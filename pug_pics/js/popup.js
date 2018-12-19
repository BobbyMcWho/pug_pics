window.onload = () => {
  // Send a message to our backend so it can make the API call.
  // This call could be done in this file, but for examples sake we're
  // having our background script make the call
  chrome.runtime.sendMessage(
    {getDog: true},
    (response) => {
      // Backend will do its thing and send us back a url.
      updateImage(response.url)
    }
  )
}

function updateImage(imageURL){
  const imageDiv = document.querySelector('#pugTarget');
  imageDiv.style.backgroundImage = `url('${imageURL}')`;
}