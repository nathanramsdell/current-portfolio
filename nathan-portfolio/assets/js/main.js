/*
Template Name: Massive
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector('.navbar-area');
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add('sticky');
    } else {
      header_navbar.classList.remove('sticky');
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector('.scroll-top');
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = 'flex';
    } else {
      backToTo.style.display = 'none';
    }
  };

  // for menu scroll
  var pageLink = document.querySelectorAll('.page-scroll');

  pageLink.forEach(elem => {
    elem.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 1 - 60,
      });
    });
  });

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('.collapse');

  document.querySelectorAll('.page-scroll').forEach(e =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('active');
      navbarCollapse.classList.remove('show');
    })
  );
  navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle('active');
  });
  // WOW active
  new WOW().init();

  let filterButtons = document.querySelectorAll(
    '.portfolio-btn-wrapper button'
  );
  filterButtons.forEach(e =>
    e.addEventListener('click', () => {
      let filterValue = event.target.getAttribute('data-filter');
      iso.arrange({
        filter: filterValue,
      });
    })
  );

  var elements = document.getElementsByClassName('portfolio-btn');
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      var el = elements[0];
      while (el) {
        if (el.tagName === 'BUTTON') {
          el.classList.remove('active');
        }
        el = el.nextSibling;
      }
      this.classList.add('active');
    };
  }

  //====== counter up
  var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: ' ',
  });
  cu.start();
})();

//====== fireworks

const container = document.querySelector('.fireworks-example');
const fireworksStartbutton = document.querySelector('.fireworks-startbutton');
const audioContainer = document.querySelector('.audio-player');
const fireworks = new Fireworks(container, {
  rocketsPoint: 50,
  hue: { min: 0, max: 360 },
  delay: { min: 15, max: 30 },
  speed: 2,
  acceleration: 1.05,
  friction: 0.95,
  gravity: 1.5,
  particles: 50,
  trace: 10,
  explosion: 10,
  autoresize: true,
  brightness: {
    min: 50,
    max: 80,
    decay: { min: 0.015, max: 0.03 },
  },
  mouse: {
    click: false,
    move: false,
    max: 3,
  },
  boundaries: {
    x: 50,
    y: 50,
    width: container.clientWidth,
    height: container.clientHeight,
  },
  sound: {
    enable: true,
    files: ['explosion0.mp3', 'explosion1.mp3', 'explosion2.mp3'],
    volume: { min: 1, max: 2 },
  },
});

fireworksStartbutton.addEventListener('click', () => {
  fireworks.start();
  audioContainer.src = 'assets/songs/teenage-hero.mp3';
});

//====== audio embed
