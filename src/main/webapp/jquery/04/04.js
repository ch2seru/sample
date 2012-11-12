/*4.3*/
/*$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher-large').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    num *= 1.4;
    $speech.css('fontSize', num + 'px');
  });
});*/

/*4.4*/
/*$(document).ready(function() {
  var $speech = $('div.speech');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    if(this.id=="switcher-large"){
    	num *= 1.4;
        $speech.css('fontSize', num + 'px');
    }else if(this.id=="switcher-small"){
    	num *= 0.4;
    }
    
    $speech.css('fontSize', num + 'px');
    
  });
});*/

/*4.5*/
/*$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch(this.id){
    case "switcher-large":
    	num *= 1.4;
    	break;
    case "switcher-small":
    	num /= 1.4;
    	break;
    default :
    	num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
    
  });
});*/

/*4.6*/
/*$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch(this.id){
    case "switcher-large":
    	num *= 1.4;
    	break;
    case "switcher-small":
    	num /= 1.4;
    	break;
    default :
    	num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
    
  });
  $('p').eq(1).hide();
});*/


/*4.7*/
$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch(this.id){
    case "switcher-large":
    	num *= 1.4;
    	break;
    case "switcher-small":
    	num /= 1.4;
    	break;
    default :
    	num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
    
  });
  $('p').eq(1).hide();
  $('a.more').click(function(){
	  $('p').eq(1).show();
	  $(this).hide();
	  return false;
	  
  });
});