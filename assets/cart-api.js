// ---------------------------------------------------------
// GET cart.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.getCart = function(){
  jQuery.getJSON('/cart.js', function(cart) { return cart; });
}
/* override functions api.jquery.js */
jQuery(document).on('click','.AddToCart',function(e){
  e.preventDefault();
  jQuery( this ).find('.set_loader').removeClass("hide");
  jQuery( this ).find('.set_loader').addClass("show");
  
  var product_id = jQuery( this ).data('product_id');
  var form_id = jQuery( this ).closest("form").attr('id');
  
  jQuery('#data-loader').removeClass('hide');
    if( product_id ){    //check in cart-api.js
      Shopify.addItemFromFormStart( form_id , product_id );
      setTimeout(function(){
        jQuery('.cart-popup-wrapper').addClass('cart-popup-wrapper--hidden').fadeOut(1000);
      }, 6000);          
    }
});

Shopify.onItemAdded = function(line_item) {
  Shopify.getCart();
};

Shopify.onCartUpdate = function(cart) {
  Shopify.cartUpdateInfo(cart, '.product_list_widget');
};

Shopify.onError = function(XMLHttpRequest, textStatus) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    var str = data.description;
  } else {
    var str = 'Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.';
  }
  
  jQuery('.error_message').text(str);
  jQuery('#modalAddToCartError').modal("toggle");
  
  setTimeout(function () {
    jQuery('.shopping__cart').removeClass("shopping__cart__on");
    jQuery('.body__overlay').removeClass("is-visible");
  },2000);
}

Shopify.addItem = function(variant_id, quantity, callback) {
  var quantity = quantity || 1;
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: 'quantity=' + quantity + '&id=' + variant_id,
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item);
      }else {
        Shopify.cartPopap(variant_id);
        Shopify.onItemAdded(line_item);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };  
  jQuery.ajax(params);
};
Shopify.removeItem = function( variantID ) {
  if(typeof variantID !=='undefined' && variantID !="" ){
    jQuery.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: { quantity: 0, id: variantID },
      dataType: 'json',
      success: function(cart) {
        Shopify.onCartUpdate(cart);
      }
    })
  }
}

Shopify.addItemFromForm = function(form_id, variant_id,callback) {
  if( form_id == undefined ){
    var qty = 1;
    var data = {
      "id": variant_id,
      "quantity": qty,
      "properties": { }
    }             
  }else{
    //var data = jQuery('#' + form_id).serialize();
    var data = $('#' + form_id).serializeArray();
    for ( index = 0; index < data.length; ++index ) {
      if (data[index].name == "id") {
        var variant_id = data[index].value;
        break;
      }
    }
  }
  
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: data,
    dataType: 'json',
    success: function(line_item) {      
      if ((typeof callback) === 'function') {
        callback(line_item);
      }else {
        Shopify.onItemAdded(line_item);
      }
      $.getJSON('/cart.js', function(cart) {
        $.each(cart, function(key, value) {
          if ( key === 'items' ) {
            if ( value.length ) {
              jQuery.each(value, function(i, item) {                
                if( item.id == variant_id ){
                  $('.cart-popup-wrapper').fadeToggle('3000');
                  $('#append_cart_img').empty();
                  $('#append_cart_img').removeClass('hide');
                  var swtch_option = '';
                  swtch_option +='<ul>';
                  
                  if( item.options_with_values.length > 0 ){
                    jQuery.each(item.options_with_values, function(optn_inx, optn_name){
                      swtch_option +='<li>'+ optn_name.name +' : '+ optn_name.value +'</li>';
                    })
                  }
                  swtch_option +='</ul>';
                  var title = item.title.split('-');
                  $('.cart-popup-item__title').html( title[0] );
                  $('.swatches_show').html( swtch_option );
                  $('#append_cart_img').html('<img src="' + item.image + '" alt="product">');
                  $('.set_quantity').html(item.quantity);
                  $('.cart-popup-wrapper').removeClass('cart-popup-wrapper--hidden');
                }
              });
            }
          }
        });
        
        $('#data-loader').addClass('hide');
        $('.set_loader').removeClass("show");
        $('.set_loader').addClass("hide");
        Shopify.onCartUpdate(cart);
        jQuery('.sidebar-mini-cart-active').addClass('inside');
      });
    },
    error: function(XMLHttpRequest, textStatus) {
      if(form_id != "add-item-qv") {
        Shopify.onError(XMLHttpRequest, textStatus);
      } else {
        jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button_error").html());
        jQuery('#' + form_id).find(".addtocartqv").addClass("error_in_cart");
        setTimeout(function(){
          jQuery('#' + form_id).find(".addtocartqv").removeClass("error_in_cart");
          jQuery('#' + form_id).find(".addtocartqv").html(jQuery(".quickViewModal_info .button").html());
        }, 2000);
      }
      Shopify.onItemAdded(line_item);
    }  
  };
  console.log("params =>"+ params );
  jQuery.ajax(params);
};

