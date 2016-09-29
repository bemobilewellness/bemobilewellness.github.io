$(document).on('click', '[data-behavior="popup-video"]', function() {
  $($(this).data('modalTarget')).modal('show');
});
