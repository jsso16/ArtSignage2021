// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, Animation it in
  $(window).scroll(function() {
    $('.animated-2').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('reveal');
      }
    });
  });

  $(window).scroll(function() {
    $('.animated-3').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('wave');
      }
    });
  });

  $(window).scroll(function() {
    $('.animated-5').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('typing-demo');
      }
    });
  });

  $(window).scroll(function() {
    $('.animated-6').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('move');
      }
    });
  });

  $(window).scroll(function() {
    $('.animated-7').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('shadow');
      }
    });
  });
});