// Currently unused
(function($) {
  'use strict';

  var slideShowEl = $('[data-slideshow-urls]');
  var slideshowUrls = slideShowEl.data('slideshowUrls');
  var slideshowDelay = slideShowEl.data('slideshowDelay');

  var count = 0;
  var length = slideshowUrls.length;
  var slideshow = function() {
    if (count >= length) {
      count = 0;
    }
    slideShowEl
      .css('background-image', 'url("' + slideshowUrls[count] + '")')
      .show(0, function() {
        setTimeout(slideshow, slideshowDelay);
      });
    count++;
  };
  slideshow();

})(jQuery);
