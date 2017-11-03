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
    switch (event.target) {
      case stopButton:
        stopLight.classList.toggle('stop');
        if (stopLight.classList.contains('stop')) {
          console.log(`${event.target.textContent} bulb on`);
        } else {
          console.log(`${event.target.textContent} bulb off`);
        }
        break;
      case slowButton:
        slowLight.classList.toggle('slow');
        if (slowLight.classList.contains('slow')) {
          console.log(`${event.target.textContent} bulb on`);
        } else {
          console.log(`${event.target.textContent} bulb off`);
        }
        break;
      case goButton:
        goLight.classList.toggle('go');
        if (goLight.classList.contains('go')) {
          console.log(`${event.target.textContent} bulb on`);
        } else {
          console.log(`${event.target.textContent} bulb off`);
        }
        break;
    }
  }

  function logMouseEnter() {
    console.log(`Entered ${event.target.textContent} button`);
  }

  function logMouseLeave() {
    console.log(`Left ${event.target.textContent} button`);
  }


})();
