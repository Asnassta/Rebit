$(document).ready(function() {
  /*============Steps===========*/
  $(window).scroll(function() {
    var wB = $( ".steps");
    var position = wB.position();
    var isSTop = $(window).scrollTop();
 
        if (isSTop > position.top - 160)
        {
            $( ".steps__item:first-child").addClass('active');
        } else {
          $( ".steps__item:first-child").removeClass('active');
        }

        if (isSTop > position.top - 20)
        {
            $( ".steps__item:nth-child(2)").addClass('active');
        } else {
          $( ".steps__item:nth-child(2)").removeClass('active');
        }

        if (isSTop > position.top + 150)
        {
            $( ".steps__item:nth-child(3)").addClass('active');
        } else {
          $( ".steps__item:nth-child(3)").removeClass('active');
        }

        if (isSTop > position.top + 350)
        {
            $( ".steps__item:nth-child(4)").addClass('active');
        } else {
          $( ".steps__item:nth-child(4)").removeClass('active');
        }

        if (isSTop > position.top + 600)
        {
            $( ".steps__item:nth-child(5)").addClass('active');
        } else {
          $( ".steps__item:nth-child(5)").removeClass('active');
        }

        if (isSTop > position.top + 800)
        {
            $( ".steps__item:nth-child(6)").addClass('active');
        } else {
          $( ".steps__item:nth-child(6)").removeClass('active');
        }

        if (isSTop > position.top + 1000)
        {
            $( ".steps__item:nth-child(7)").addClass('active');
        } else {
          $( ".steps__item:nth-child(7)").removeClass('active');
        }

    });
  /*============/steps===========*/
});