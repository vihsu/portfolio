import initTilt from './js/tilt';
import initSr from './js/sr';

import './style/main.scss';

$(document).scroll(function(){
  var $nav= $("#header");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});


initSr();
initTilt();
