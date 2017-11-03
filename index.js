(function() {
  'use strict';
  // YOUR CODE HERE

  let stopButton = document.getElementById('stopButton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');

  let buttons = document.getElementById('controls');
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

  buttons.addEventListener('click', changeLight);
  stopButton.addEventListener('mouseenter', logMouseEnter);
  stopButton.addEventListener('mouseleave', logMouseLeave);
  slowButton.addEventListener('mouseenter', logMouseEnter);
  slowButton.addEventListener('mouseleave', logMouseLeave);
  goButton.addEventListener('mouseenter', logMouseEnter);
  goButton.addEventListener('mouseleave', logMouseLeave);


  function changeLight() {
    if (event.target === stopButton) {
      stopLight.classList.toggle('stop');
    } else if (event.target === slowButton) {
      slowLight.classList.toggle('slow');
    } else if (event.target === goButton) {
      goLight.classList.toggle('go');
    }
  }

  function logMouseEnter() {
    console.log(`Entered ${event.target.innerText} button`);
  }

  function logMouseLeave() {
    console.log(`Left ${event.target.innerText} button`);
  }


})();
