$(document).ready(function(){
  /* Fixed Header */
  var header = $('#top-header');
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
      header.addClass('short');
    }
    else {
      header.removeClass('short');
    }
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  $(function () {
    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
    });
  });
});