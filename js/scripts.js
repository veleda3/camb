$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#002437');
          $(".header_top").css('background-color', '#002437');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $(".header_top").css('background-color', 'transparent');
       }
   });
    }
});
