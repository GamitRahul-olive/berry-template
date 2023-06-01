$(document).on('click','.hotspot .icon', function() {    
  if( $( this ).parent().hasClass('open') ){    
    $( this ).parent().removeClass('open');
  }else{ 
  	$('.hotspot.open .icon').parent().removeClass('open');
    $(this).parent().addClass('open');        
  }      
});

$(document).on('click', '.lookbook_hotspot .icon', function(){
  if( $( this ).parent().hasClass('open') ){    
    $( this ).parent().removeClass('open');
  }else{ 
  	$('.lookbook_hotspot.open .icon').parent().removeClass('open');
    $(this).parent().addClass('open');        
  }   
})