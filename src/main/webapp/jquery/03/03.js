/*3.1 버튼 기능넣기*/
/*$(document).ready(function() {
	$('#switcher-default')
	.addClass('selected')
	.bind('click',function(){
		$('body').removeClass('large');
		$('body').removeClass('narrow');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-large')
	.bind('click',function(){
		$('body').addClass('large');
		$(this).addClass('selected');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-narrow').bind('click',function(){
		$('body').addClass('narrow');
		$('body').removeClass('large');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

/*3.4*/
/*$(document).ready(function() {
	$('#switcher-default')
	.addClass('selected')
	.bind('click',function(){
		$('body').removeClass('large');
		$('body').removeClass('narrow');
	});
	
	$('#switcher-large')
	.bind('click',function(){
		$('body').addClass('large');
		$(this).addClass('selected');
	});
	
	$('#switcher-narrow').bind('click',function(){
		$('body').addClass('narrow');
		$('body').removeClass('large');
	});
	
	$('#switcher button').bind('click',function(){
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

/*3.5*/
/*$(document).ready(function() {
	$('#switcher-default')
	.addClass('selected')
	.bind('click',function(){
		$('body').removeClass();
	});
	
	$('#switcher-large')
	.bind('click',function(){
		$('body').removeClass('narrow').addClass('large');
	});
	
	$('#switcher-narrow').bind('click',function(){
		$('body').removeClass('large').addClass('narrow');
	});
	
	//공통요소로 묶기
	$('#switcher button').bind('click',function(){
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

/*3.6*/
/*$(document).ready(function() {
	$('#switcher button').bind('click',function(){
		$('body').removeClass();
		$(this).addClass('selected');
	});
	
	$('#switcher-default')
	.addClass('selected');
	
	$('#switcher-large')
	.bind('click',function(){
		$('body').addClass('large');
	});
	
	$('#switcher-narrow').bind('click',function(){
		$('body').addClass('narrow');
	});
	
});*/

/*3.7*/
/*$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(){
		var bodyClass = this.id.split('_')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});
*/

/*3.9 toggle사용1:두 가지 이상의 작업을 번갈아 수행할때 사용*/
/*$(document).ready(function() {
	$('#switcher h3').toggle(function(){
		$('#switcher button').addClass('hidden');
	},function(){
		$('#switcher button').removeClass('hidden');
	  });
});

$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(){
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/


/*3.10 - 3.9와 같은 결과*/
/*$(document).ready(function() {
	$('#switcher h3').click(function(){
		$('#switcher button').toggleClass('hidden');
	});
});

$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(){
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

/*3.11*/
/*$(document).ready(function() {
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
});

$(document).ready(function() {
	$('#switcher h3').click(function(){
		$('#switcher button').toggleClass('hidden');
	});
});

$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(){
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/

/*3.12*/
/*$(document).ready(function() {
	$('#switcher').click(function(event){
		if(event.target == this){
			$('#switcher button').toggleClass('hidden');
		}
	});
});

$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(){
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});*/


/*3.14*/
/*$(document).ready(function() {
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
});

$(document).ready(function() {
	$('#switcher').click(function(event){ 6
		$('#switcher button').toggleClass('hidden');
	});
});

$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').bind('click',function(event){
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		//event.stopPropagation();
	});
	
});
*/
/*3.15*/
$(document).ready(function() {
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
});

$(document).ready(function() {
	$('#switcher').click(function(event){
		$('#switcher button').toggleClass('hidden');
	});
});


/*$(document).ready(function() {
	  $('#switcher-default').addClass('selected');

	  $('#switcher').click(function(event) {
	    if ($(event.target).is('button')) {
	      var bodyClass = event.target.id.split('-')[1];

	      $('body').removeClass().addClass(bodyClass);

	      $('#switcher button').removeClass('selected');
	      $(event.target).addClass('selected');
	      event.stopPropagation();
	    }
	  });
	});*/


$(document).ready(function() {
	$('#switcher-default').addClass('selected');
	
	$('#switcher button').click(function(event){
		if($(event.target)){
			
		}
		var bodyClass = event.target.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		//event.stopPropagation();
	});
	
});




