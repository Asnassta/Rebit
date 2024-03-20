function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};


/*=============Dots============*/
function position_dots()
{
    var $el = $('.slick-active .card'),
    $main = $('.intro__visual')
    winScrollTop = $(window).scrollTop()
    mainYPos = $main.offset().top - winScrollTop
    elYPos = $el.offset().top - winScrollTop
    elYTruePos = elYPos - mainYPos
    parentHeight = $('.intro__visual').height();
    $('.intro .slick-dots').css('bottom', parentHeight-elYTruePos+24+'px');
}

window.onresize = function(event) {
  position_dots();
};
$(window).resize(position_dots);
$(window).on('resize', position_dots)
$( document ).ready(function() {
  $('.intro__slider').on('init reInit afterChange', function(event, slick){
      position_dots();
  });
});

function dots()
{
    let $eh = $('.works .slick-active .card').height();
    $('.works .slick-dots').css('bottom', $eh+84+'px');
    if ($(window).width() <= 1320){
        $('.works .slick-dots').css('bottom', $eh+44+'px');  
    };
}

window.onresize = function(event) {
  dots();
};
$(window).resize(dots);
$(window).on('load resize', dots);
$( document ).ready(function() {
  $('.works__slider').on('init reInit afterChange', function(event, slick){
      dots();
  });
});
/*=============/dots============*/

$(document).ready(function() {

  $(".header__dropdown").hover(
    function(e){
      console.log(1);
     }, // over

);

  /*========Header__dropdown=========*/
  $(".header__link").hover(
    function(event){
      event.preventDefault();
    
      $(this).find(".header__dropdown").fadeIn(111); 
      $(".menu__link").removeClass('active');
    },
    function(event){
      $(this).find(".header__dropdown").fadeOut(); 
      $(".menu__sub").hide(0);
      console.log(3);
    }   
  );
  /*========/header__dropdown=========*/

  /*===========Menu===========*/
  $(".menu__link").hover(function (event) {
      $('.menu__sub').hide(0);
        name_menu = $(this).attr('data-menu');
        event.preventDefault();
        $(".menu__sub."+name_menu).fadeIn(0);
        $(".menu__link").removeClass('active');
        $(this).addClass('active');
    });
  /*===========/menu===========*/

  /*========Mobile-menu=========*/
  $(".burger").on("click", function(event) {
    event.preventDefault();
      if ($(window).width() <= 1080){
        $(".mobile-menu").fadeToggle(); 
        $(".call ").fadeToggle(); 
        $(this).toggleClass('active');
        $('body').toggleClass('hidden');
    };
  });

  $(".mobile-menu-drop").on("click", function(event) {
    event.preventDefault();
      $(this).next().fadeIn();
      $('body').addClass('hidden'); 
  });

  $(".mobile-menu__sublink span").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle();
      $(this).toggleClass('active');
      $(".mobile-menu__sublink span").not(this).removeClass('active');
      $(".mobile-menu__sublink span").not(this).next().slideUp();
  });

  $(".menu__close").on("click", function(event) {
    event.preventDefault();
      $(".mobile-menu__sub").fadeOut();
  });
  /*========/mobile-menu=========*/

    /*========Notify=========*/
  $(".notify .btn").on("click", function(event) {
    event.preventDefault();
      $(this).parent().parent().fadeOut(); 
  });
  /*========/notify=========*/

  /*========Navbox=========*/
  $(".navbox__links-drop").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 760){
        $(this).hide(); 
        $(this).next().slideToggle();   
    };
  });

  $(".navbox__link").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 760){
        $(this).parents().find('.navbox__links-drop').html($(this).html());
        $(this).parent().parent().slideToggle();
        $(this).parents().find('.navbox__links-drop').show();  
    };
  });
  /*========/navbox=========*/

  /*========Service__more=========*/
  $(".service__more-btn").on("click", function(event) {
    event.preventDefault();
      $(this).parents().find('.service__more').slideToggle(); 
      $(this).toggleClass('active'); 
  });
  /*========/service__more=========*/

  /*========FAQ=========*/
  $(".faq__question").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle(); 
      $(this).toggleClass('active');
      $(".faq__question").not(this).next().slideUp();  
      $(".faq__question").not(this).removeClass('active');  
  });
  /*========/FAQ=========*/

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*=================Sliders===================*/
/*==================Intro__slider==========*/
$('.intro__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  prevArrow: $('.intro .slider-arrows__arrow_prev'),
  nextArrow: $('.intro .slider-arrows__arrow_next'),
  });
/*==================/intro__slider==========*/

/*==================Works__slider==========*/
$('.works__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  prevArrow: $('.works .slider-arrows__arrow_prev'),
  nextArrow: $('.works .slider-arrows__arrow_next'),
  });
/*==================/works__slider==========*/

/*==================Clients__slider==========*/
$('.clients__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  prevArrow: $('.clients .slider-arrows__arrow_prev'),
  nextArrow: $('.clients .slider-arrows__arrow_next'),
  });
/*==================/clients__slider==========*/
 /*=================Sliders===================*/

});