/* user functions */

Shopify.addItemFromFormStart = function(form, product_id) {
  Shopify.addItemFromForm(form, product_id);
}

  Shopify.cartPopap = function(variant_id) {
    var image = jQuery('.'+variant_id+':first .popup_cart_image').attr("src");
    var title = jQuery('.'+variant_id+':first .popup_cart_title').text();
    jQuery('.popupimage').attr("src",''+image+'');
    jQuery('.productmsg').text('"'+title+'"');
    jQuery('#modalAddToCart').modal("toggle");
  }

  Shopify.cartPopapForm = function(variant_id) {
    var image = jQuery('.product_variant_image').attr("src");
    var title = jQuery('#popup_cart_title').text();
    jQuery('.popupimage').attr("src",''+image+'');
    jQuery('.productmsg').text('"'+title+'"');
    jQuery('#modalAddToCart').modal("toggle");
  }

  Shopify.cartUpdateInfo = function(cart, cart_cell_id) {
    console.log("berry cartUpdateInfo");
    var formatMoney = "<span class='money'>Rs. {{amount}}</span>";
    if ((typeof cart_cell_id) === 'string') {
      var cart_cell = jQuery(cart_cell_id);
      if (cart_cell.length) {
        cart_cell.empty();
        jQuery.each(cart, function(key, value) {
          $('.count').html(cart.item_count);
          if (key === 'items') {
            if (value.length) {
              jQuery(".cart-content").css({"display": "block"});
              jQuery(".cart-empty-title").css({"display": "none"});
              
              var table = jQuery(cart_cell_id);
              var cart_option_name = '';
              
              jQuery.each(value, function(i, item) {
                if(i > 19){
                  return false;
                }
                
                var item_title = item.title.split("-");
                
                if( item_title.length > 0 ){
                  var pro_title = item_title[0];
                }else{
                  var pro_title = item.title;
                }
                
                cart_option_name += '<li class="single-product-cart">';
                cart_option_name += '<div class="cart-content"><div class="cart-img">';
                cart_option_name += 	'<a href="' + item.url + '"><img src="' + item.image + '" alt="product"></a>';
                cart_option_name += '</div>';
                cart_option_name += '<div class="cart-title">';
                cart_option_name += '<h4><a href="' + item.url + '">' + pro_title + '</a></h4>';
                cart_option_name += '<ul>';
                
                if( item.options_with_values.length > 0 ){
                  jQuery.each( item.options_with_values, function( option_name, option_values ){
                    cart_option_name +='<li>'+ option_values.name +' : '+ option_values.value +'</li>';
                  });
                }
                
                cart_option_name += '</ul>';
                cart_option_name += '<span>' + item.quantity + ' × ' + Shopify.formatMoney(item.price, formatMoney) + '</span>';
                cart_option_name += '</div></div>';
                cart_option_name += '<div class="cart-delete">';
                cart_option_name += '<a href="javascript:void(0);" class="remove-btn close-icon" onclick="Shopify.removeItem(' + item.variant_id + ')"><i class="fa fa-trash-o" aria-hidden="true"></i></a>';
                cart_option_name +=   '</div> </li>';
                
                jQuery( table ).html( cart_option_name  );              
              //jQuery('<li class="single-product-cart"><div class="cart-img"><a href="' + item.url + '"><img src="' + item.image + '" alt="product"></a></div><div class="cart-title"><h4><a href="' + item.url + '">' + pro_title + '</a></h4><span>' + item.quantity + ' × ' + Shopify.formatMoney(item.price, formatMoney) + '</span></div><div class="cart-delete"><a href="javascript:void(0);" class="remove-btn close-icon" onclick="Shopify.removeItem(' + item.variant_id + ')"><i class="fa fa-trash-o" aria-hidden="true"></i></a></div></li>').appendTo(table);
              });
            }else {
              jQuery(".cart-content").css({"display": "none"});
              jQuery(".cart-empty-title").css({"display": "block"});
            }
          }
        });
      }
    }
    
    changeHtmlValue(".shopping-cart__total", Shopify.formatMoney(cart.total_price, formatMoney));
    changeHtmlValue(".bigcounter", cart.item_count);
    
    jQuery('.currency .active').trigger('click');
  }
//Utils
function changeHtmlValue (cell, value) {
  var $cartLinkText = jQuery(cell);
  $cartLinkText.html(value);
};