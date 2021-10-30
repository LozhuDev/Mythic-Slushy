const socket = io.connect('http://localhost/');


function load(){
  console.log('%c HEY YOU SHOULDNT BE HERE', 'color: #2E96BE; font-size: 25px;');
    console.log('%c Unless of course an official TETHER staff member asked you to go in here.', 'color: #2E96BE; font-size: 25px;');
}

function openLink(url){
    window.open(url); 
}


function cardClick(name){
    window.location.href = '/'+name;
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0,
        "random": false
      },
      "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "opacity": 0.5
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "size": 2,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        }
      }
    },
    "retina_detect": true
  });
  