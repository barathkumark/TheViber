$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.6)');
    }
});


// Owl Carousel

$(document).ready(function () {

    if ($('.brands_slider').length) {
      var brandsSlider = $('.brands_slider');
  
      brandsSlider.owlCarousel(
        {
          loop: false,
          autoplay: false,
          autoplayTimeout: 10000,
          nav: true,
          dots: false,
          autoWidth: true,
          items: 6,
          margin: 70
        });
  
      if ($('.brands_prev').length) {
        var prev = $('.brands_prev');
        prev.on('click', function () {
          brandsSlider.trigger('prev.owl.carousel');
        });
      }
  
      if ($('.brands_next').length) {
        var next = $('.brands_next');
        next.on('click', function () {
          brandsSlider.trigger('next.owl.carousel');
        });
      }
    }
  
  
  });
