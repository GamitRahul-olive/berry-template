/*============================= custome js ==========================*/

$(document).ready(function() {
  //Header Customer profile Dropdown open
  $('.profileDropdown').click( function() {
    $('.userDropdown').toggleClass("active");  
  });
  
  //colllection grid view changes js
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

 //collection drawer filter toggle jquery
  if( $('.sidebar_filter_toggle').length > 0 ){
    $(document).on("click", ".sidebar_filter_toggle", function(){
      $("#main-collection-filters").toggleClass("active");
      $("#ProductGridContainer").toggleClass("max_widht_setup");
    })
  }
  
  // collection sidebar close
  if( $('.close_icon_btn').length > 0 ){
    $(document).on("click", ".close_icon_btn", function() {
      $("#main-collection-filters").removeClass("active");
      $("#ProductGridContainer").removeClass("max_widht_setup");
    })
  }
  
  var $sliderSection = $('[data-slidersection]');
  var initSlider = $sliderSection.attr('id');

  if( $sliderSection.length > 0 && initSlider !== 'undefined' && initSlider !=" " ){    
    $('#'+ initSlider ).slick({ 
      dots: $sliderSection.data('dots'),
      infinite: $sliderSection.data('infinite'),
      speed: $sliderSection.data('autospeed'),
      slidesToShow: $sliderSection.data('lgup'),
      arrows: $sliderSection.data('arrows'),
      autoplay: $sliderSection.data('autoplay'),
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: $sliderSection.data('lgdown'),
            slidesToScroll: 1            
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: $sliderSection.data('mddown'),
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: $sliderSection.data('smdown'),
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: $sliderSection.data('mobile'),
            slidesToScroll: 1
          }
        }      
      ] 
    });
  }  
/* product two slide image slider */
  $('.product_two_sliders').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
 /*== start Vertical  section ==*/
 $('.vertical_feature_image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.vertical_product_thumbnail'
 });
$('.vertical_product_thumbnail').slick({
   	slidesToShow: 3,
  	slidesToScroll: 1,
  	asNavFor: '.vertical_feature_image',
  	dots: false,
  	arrows: true,
  	vertical:true,
  	centerMode: false,
  	focusOnSelect: true,
  	responsive:[
      {
    	breakpoint: 768,
    	settings: {
          vertical:false,
          slidesToShow: 3,          
          dots: true
    	}
      },
      {
    	breakpoint: 460,
    	settings: {
          vertical:false,
          slidesToShow: 2,          
          dots: true
    	}
      }
    ]
}); 


  
/* single product image slider */
 $('.single_product_slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   dots: true,
   focusOnSelect: true
 });    
  /* product two slide image slider */
  var $prd_slide = $('.Product_Slide');
  if( $prd_slide.length > 0 && $prd_slide !='undefined' ){
    var slider_id = $prd_slide.attr('id');
    var infinite = $( '#'+slider_id ).data('infinite'),
      dots = $( '#'+slider_id ).data('dots'),
      arrows = $( '#'+slider_id ).data('arrows'),
      autoplay = $( '#'+slider_id ).attr('data-autoplay'),
      autospeed = $( '#'+slider_id ).attr('data-autospeed'),
      lgup = $( '#'+slider_id ).data('lgup'),
      lgdown = $( '#'+slider_id ).data('lgdown'),
      mddown = $( '#'+slider_id ).data('mddown'),
      smdown = $( '#'+slider_id ).data('smdown'),
      mobile = $( '#'+slider_id ).data('mobile');
    
    $('#'+slider_id).slick({
      dots: dots,
      infinite: infinite,
      arrows: arrows,    
      speed: autospeed,
      autoplay:autoplay,
      slidesToShow: lgup,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: lgdown
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: mddown
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: smdown
          }
        },
        {
          breakpoint: 543,
          settings: {
            slidesToShow: mobile
          }
        }
      ]        
    })
  }  
  
 /* product thumbail */
  $('.buttom_feature_image').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    asNavFor: '.buttom_thumbnail_image',
  });
  $('.buttom_thumbnail_image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.buttom_feature_image',
    dots: false,    
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }]
  });
 /* end product thumbnail */ 
 /* product thumbnail count */
  
  $('.buttom_feature_image_count').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    asNavFor: '.buttom_thumbnail_image_count',
  });
  $('.buttom_thumbnail_image_count').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.buttom_feature_image_count',
    dots: false,    
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }]
  });
  $(document).on('click', '.js-gallery', function(e){
    e.preventDefault();
    console.log("find calling");
    var img_src = $(this).next('.buttom_thumbnail_image_count').find('.product__media img');
    console.log(img_src);
    $('.buttom_thumbnail_image_count').slickLightbox({
      src: 'src',
      itemSelector: img_src,
      background: 'rgba(0, 0, 0, .7)'
  });
  });
  
 /* end product thumbnail cound */ 
  /* Product Full Width Slider */

$('.full-width-slider-feature-image').slick({
 	slidesToShow: 3,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
    dots: true,
    centerMode: true,
 	adaptiveHeight: true,
 	infinite: true,
	useTransform: true,
 	speed: 400,
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
});

 $('.full-width-slider-thumbnail')
 	.on('init', function(event, slick) {
 		$('.full-width-slider-thumbnail .slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      focusOnSelect: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }, 
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }]
    });

 $('.full-width-slider-feature-image').on('afterChange', function(event, slick, currentSlide) {
 	$('.full-width-slider-thumbnail').slick('slickGoTo', currentSlide);
 	var currrentNavSlideElem = '.full-width-slider-thumbnail .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('.full-width-slider-thumbnail .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElem).addClass('is-active');
 });

 $('.full-width-slider-thumbnail').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');   
 	$('.full-width-slider-feature-image').slick('slickGoTo', goToSingleSlide);
 });
 $('.full-width-slider-thumbnail').on('click', '.slick-arrow', function(event){
   event.preventDefault();
   let slick_index = $(this).closest('.full-width-slider-thumbnail').find('.slick-current.slick-active').data('slick-index');
   $('.full-width-slider-feature-image').slick('slickGoTo', slick_index);   
 }) 
 /* End Product Full Width Slider */


  var elem = document.getElementById("myHeader");
  var sticky = elem.offsetTop;
  var isMainPresent = elem.classList.contains("sticky_show");
  
  if( isMainPresent ){
    window.onscroll = function() { myFunction() };
    function myFunction() {
      if (window.pageYOffset > sticky) {
        elem.classList.add("sticky");
      } else {
        elem.classList.remove("sticky");
      }
    }
  }else{
   
  }
  //for the related product wishlist here
  $('li.product-single__thumbnails-item a').on('click', function(e){
    e.preventDefault();
    var data_thumbnail_id = $( this ).attr("data-thumbnail-id");
    if( data_thumbnail_id ){
      $(".product-single__media-wrapper").addClass("hide");
      $("#FeaturedMedia-"+data_thumbnail_id+"-wrapper").removeClass("hide");
    }
  });
  // slide top  start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1200);
    return false;
  });
  // slide top  end  
  /*====== MinisidebarCart ======*/
  function miniCart() {
    var navbarTrigger = $('.cart-active'),
      endTrigger = $('.cart-close'),
      container = $('.sidebar-mini-cart-active'),
      wrapper2 = $('.cart-popup-wrapper');
    
    wrapper2.prepend('<div class="body-overlay"></div>');
    navbarTrigger.on('click', function(e) {
      e.preventDefault();
      container.addClass('inside');
      wrapper2.addClass('overlay-active');
      //$('body').addClass('body_cart_visible');
    });
    
    endTrigger.on('click', function() {
      container.removeClass('inside');
      wrapper2.removeClass('overlay-active');
      $('body').removeClass('body_cart_visible');
    });
    
    $('.body-overlay').on('click', function() {
      container.removeClass('inside');
      wrapper2.removeClass('overlay-active');
    });
  };
  
  miniCart();
 // loader start
  
  /*Sticky add to cart*/
  $('.qtybox .btnqty').on('click', function(){
    var qty = parseInt($(this).parent('.qtybox').find('#quantity').val());    
    if($(this).hasClass('qtyplus')) {
      qty++;
    } else {
      if(qty > 1) {
        qty--;
      }
    }    
    qty = (isNaN(qty)) ? 1:qty;
    $('.quantity-input-qty').val(qty); 
  });
  
  $('.custom-add-to-cart').on('click',function(){
    $('.product-form__cart-submit').trigger('click');
  })
  /* end sticky add to cart */
  /*===== Remove item from mini cart drawer ======*/  

  $(document).on('click','.cart-popup__close',function(){
    $('.cart-popup-wrapper').addClass('cart-popup-wrapper--hidden');
  });
  
   /**
  * loader start
  */
  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      if( document.querySelector("#loader") ){
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
      }
    }
  };
  /** 
   * loader end
   */

 // main menu
  $('#sidebarCollapse').on('click', function() {
    $('#nav_menu').toggleClass('active');
  });
  
  $("#menu_back").click(function () {
    $("#nav_menu").removeClass("active");
    $(".site-header .nav-menu").css("display", "none");
  });
  
  //if ($(window).width() < 992) {
    $(".mega-menu .cat-sub").attr("data-bs-toggle", "collapse");
    jQuery('.mega-menu').find('.cat-sub').attr('data-bs-toggle', 'collapse');
    
    $("#sidebarCollapse").click(function () {
      $(".site-header .nav-menu").addClass("active");
      $(".site-header .nav-menu").css("display", "block");
    });
    
    $('.header__search').on('click', function() {
      $('.search-bar__form').toggleClass('active');
    });
  //}
  //qty increement / decreement
  $('.add').click(function () {
    if ($(this).prev().val() < 100) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
  });
  
  $('.sub').click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });
 // category page grid - list
  $(".category_filter .grid-list li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
  
  $(".category_filter .grid-list li.list-view").click(function () {
    var dgrid_view = $(this).attr('data-grid_view');    
    if( dgrid_view == 2 ) {
      var grid_col_view = 'col-sm-6 col-md-6 col-lg-6';
    } else if( dgrid_view == 3 ) {
      var grid_col_view = 'col-sm-6 col-md-4 col-lg-4';
    } else if( dgrid_view == 4 ){
      var grid_col_view = 'col-sm-6 col-md-6 col-lg-3';
    } else if( dgrid_view == 5 ){
      var grid_col_view = 'small--one-half medium-up--one-fifth';
    }
    
    //console.log(grid_col_view);
    $("#Collection #grid").addClass("list_view");
    $("#Collection #grid").removeClass("grid_view");
    $("#Collection #grid .grid__item").addClass("col-sm-12 col-md-12 col-lg-12");
    $("#Collection #grid .grid__item").removeClass(grid_col_view);
    $("#Collection #grid .grid__item .product-card").addClass("row");
    $("#Collection #grid .grid__item .product-card .product-outer").addClass("col-md-4");
    $("#Collection #grid .grid__item .product-card .prd-detail").addClass("col-md-8");
    $('.cart-form-btn').show();
    $('.prd-btns').hide();
    $('.grid--uniform.grid--view-items.list_view li').each(function(){ });
  });
  
  $(".category_filter .grid-list li.grid-view").click(function () {
    var dgrid_view = $(this).attr('data-grid_view');
    //console.log(dgrid_view);
    if( dgrid_view == 2 ) {
      var grid_col_view = 'col-sm-6 col-md-6 col-lg-6';
    } else if( dgrid_view == 3 ) {
      var grid_col_view = 'col-sm-6 col-md-4 col-lg-4';
    } else if( dgrid_view == 4 ){
      var grid_col_view = 'col-sm-6 col-md-6 col-lg-3';
    } else if( dgrid_view == 5 ){
      var grid_col_view = 'small--one-half medium-up--one-fifth';
    }
    
    //console.log(grid_col_view);
    $("#Collection #grid").addClass("grid_view");
    $("#Collection #grid").removeClass("list_view");
    $("#Collection #grid .grid__item").addClass(grid_col_view);
    $("#Collection #grid .grid__item").removeClass("col-sm-12 col-md-12 col-lg-12");
    $("#Collection #grid .grid__item .product-card").removeClass("row");
    $("#Collection #grid .grid__item .product-card .product-outer").removeClass("col-md-4");
    $("#Collection #grid .grid__item .product-card .prd-detail").removeClass("col-md-8");
    $('.list-wish-cart').hide();
    $('.cart-form-btn').hide();
    $('.prd-btns').show();
    $('.grid--uniform.grid--view-items.grid_view li').each(function(){
      
    });
  });
 // Sidebar toggle
  $(".sidebar_filter_cls li").click(function () {
    
  });
  /*=======================swatch-element========================*/
  $(function() {
    //For sidebar filter checked/ unchecked jquery    
    //start getFilterProducts
    
    function getFilterProducts( tag ){
      $.ajax({
        type: 'GET',
        url: '/products.json',//'collections.json',dataType: 'json',
        success: function(res){
          //console.log(res);
        },
        error: function(status){
          //alert(status);
        }
      });
    }
  });
  
  $(function() {
    $(document).on('click', '.swatch .swatch-element', function() {
      var optionIndex = $(this).closest('.swatch').attr('data-option-index'); // 1
      var optionValue = $(this).find('input:radio').prop('checked', true);
      var size = $(this).closest(".product-form__controls-group").find('.swatch-element:not(.color) input:radio:checked').val();
      var color = $(this).closest(".product-form__controls-group").find('.swatch-element.color input:radio:checked').val();
      var style = $(this).closest(".product-form__controls-group").find(".swatch-element.style input:radio:checked").val();
      var material = $(this).closest(".product-form__controls-group").find('.swatch-element.material input:radio:checked').val();
      var third_swatch_name = '';
      var selectoption = '';      
      var section_id = $(this).closest('.product-form').find(".section-id").val();
      var productID = $(this).closest('.product-form').find(".productID").val();            
      var product_handle = $(this).closest('.product-form').find(".products_details").attr('data-product-handle');
      var option_index = $( this ).closest( ".swatch" ).data( "option-index" );  
      var cart_form_option = $( this ).closest(".product-form").find('.product-form__variants option');
      var single_product = $("#single_product").val();  
      var get_section_id = $(".product-template__container").attr('data-section-id');
      
      if( typeof material !== 'undefined' ){
        third_swatch_name = material;
      } else if( typeof style !== 'undefined' ){
        third_swatch_name = style;
      }
      
      if(single_product){
        product_handle = $(".products_details").val();
        section_id = $(".section-id").val();
      }
      
      if( typeof option_index !== 'undefined' ){
        var selected_value = $(this).data( 'value' );
      }
      
      if( size !='' && color !='' && third_swatch_name != '' ){
        selectoption = color + ' / ' + size + ' / ' + third_swatch_name;
      }else {
        selectoption = color + ' / ' + size;
      }
      
      if( product_handle ){
        $.getJSON('/products/' + product_handle + '.js', function (product) {
          var images = product.images;
          var imageCount = images.length;
          var pro_image = '';
          var options = product.options;
          var variant_option = 'dropdown';
          var featured_image_url = product.featured_image;
                
          $(product.variants).each(function (i, v) {
            var price = parseFloat(v.price / 100).toFixed(2);
            var original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
            var v_qty = v.inventory_quantity;
            var v_inv = v.inventory_management;
           
            if ( v.title === selectoption ) {              
              if( v.available ){                
                $('#AddToCart').prop('disabled', false);
                $('#AddToCart').find('.cart_lable_text').html('<span class="cart_lable_text" data-add-to-cart-text="">Add to cart</span>');
                
                if( typeof $("#ProductSelect-"+section_id).length !="undefined" && $("#ProductSelect-"+section_id).length > 0 ){                  
                  $("#ProductSelect-"+section_id).find('option').each(function() {
                    let option_val = $(this).val();                    
                    if( v.id == option_val ){                        
                      $(this).attr('selected', 'selected');                     
                    }
                  })
                }
                
              }else{
                $('#AddToCart').prop('disabled', true);$('#AddToCart').find('.cart_lable_text').html('<span class="cart_lable_text" data-add-to-cart-text="">Sold Out</span>');
              }
              
              if(single_product){
                $('.price__regular').empty();
                $('.price__badges').empty();
                $('.price__regular').text('$' + price);
                
                if( original_price > 0 ){
                  $('.price-item--sale').text('$' + price);
                  $('.qv-product-original-price').show();
                  $('.price-item--regular').text('$' + original_price);
                  $('.price__badges').append('<span class="price__badge price__badge--sale" aria-hidden="true"><span>Sale</span> </span>');
                }
              }
              
              if( original_price > 0 ){
                
              } else {
                $('.qv-product-original-price').hide();
              }
              
              if (v_inv == null) {
                $('.qv-add-button').prop('disabled', false).val('Add to Cart');
              } else {
                if (v.inventory_quantity < 1) {
                  $('.qv-add-button').prop('disabled', true).val('Sold Out');
                } else {
                  $('.qv-add-button').prop('disabled', false).val('Add to Cart');
                }
              }
              
              var url = featured_image_url;             
                url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");              
              $(images).each(function (i, image) {                
                image = image.replace('//', "");                
                if( image == url ){                 
                  $(".product-single__media-wrapper").addClass("hide");  
                  $(".set_grid_view_colom").addClass("hide"); 
                  $("#FeaturedMedia-"+get_section_id+"-"+v.featured_media.id+"-wrapper").css("width", '100%');
                  $("#FeaturedMedia-"+get_section_id+"-"+v.featured_media.id+"-wrapper").removeClass("hide");
                  $("#FeaturedMedia-product-left-thumbnail-"+v.featured_media.id+"-wrapper").removeClass("hide");                  
                  $('.prd-small-carousel').slick('slickGoTo', i);                                    
                }
              });
              
              //$('button.product-form__cart-submit').removeAttr('disabled');             
              $( cart_form_option ).each(function(i,value){                 
                if( $(value).val() == v.id ){                 
                  $( cart_form_option ).parent().removeAttr('selected');
                  $(this).prop( 'selected', true );                  
                }
              });
              
              /**
               * for single product varint
               */     

              if(single_product){
                $( '#ProductSelect-'+section_id+ ' option').each(function(i,value){                  
                  if( $(value).val() == v.id ){
                    $( '#ProductSelect-'+section_id+ ' option' ).removeAttr('selected');
                    $(this).prop( 'selected', true );                    
                  }
                }); 
              }               
            }
          });                 
        });
      }
    });
/*  availability check for sidebar filtering only radio button check */
    var available_url = window.location.href;
    var substring = 'filter.v.availability=1';
    var available_string = available_url.includes(substring);
    
    if( available_string ){
      $('.availability').addClass('show');
    }else{
      $('.availability').removeClass('show');
    }
    //var new_url = available_url.split("?");
       
/*  End availability check for sidebar filtering only radio button check */
/*==set cookies==*/
    var newsletter_show_time = $('#newsletter_show_time').val(); //get value from theme.liquid 
    
    if( typeof newsletter_show_time !="undefined" && newsletter_show_time.length <= 0 ){
      newsletter_show_time='5000';     
    }else{
      newsletter_show_time='1000';
    }
    var tm = parseInt( newsletter_show_time);
    
    if( Cookies.get("username") ){
      $('.news_popup_main').css({"opacity": "0", "visibility": "hidden" , "display": "none"});
    }else{
        var pathname = window.location.pathname;
        var home_url = '/';
        if( pathname != home_url ){            
        	$('.news_popup_main').css({"opacity": "0", "visibility": "hidden" , "display": "none"});
        }else{
          setTimeout(function() {
            $('.news_popup_main').css({"opacity": "1", "visibility": "visible" , "display": "block"});
            $('.news_popup_off').click(function(){
              $(".news_popup_main").fadeOut(400);
            })
          },tm );
        }   
    }
    
    $('.news_popup_off').click(function(){        
      let username = 'berry_newsletter';
      let exp_day = $("#news_cookie").val();      
      if( exp_day ){ 
        exp_day
      }else{
        exp_day = 1;
      }
           
      // Apply setCookie
      setCookie('username', username, exp_day);
    });
    
    function setCookie(cName, cValue, expDays) { 
      let date = new Date();        
      date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
        
    $(".newsletter-btn").click(function(){
      var email = $("#Email").val();
      var exp_day = $("#news_cookie").val();
      if( email ){
        let username = 'berry_newsletter';
        // Apply setCookie
      	setCookie('username', username, exp_day);
      }
    });
  });
  
// sections Product-countdown    
  if ($(".timer").length > 0) {
    $(".timer").each(function (i) {
      var sdate = $(this).find(".timer-display").data("start_date");
      var edate = $(this).find(".timer-display").data("end_date");
      var sect = $(this);
      
      var second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
      var countDown = new Date( edate ).getTime(),
          x = setInterval(function() {
          var now = new Date().getTime(),
              distance = countDown - now;			 
            if(distance  > 0) {
              sect.find('.js-timer-days').html(Math.floor(distance / (day))),
              sect.find('.js-timer-hours').html(Math.floor((distance % (day)) / (hour))),
              sect.find('.js-timer-minutes').html(Math.floor((distance % (hour)) / (minute))),
              sect.find('.js-timer-seconds').html(Math.floor((distance % (minute)) / second));
            }        
        }, second)
      });
    }
  
  // collection filtering
  $('.collection-filter a').click(function(){
    $( '.collection-filter a' ).removeClass('active');
    $( this ).addClass('active');
  });
  
   if($("#sticky_product_item").length){  
     var s = $("#sticky_product_item");
     var pos = s.position();  
     var s_ftr = $(".prd-page-tab");
     var ftr = s_ftr.position();
     
     $(window).scroll(function() {
         var windowpos = $(window).scrollTop();

         if (windowpos >= pos.top) {
             s.addClass("stick");
         } else {
             s.removeClass("stick");  
         }
       if( windowpos >= ftr.top ){ s.removeClass("stick"); }else{  }
    });

  } 

  /*== start deaily section ==*/
 $('.daily_of_deal_section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.deal_of_thumbnail'
 });
$('.deal_of_thumbnail').slick({
   	slidesToShow: 2,
  	slidesToScroll: 1,
  	asNavFor: '.daily_of_deal_section',
  	dots: false,
  	arrows: false,
  	vertical:true,
  	centerMode: false,
  	focusOnSelect: true,
  	responsive:[{
    	breakpoint: 768,
    	settings: { 
      		vertical:false, 
      		slidesToShow: 1,
      		dots: true
    	}
  	}]
});
 /*=== Blogs section slider ===*/ 
  var $blogs_slide = $('.Blogs_Slide');
  if( $blogs_slide.length > 0 && $blogs_slide !='undefined' ){     
    var $blog_slider = $( $blogs_slide ).map(function() {
      return $(this).attr('id');
    });
    
    if( $blog_slider ){
      $( $blogs_slide ).each(function(index,element){
        if( $blogs_slide ){
          $( '#'+element.id ).slick({
            infinite: $( '#'+element.id ).data('infinite'),
            dots: $( '#'+element.id ).data('dots'),
            arrows: $( '#'+element.id ).data('arrows'),
            prevArrow:'<div class="slide-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-left" width="60" height="60" viewBox="0 0 60 60"><g id="Component_9_17" data-name="Component 9 – 17" transform="translate(73 70) rotate(180)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(-1, 0, 0, -1, 1664, 789.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(73 70) rotate(180)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
            nextArrow:'<div class="slide-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-right" width="60" height="60" viewBox="0 0 60 60"><g id="Component_9_18" data-name="Component 9 – 18" transform="translate(9 6)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(1, 0, 0, 1, 1582, 713.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(9 6)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
            autoplay: $( '#'+element.id ).attr('data-autoplay'),     
                  slidesToShow: $( '#'+element.id ).data('lgup'),    
                  slidesToScroll: 1,
                  variableWidth: true,
                  responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('lgdown')             
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mddown')           
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('smdown')          
                      }
                    },
                    {
                      breakpoint: 543,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mobile')          
                      }
                    }

                  ]   
           });
          }
    	})
    }       
  } 
  /*=== End Blogs section slider ===*/
 /*=== Testimonial slider section ===*/  
var $testimonial_slide = $('.Testimonial_Slide');
  if( $testimonial_slide.length > 0 && $testimonial_slide !='undefined' ){     
    var $testimobial_slider = $( $testimonial_slide ).map(function() {
      return $(this).attr('id');
    }); 
   
    if( $testimobial_slider ){
    	$( $testimonial_slide ).each(function(index,element){           
          if( $testimonial_slide ){
    			$( '#'+element.id ).slick({                   
                  infinite: $( '#'+element.id ).data('infinite'),
                  dots: $( '#'+element.id ).data('dots'),
                  arrows: $( '#'+element.id ).data('arrows'),    
                  prevArrow:'<div class="slide-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-left" width="60" height="60" viewBox="0 0 60 60"><g id="Component_9_17" data-name="Component 9 – 17" transform="translate(73 70) rotate(180)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(-1, 0, 0, -1, 1664, 789.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(73 70) rotate(180)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
                  nextArrow:'<div class="slide-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-right" width="60" height="60" viewBox="0 0 60 60"><g id="Component_9_18" data-name="Component 9 – 18" transform="translate(9 6)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(1, 0, 0, 1, 1582, 713.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(9 6)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
                  autoplay: $( '#'+element.id ).attr('data-autoplay'),     
                  slidesToShow: $( '#'+element.id ).data('lgup'),    
                  slidesToScroll: 1,  
                  responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('lgdown')             
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mddown')           
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('smdown')          
                      }
                    },
                    {
                      breakpoint: 543,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mobile')          
                      }
                    }

                  ]   
           });
          }
    	})
    }       
  } 
/*=== slick slider for the Over product section  ==*/   
  var $our_product = $('.OurProducted'); 
 
  if( $our_product.length > 0 && $our_product !='undefined' ){     
    var $set_slider = $( $our_product ).map(function() {
      return $(this).attr('id');
    });    
    if( $set_slider ){
    	$( $our_product ).each(function(index,element){           
          if( $our_product ){
    			$( '#'+element.id ).slick({                   
                  infinite: $( '#'+element.id ).data('infinite'),
                  dots: $( '#'+element.id ).data('dots'),
                  arrows: $( '#'+element.id ).data('arrows'),    
                  prevArrow:'<div class="slide-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-left" width="82" height="82" viewBox="0 0 82 82"><g id="Component_9_17" data-name="Component 9 – 17" transform="translate(73 70) rotate(180)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(-1, 0, 0, -1, 1664, 789.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(73 70) rotate(180)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
                  nextArrow:'<div class="slide-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon icon-chevron-right" width="82" height="82" viewBox="0 0 82 82"><g id="Component_9_18" data-name="Component 9 – 18" transform="translate(9 6)"><g id="Group_2657" data-name="Group 2657" transform="translate(-1591 -719.023)"><g transform="matrix(1, 0, 0, 1, 1582, 713.02)" filter="url(#Rectangle_1513)"><rect id="Rectangle_1513-2" data-name="Rectangle 1513" width="64" height="64" rx="11" transform="translate(9 6)" fill="#fff" opacity="0"/></g><g id="left-arrow-key" transform="translate(1640.818 758.849) rotate(180)"><g id="keyboard-backspace" transform="translate(0)"><path id="Path_11487" data-name="Path 11487" d="M35.67,10.025H13.054L12.967,0,0,12.813H35.67Z"/></g></g></g></g></svg></div>',
                  autoplay: $( '#'+element.id ).attr('data-autoplay'),     
                  slidesToShow: $( '#'+element.id ).data('lgup'),    
                  slidesToScroll: 1,  
                  responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('lgdown')             
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mddown')           
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('smdown')          
                      }
                    },
                    {
                      breakpoint: 543,
                      settings: {
                        slidesToShow: $( '#'+element.id ).data('mobile')          
                      }
                    }

                  ]   
           });
          }
    	})
    }
    
    // Custom carousel nav
	$('.carousel-prev').click(function(){ 
		$(this).find( $our_product ).slick('slickPrev');
	} );
	
	$('.carousel-next').click(function(e){
		e.preventDefault(); 
		$(this).find( $our_product ).slick('slickNext');
	} );
  }
 
  /*===End fo daily deal section ==*/
  //for the filtering tab slider 
  //setTimeout(function(){
 $('.product_left_thumbnail').slick({                   
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: false, 
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,    
    slidesToScroll: 1,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,          
          arrows: true,
          dots: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,          
          arrows: true,
          dots: false,
          slidesToScroll: 1
        }
      }

    ]   
  });
    //}, 1000);
});

