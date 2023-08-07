$(document).ready(function(){
    $(".project").click(function(){
        const value=$(this).attr('data-filter');
        if(value=='All'){
            $('.item-pro').show('500');
        }else{
            $('.item-pro').not("."+value).hide("200");
            $('.item-pro').filter("."+value).show("500");
        }

        //add active
        $(this).addClass('active').siblings().removeClass('active')
    });

    $(".fa-eye").click(function(){
        $(this).parent().addClass('active');
    });

    $(".btn-colse").click(function(){
      $('.item-pro').removeClass('active');
    });





});
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop() + 200;

    // Assign active class to nav links while scolling
    $('section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.smooth-scroll.active').removeClass('active');
        $('.smooth-scroll').eq(i).addClass('active');
      }
    });
  }).scroll();


  $('.smooth-scroll').on('click', function () {
    var sectionTo = $(this).attr('href');
    $('.smooth-scroll.active').removeClass('active');
    $('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top - 200
    }, 100);
  });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });