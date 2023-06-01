
/**
 * Quick View
 * -----------------------------------------------------------------------------
 * A collection of product quick view
 *
 *
 * 
 */
 
$(document).ready(function () {  
    quickView();    
});
$('button.close').click(function(){ 
  if($('#quickModal').hasClass("show")){
    $('#quickModal').modal('hide');
  }
});

function quickView() { 
  $(document).on("click",".button-quick-view",function(){
    $("#quickModal").toggleClass('show');  
    	var product_handle = $(this).data('product-handle');        
        $('#quick-view').addClass(product_handle);
        $( ".qv-product-bundle" ).val( product_handle );
      	var set_variant_option = $( ".qv-product-options" ).data( 'prd_variants' );
        var set_variant_radious = $( ".qv-product-options" ).data( 'prd_radious' );    
        var variant_option = 'dropdown'; //default variation options
        var variant_radious = true;
    
        if( typeof set_variant_option !== 'undefined' && set_variant_option != '' ){
            variant_option = set_variant_option;
        }
        if( typeof set_variant_radious !== 'undefined' ){
            variant_radious = set_variant_radious;
        }         
        jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
            var prd_id = product.id;        
            var title = product.title;
            var type = product.type;
            var price = 0;
            var sale_price = parseFloat(product.compare_at_price / 100).toFixed(2);
            var original_price = 0;
            var desc = product.description;          
            var images = product.images;
            var variants = product.variants;
            var options = product.options;
            var url = '/products/' + product_handle;
            var color = false;
            var option_name_arr = [];
            var option_value_arr = [];

            $('.product_model_title span').show();            
            if( desc.length == false ){ $('.product_model_title span').hide(); }
            $('.qv-product-title').text(title);
            $( ".review_section" ).html( '<span class="shopify-product-reviews-badge" data-id="'+prd_id+'"></span>' );
            window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
            $("#product_handle").val(product_handle);
            $('.qv-product-type').text(type);
            $('.qv-product-description').html(desc);
            $('.view-product').attr('href', url);
          	$(".product_sale_price").empty();
          
            if( sale_price > 0 ){                
            	$('.product_sale_price').append('<span class="price__badge price__badge--sale" aria-hidden="true"><span>Sale</span> </span>');
            }
          
            var imageCount = $(images).length;
          
            $(images).each(function (i, image) {
                if (i == imageCount - 1) {
                    var image_embed = '<div><img class="slideimage" src="' + image + '"></div>';
                    image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
                    $('.qv-product-images').append(image_embed);
                      $('.qv-product-images').slick({
                        'dots': false,
                        'arrows': true,
                        'respondTo': 'min',
                        'useTransform': false
                      }).css('opacity', '1');
                } else {
                    image_embed = '<div><img class="slideimage" src="' + image + '"></div>';
                    image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
                    $('.qv-product-images').append(image_embed);
                }
            });
          
            //var first_variant = true;
            $(options).each(function (i, option) {              
              var string = option.values ;              
              if( string != "Default Title" ){                
                //var first_variant = true;                 
                var opt = option.name;                  
                var sized = opt.toLowerCase().indexOf( 'size' ); 
                if( opt.toLowerCase().indexOf( 'color' ) != -1 || opt.toLowerCase().indexOf( 'colour' ) != -1 ){
                    var color = true;                    
                }
                
                var selectClass = '.option.' + opt.toLowerCase();               
                $('.qv-product-options').append('<div class="variant_options option-selection-' + opt.toLowerCase() + '"><span class="option-title">' + opt + '</span><select class="option-' + i + ' option ' + opt.toLowerCase() + '"></select></div>');
                $(option.values).each(function (i, value) {                    
                    $('.option.' + opt.toLowerCase()).append('<option value="' + value + '">' + value + '</option>');
                });
                
                if( variant_option == 'box' ){                  
                    $( '.qv-product-options' ).append( '<div class="swatch clearfix swatch-'+opt.toLowerCase()+'" data-option-index="'+i+'"><div class="header">'+opt+'</div></div>' );                                        
                  	$(option.values).each(function (i, value) {                     
                     if( opt.toLowerCase() == 'size' ){
                         var n = 0;                       
                         if( n == i ){                          
                          var first_variant = true;                  
                         }
                     }else if( opt.toLowerCase() == 'color' || opt.toLowerCase() == 'colour' ){
                       var n = 0;                       
                         if( n == i ){                          
                          var first_variant = true;                  
                         }
                       var n = 1;
                     } else{ 
                         var n = 0;                         
                         if( n == i ){                          
                          var first_variant = true;                  
                         }
                         var n = 2;
                       }                      
                        var swatch_html = '<div data-value="'+value+'" class="swatch-element ';
                        if ( color ){
                            swatch_html += 'color ';
                        }
                        swatch_html += value +'">';
                        if( color ){
                            swatch_html += '<div class="tooltip">'+value+'</div>';
                        }                       
                        swatch_html += '<input id="swatch-'+n+'-'+value+'" type="radio" class="radion_checked" name="option-'+n+'" value="'+value+'" ';
                        if( first_variant ){ 
                            swatch_html += 'checked ';
                        } 
                        swatch_html +=  '/>';
                        swatch_html += '<label for="swatch-'+n+'-'+value+'" '
                        if ( variant_radious ){
                            swatch_html += 'class="radious"';
                        }
                        swatch_html += 'style="';
                        if( color ){
                            var color_value_obj = value.split( ' ' );
                            var color_value = color_value_obj[ color_value_obj.length - 1 ];
                            swatch_html += 'background-color: '+ color_value+';';
                        }
                        if( variant_radious ){
                            swatch_html += 'border-radius: 50%;';
                        }
                        swatch_html += '">';
                        if( !color ){
                            swatch_html += value;
                        }
                        swatch_html += '</label>';
                        swatch_html += '</div>';                       
                        $( '.swatch-'+opt.toLowerCase() ).append( swatch_html );                      
                    });
                    $( '.option-'+i ).closest('.variant_options').hide();                    
                 }
              } 
            }); 
          
            $(product.variants).each(function (i, v) {
                if( v.available ){                      
                  $('.qv-add-button').attr('disabled', false);
                  $('.qv-add-button').val('Add to Cart');
                }else{                      
                  $('.qv-add-button').attr('disabled', true);
                  $('.qv-add-button').val("Sold Out");//find('.cart_lable_text').html('<span class="cart_lable_text" data-add-to-cart-text="">Sold Out</span>');
                }
                if (v.inventory_quantity == 0) {
                    $('.qv-add-button').prop('disabled', true).val('Sold Out');
                    $('.qv-add-to-cart').hide();
                    $('.qv-product-price').text('Sold Out').show();
                    return true
                } else {                  
                  var select = '<select id="product-select-qv" name="id">';
                  var selected = 'selected';
                    for (i = 0; i < product.variants.length; i++) {
                      var _var = product.variants[i];
                      if(_var.available) {
                        select += '<option value="' + _var.id + '"' + selected +'>' + _var.title + '</option>'
                        selected = '';
                      }
                    }
                  select += '</select>';
                  $(".variation_option").html(select);
                    price = parseFloat(v.price / 100).toFixed(2);
                    original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
                    $('.qv-product-price').text('$' + price);
                    if (original_price > 0) {
                        $('.qv-product-original-price').text('$' + original_price).show();
                    } else {
                        $('.qv-product-original-price').hide();
                    }
                    $('select.option-0').val(v.option1);
                    $('select.option-1').val(v.option2);
                    $('select.option-2').val(v.option3);
                    return false
                }
            });
        });
		        
       $( '#quickModal' ).modal( 'show' );
    });
  $( '.close' ).click( function(){ 
    $('#quickModal').removeClass('show');
  });
  
    $( document ).on( "click", "#quickModal .swatch-element", function( e ){
        e.preventDefault();        
        var option_index = $( this ).closest( ".swatch" ).data( "option-index" );       
        if( typeof option_index !== 'undefined' ){
            var selected_value = $(this).data( 'value' );            
            $( this ).closest( ".qv-product-options" ).find( '.option-'+option_index ).val( selected_value );
            $( this ).closest( ".qv-product-options" ).find( '.option-'+option_index ).trigger( 'change' );
        }
    });
    
    $(document).on("change", "#quickModal select", function () {        
        var $this = $(this);      
        var product_handle = $(this).closest(".modal-body").find( '.qv-product-bundle' ).val();  
        var selectedOptions = '';
        $('#quickModal select').each(function (i) {
            if (selectedOptions == '') {
                selectedOptions = $(this).val();
            } else {
                selectedOptions = selectedOptions + ' / ' + $(this).val();
            }
        });
      
        jQuery.getJSON('/products/' + product_handle + '.js', function (product) {          
          	var images = product.images;
          	var imageCount = images.length;
            var pro_image = '';
            
            $(product.variants).each(function (i, v) {
                if (v.title == selectedOptions) {                    
                    var price = parseFloat(v.price / 100).toFixed(2);
                    var original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
                    var v_qty = v.inventory_quantity;
                    var v_inv = v.inventory_management;                  
					if( v.available ){                      
                      $('.qv-add-button').attr('disabled', false);
                      $('.qv-add-button').val('Add to Cart');
                    }else{                      
                      $('.qv-add-button').attr('disabled', true);
                      $('.qv-add-button').val("Sold Out");//find('.cart_lable_text').html('<span class="cart_lable_text" data-add-to-cart-text="">Sold Out</span>');
                    }
                  
                    $('.product_sale_price').empty();
                    $('.qv-product-price').text('$' + price);
                
                    if( original_price > 0 ){
                        $('.qv-product-original-price').show();
                        $('.qv-product-original-price').text('$' + original_price);
                        $('.product_sale_price').append('<span class="price__badge price__badge--sale" aria-hidden="true"><span>Sale</span> </span>');
                        
                    } else {
                        $('.qv-product-original-price').hide();
                    }

                    var url = '';
                    if( v.featured_image != null ){
                      url = v.featured_image.src;
                      url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
                    }
                  
                    $(images).each(function (i, image) {
                     image = image.replace('//', "");
                        if( image == url ){
                          $('.qv-product-images').slick('slickGoTo', i);
                        }
                  });
                }                 
            });           
        });
    });
  	
    $(document).on("click", ".qv-add-button", function () {
      var product_handle = $(this).closest(".modal-body").find( '.qv-product-bundle' ).val();
      var qty = $('.qv-quantity').val();
      var selectedOptions = '';
      var var_id = '';
      
      $('#quickModal select').each(function (i) {
        if (selectedOptions == '') {
          selectedOptions = $(this).val();
        } else {
          selectedOptions = selectedOptions + ' / ' + $(this).val();
        }
      });
      
      jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
        $(product.variants).each(function (i, v) {
          if (v.title == selectedOptions) {
            var_id = v.id;
            processCart();
          }else if( selectedOptions == '' ){
            var_id = v.id;
            processCart();
          }
        });
      });
      
      function processCart() {
        jQuery.post('/cart/add.js', { quantity: qty, id: var_id },
                    null,
                    "json"
                   ).done(function () {
          $('.qv-add-to-cart-response').addClass('success').html('<span>' + $('.qv-product-title').text() + ' has been added to your cart. <a href="/cart">Click here to view your cart.</a>');
          
        }).fail(function ($xhr) {
            var data = $xhr.responseJSON;
            $('.qv-add-to-cart-response').addClass('error').html('<span><b>ERROR: </b>' + data.description);
          });

       document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
      }
    });

  
    $( '#quickModal' ).on( "hidden.bs.modal", function( e ){
        //$('#quick-view').removeClass().empty();
        $( ".qv-product-images" ).slick('unslick');
        $( ".qv-quantity" ).val(1);
        $( ".qv-product-images" ).empty();
        $( ".qv-product-options" ).empty();
        $( ".qv-add-to-cart-response" ).attr('class', 'qv-add-to-cart-response').empty();
    });
};