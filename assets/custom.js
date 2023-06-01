$(document).ready(function(){
  $('.list-view').click(function(){
    $('.list-view').removeClass("active");
    $(this).addClass('active');
    
    let grid_view = $(this).data('grid_view');
    $('#product-grid').removeClass('grid--4-col-desktop');
    $('#product-grid').removeClass('grid--3-col-desktop');
    $('#product-grid').removeClass('grid--2-col-desktop');
    $('#product-grid').removeClass('grid--list-col-desktop');
    
    if( grid_view == 4 ){
      $('#product-grid').addClass('grid--4-col-desktop');
    }else if( grid_view == 3 ){
      $('#product-grid').addClass('grid--3-col-desktop');
    }else if( grid_view == 2 ){
      $('#product-grid').addClass('grid--2-col-desktop');
    }else{
      $('#product-grid').addClass('grid--list-col-desktop');
    }
  })

  // slider in product page
  const myTimeout = setTimeout(myGreeting, 5000);
  function myGreeting() {
    clearTimeout(myTimeout);
  
     $('.you_may_like_product_slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: true,	
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // slider in product page
    $('.recommendation_product_slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: true,	
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    
  }

  // option-selection in frquently together section in product page 
  $('.frequently_product_selection_default').click(function(){
    $(this).parent(".frequently_product_selection").children("ul").slideToggle("100");
  });

  // header-version-2 currancy tag
  $('.currency_icon').click(function(){
    $('.custom_currency_selector ul').toggleClass("currency_new");
  });

  // show all label on filter in collection page
  $('.show_more_span').click(function(e) {
    $('.wrapper-price-filter li').toggleClass('show_all_view');
  });

 
 

  
})