//same image hide or show
$(document).ready(function(){
  setTimeout(function() {
    var selectedColor = $('.field-option ').find(' input[type="radio"][name="Color"]:checked').val();    
    if( typeof selectedColor !=='undefined' && selectedColor !=''){
      selectedColor = selectedColor.toLowerCase();      
      let grandParents = $('.thumbnail_img.'+selectedColor).parents('.slick-slide');      
      if( grandParents.length > 0 ){
        $('.slick-slide').removeClass('new_slide_active');
        grandParents.each(function() {
          $(this).addClass('new_slide_active');
        });
        $('.single_product_slider').slick('slickFilter', '.new_slide_active');
      }
    }
  }, 500);
});
//header search form show on click search icon headaer 3
$(document).ready(function(){
  $(document).on('click', 'a.search-icon', function(e) {
    $('.custom-search-form').toggle();  
    $('body').addClass('overflow-hidden');
  })
  $(document).on('click','.search_form_close', function(){
    $('.custom-search-form').toggle();
    $('body').removeClass('overflow-hidden');
  })

  //Start compare button
  var compareButtonClass = '.compare_btn';
  var compareObject = JSON.parse(localStorage.getItem('Compare_product')) || [];
  var $compareContainer = $('.js-compare-content');
  function loadCompare(){
    var compareGrid;    
    $compareContainer.html('');
    $(".js-product-list").html('');
    if (compareObject.length > 0){
      if( $('.js-compare-content').find('.d-inline-block').length ){
        $('.js-compare-content').find('.d-inline-block').remove();
      }      
      compareGrid = compareObject.length === 1? 'col-md-12 col-sm-12' : 'col';      
      for (var i = 0; i < compareObject.length; i++) {
        var productHandle = compareObject[i];        
        var productTileTemplateUrl = '/products/' + productHandle + '?view=card_compare';        
        var resultPromise = fetch(productTileTemplateUrl).then(function (res) {
          return res.text();
        });
        
        resultPromise.then(function (response) {          
          if (response && response.trim() != '') {
            if( window.location.href.indexOf("pages") > -1 ) {              
              $(".js-product-list").append(response.trim());
            }else{
              $compareContainer.append(response.trim());                            
              $('#jsCompare').modal('show');              
            }
            //$('.js-product-list').append(response.trim( ));
          }
        }).catch(function(error) {
          //addErrorStyles('Failed to perform search. Check your internet connection and try again.');
        });
      }
    }else{
      //loadCompare();
      $(".js-product-list").html(`<div class="alert alert-warning d-inline-block">No result found </div>`);
      $compareContainer.html(`<div class="alert alert-warning d-inline-block">No result found </div>`);
    }
    
    //button text  
    getActiveCompare();    
  }
  getActiveCompare();
  function getActiveCompare(){
    $(compareButtonClass).each(function(){
      var productHandle = $(this).data('compare_handle');      
      var status = $.inArray(productHandle,compareObject) !== -1 ? 'active' : '';      
      $(this).removeClass('active').addClass(status);
    });
  }
  function updateCompare(self) {    
    var productHandle = $(self).data('compare_handle'),
        alertText = '';    
    var isAdded = $.inArray(productHandle,compareObject) !== -1 ? true:false;     
    
    if (isAdded) {
      localStorage.removeItem(productHandle);
      //compareObject.splice(compareObject.indexOf(productHandle), 1); 
      //compareObject.splice(compareObject.indexOf(productHandle), 1);    
      //localStorage.setItem('Compare_product', JSON.stringify(compareObject)); 
    }else{
      if (compareObject.length === 4){        
      }else{        
        compareObject.push(productHandle);        
      }
    }        
    localStorage.setItem('Compare_product', JSON.stringify(compareObject)); 
  };
 
  $(document).on('click','.close_button', function(){
    $('#jsCompare').modal('hide');
  })
  $(document).on('click','.remove_compare_product',function(e){
    e.preventDefault(); 
    var productHandle = $(this).data('handle');    
    $(this).closest('.final_compare_product').find('.compare-product-popup').remove();
    $(this).closest('.js-compare-content').find('.compare-product-popup').remove();
    compareObject.splice(compareObject.indexOf(productHandle), 1);    
    localStorage.setItem('Compare_product', JSON.stringify(compareObject)); 
    loadCompare();
  });
  
  $(document).on('click','.compare_icon',function (event) {
    event.preventDefault();     
    if ( $( this ).hasClass('active') ) {
      $( this ).removeClass('active');
    }    
    updateCompare(this);
    loadCompare();
  });
  
  /* sticky add to cart dropdown : Start */
  $(document).on('click','.sticky_cart_variants li', function() {
    let variant_price = $(this).find('.money').text(); //data("variant-price");
    $('.sticky_v_label span').html($(this).data('variant-title'));
    $('.sticky_cart_variants').hide(500);
    console.log(variant_price);
    $('.addcart-content .money').html(variant_price);
  });
    
  /* sticky add to cart dropdown : End */
  /*=== Frequently bought together ==*/
  var time,
    clbtn = $('.js_fpt_clbtn'),
    tt_price = $('.fbt_tt_price'),
    save_price = $('.save_price'),
    ogprice_old,price_old;
  
  // Variation product checkbox checked base total price update
  
  $(document).on('click', '.common_select .js_fbt_ck', function(e){
    var parent_el = $(this).closest('.common_select');
    var frequently_input = $(this).closest('.common_select').find('.product_detail_box').find('.js_fbt_input');
    var frequently_select = parent_el.find('.js_fbt_sl');
    var frequently_qty = parent_el.find('.js_grp_qty');
    
    if( $( this ).is(':checked') ){
      parent_el.addClass("frequently_active");
      let img_id = $(this).attr('id');
      $('.'+img_id).fadeIn(300);
      frequently_update( frequently_select, frequently_input, true );
    }else{
      parent_el.removeClass("frequently_active");
      let img_id = $(this).attr('id');
      $('.'+img_id).fadeOut(300);
      frequently_update( frequently_select, frequently_input, false );
    }
  });
  
  // frequently_update function call when checkbox checked .js_fbt_ck
  function frequently_update(select_data, input_data, bool){    
    if (select_data.length > 0) {
      var op_cked = select_data.closest('.common_select').find('.selected_varinat');
      var ogprice = op_cked.attr('data-ogprice');      
      var price = op_cked.attr('data-price');      
      totalPriceUpdate(ogprice, price, bool); //function fbtt_update(ogprice, price,bl);
    } else {
      var ogprice = input_data.attr('data-ogprice');
      var price = input_data.attr('data-price');
      totalPriceUpdate(ogprice, price, bool); //function fbtt_update(ogprice, price,bl);
    }
  }

 function totalPriceUpdate(ogprice, price, bool){
   if( bool ){
     var cppr = parseInt(tt_price.attr('data-cppr')) + parseInt(ogprice);
     var pr = parseInt(tt_price.attr('data-pr')) + parseInt(price);
     var save_pr = parseInt(cppr) - parseInt( pr);
   } else {
     var cppr = parseInt(tt_price.attr('data-cppr')) - parseInt(ogprice);
     var pr = parseInt(tt_price.attr('data-pr')) - parseInt(price);
     var save_pr = parseInt(cppr) - parseInt( pr);
   } 
       
   tt_price.attr('data-cppr',cppr);
   tt_price.attr('data-pr',pr);
   
   if ( cppr > pr ) {
     tt_price.html('<ins>'+formatMoney(pr, Formate)+'</ins> <del>'+formatMoney(cppr, Formate)+'</del>');
     save_price.html('<p>Saved :</p>'+ formatMoney(save_pr, Formate) )
   } else {
     tt_price.html(formatMoney(pr,Formate));
     save_price.html('<p>Saved :</p>'+ formatMoney(save_pr, Formate) )
   }   
 };
  var ogprice_old,price_old;
 
  $('.js_fbt_sl li').on('click', function(e){
    var ogprice_old = $('.frqntly_select.selected_varinat').data('ogprice');
    var price_old = $('.frqntly_select.selected_varinat').data('price');
    $('.frequently_ul').hide(500);
    $('.frqntly_select').removeClass('selected_varinat');
    $(this).addClass('selected_varinat');
    $('.fqntly_variant_price span').html( $(this).find('span').text() );
    var $this = $(this),            
      fbt_li = $this.closest('.common_select'),
      fbt_price = fbt_li.find('.kl_fbt_price'),      
      ogprice = $this.data('ogprice'),
      price = $this.data('price'),
      img = fbt_li.data('img'),
      sl = $(fbt_li.data('sl')),
      img_url = '115x';

    var a = ogprice_old - ogprice,
      b = price_old - price;    
    
    if ( ogprice > price ) {
      fbt_price.html('<del>'+formatMoney(ogprice, Formate)+'</del> <ins>'+formatMoney(price, Formate)+'</ins>');
    } else {
      fbt_price.html(formatMoney(price, Formate));
    }
    
    totalPriceUpdate(a, b, false);
  });
  
   $(document).on('submit','#fbt_frm_id', function(e){
    e.preventDefault();
    var fbt_Ids = [];
    var formData = $(this).serializeArray();
    var frqnt_len = $('.frequently_active').length; 
    //var formData = $(this).serialize();
     if ( typeof $('.frequently_active') !=='undefined' && $('.frequently_active').length > 0 ) {
       $('.frequently_active').each(function(index,element){
         if( $(this).find('.js_fbt_input').length > 0 ) {
           let pr_vid = $(this).find('.js_fbt_input').val();
           fbt_Ids.push({ id: pr_vid, quantity: 1});
         }else if ( $(this).find('.js_fbt_sl').length > 0 ) {
           let pr_vid = $(this).find('.js_fbt_sl').val();
           fbt_Ids.push({ id: pr_vid, quantity: 1});
         } else { }
       })
     }
     
     var newdata = fbt_Ids;
     if ( newdata.length > 0  ) {
       $.ajax({
         type: 'POST',
         url: '/cart/add.js',
         dataType: 'json',
         data:{ items: newdata },
         success: function(res){          
          setTimeout(function(){ window.location.href = '/cart';},800);
         }
       })
     }
   });
  /*=== End frequently bought together ==*/
  
  /*-- Facet filter for mobile view: start --*/
  if ( typeof $('.mobile_facet_filter') !=='undefined' && $('.mobile_facet_filter').length >0 ) {
    $('.mobile_facet_filter').on('click', function(){
      $('.collection_sidebar_filter').toggleClass("active");
    })
  }
  /*-- Facet filter for mobile view: start --*/

 /* <ul>  convert to select box only for mobile: Start */
   
  const $tabsToDropdown = $(".model-tab-section .page-width");
  function generateDropdownMarkup(container) {
    const $navWrapper = container.find(".prd-page-tab");
    const $navPills = container.find(".nav-tabs");
    const firstTextLink = $navPills.find("li:first-child a").text();
    const $items = $navPills.find("li");
    
    const markup = `
    <div class="dropdown d-md-none">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${firstTextLink}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
        ${generateDropdownLinksMarkup($items)}
      </div>
    </div>`;
    
    $navWrapper.prepend(markup);
  }
  
  function generateDropdownLinksMarkup(items) {
    let markup = "";
    items.each(function () {
      const textLink = $(this).find("a").text();      
      markup += `<a class="nav-item dropdown-item" href="#">${textLink}</a>`;
    });
    return markup;
  }
  
  function showDropdownHandler(e) {
    // works also
    //const $this = $(this);
    const $this = $(e.target);
    const $dropdownToggle = $this.find(".dropdown-toggle");
    const dropdownToggleText = $dropdownToggle.text().trim();
    const $dropdownMenuLinks = $this.find(".dropdown-menu a");
    const dNoneClass = "d-none";
    
    $dropdownMenuLinks.each(function () {
      const $this = $(this);
      if ($this.text() == dropdownToggleText) {
        $this.addClass(dNoneClass);
      } else {
        $this.removeClass(dNoneClass);
      }
    });
  }
  
  function clickHandler(e) {
    e.preventDefault();
    const $this = $(this);
    const index = $this.index();
    let addition = parseInt( $this.index() )+1;
    const text = $this.text();
    $('.tab-pane').removeClass("active");
    $('#tabs-'+addition).addClass("active");
    //$(this).closest(".prd-page-tab").find(".tab-pane").addClass("active");
    $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
    $this
    .closest($tabsToDropdown)
    .find(`.nav-pills li:eq(${index}) a`)
    .tab("show");
  }
  
  function shownTabsHandler(e) {
    // works also
    //const $this = $(this);
    const $this = $(e.target);
    const index = $this.parent().index();
    const $parent = $this.closest($tabsToDropdown);
    const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
    const targetDropdownLinkText = $targetDropdownLink.text();
    $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
  }
  
  $tabsToDropdown.each(function () {
    const $this = $(this);
    const $pills = $this.find('a[data-bs-toggle="tab"]');
    
    generateDropdownMarkup($this);
    const $dropdown = $this.find(".dropdown");
    const $dropdownLinks = $this.find(".dropdown-menu a");
    
    $dropdown.on("show.bs.dropdown", showDropdownHandler);
    $dropdownLinks.on("click", clickHandler);
    $pills.on("shown.bs.tab", shownTabsHandler);
  });
  /* <ul>  convert to select box only for mobile: End */
})



