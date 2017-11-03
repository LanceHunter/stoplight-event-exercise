(function() {
  'use strict';
  // YOUR CODE HERE

  let buttons = document.getElementById('controls');
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

  buttons.addEventListener('click', changeLight);

  function changeLight() {
    if (event.target === stopButton) {
      stopLight.classList.toggle('stop');
    } else if (event.target === slowButton) {
      slowLight.classList.toggle('slow');
    } else if (event.target === goButton) {
      goLight.classList.toggle('go');
    }
  }

})();
