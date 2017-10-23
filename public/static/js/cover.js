(function($){
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        //console.log(top);
        console.log($('.right_pic_1').css("transform"));
        if(top>1700 ){
            $('.right_pic_cover_1').css({
                transform: 'translateY(' + (-(top-1700)) + 'px)',
                transition: 'none'
            });
            $('.right_pic_1').css({
                transform: 'translateY(' + ((top-1700)) + 'px)',
                transition: 'none'
            });
            if (top>2978){
                    $('.right_pic_cover_2').css({
                        transform: 'translateY(' + (-(top-2978)) + 'px)',
                        transition: 'none'
                    });
                    $('.right_pic_2').css({
                        transform: 'translateY(' + ((top-2978)) + 'px)',
                        transition: 'none'
                    });
                }
        }
        // else if (top>2978){
        //     $('.right_pic_cover_2').css({
        //         transform: 'translateY(' + (-(top-2978)) + 'px)',
        //         transition: 'none'
        //     });
        //     $('.right_pic_2').css({
        //         transform: 'translateY(' + ((top-2978)) + 'px)',
        //         transition: 'none'
        //     });
        // }

    })

    $('.code-wrapper').on( "mousemove", function(e) {
      var offsets = $(this).offset();
      var fullWidth = $(this).width();
      var mouseY = e.pageY - offsets.top;

      if (mouseY < 0) { mouseY = 0; }
      else if (mouseY > fullWidth) { mouseY = fullWidth }


      $(this).parent().find('.divider-bar').css({
        left: mouseY,
        transition: 'none'
      });
      $(this).find('.design-wrapper').css({
        transform: 'translateY(' + (mouseY) + 'px)',
        transition: 'none'
      });
      $(this).find('.design-image').css({
        transform: 'translateY(' + (-1*mouseY) + 'px)',
        transition: 'none'
      });
    });
    $('.divider-wrapper').on( "mouseleave", function() {
      $(this).parent().find('.divider-bar').css({
        left: '50%',
        transition: 'all .3s'
      });
      $(this).find('.design-wrapper').css({
        transform: 'translateY(50%)',
        transition: 'all .3s'
      });
      $(this).find('.design-image').css({
        transform: 'translateY(-50%)',
        transition: 'all .3s'
      });
    });
  
}); // end of document ready
})(jQuery); // end of jQuery name space