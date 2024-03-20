function tabs(n)
{
  $('.service  .tabs-nav a').removeClass('active');
  $('.service  .tabs-nav a.t'+n).addClass('active');
  $('.service  .tabs-block').fadeOut(0);
  $('.service  .tabs-block.tab_'+n).fadeIn(222);
};

function tabsMenu(n)
{
  $('.menu  .tabs-nav a').removeClass('active');
  $('.menu  .tabs-nav a.t'+n).addClass('active');
  $('.menu  .tabs-block').fadeOut(0);
  $('.menu  .tabs-block.tab_'+n).fadeIn(222);
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
	/*========Header__dropdown=========*/
  $(".header__link").hover(function(event) {
    event.preventDefault();
      $(this).find(".header__dropdown").fadeToggle(); 
  });
  /*========/header__dropdown=========*/

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
/*$('.intro__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.intro .card__counter').html( '<span class="i_1">'+''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + '' + slick.slideCount+'</span>');
  });*/

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
$('.works__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.works .card__counter').html( '<span class="i_1">'+''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + '' + slick.slideCount+'</span>');
  });

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
$('.clients__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
       z = 0
      v = 0
      if (i >= 10)
      {
        z = ''
      }
      if (slick.slideCount >= 10)
      {
        v = ''
      }
      $('.clients .card__counter').html( '<span class="i_1">'+''+ i + '</span> <span class="i_2">/</span><span class="i_3"> ' + '' + slick.slideCount+'</span>');
  });

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