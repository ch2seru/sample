/*2.1-9*/
/*$(document).ready(function(){
	$('#selected-plays > li').addClass('horizontal');
	$('#selected-plays  li:not(.horizontal)').addClass('sub-level');	//horizontal 클래스가 아닌경우
	//a[속성]
	$('a[href^="mailto:"]').addClass('mailto'); //^ mailto 로 시작하는 링크 
	$('a[href$=".pdf"]').addClass('pdflink');
	$('a[href^="http"][href*="henry"]').addClass('henrylink'); //* henry포함하는 
	
	//$('tr:even').addClass('alt');//even : 홀수 0부터 시작 0(짝수) 1(홀수)
	$('tr:nth-child(odd)').addClass('alt');//nth-child 1부터 시작
	$('td:contains(Henry)').addClass('highlight');//Henry라는 텍스트
	
	$('a').filter(function(){
		// href 속성값이 도메인이름 포함된 경우 && 링크된 도메인 이름이 현재페이지의 도메인 이름과 같지않을경우
		return this.hostname && this.hostname != location.hostname; 
	}).addClass('external');
	
});*/

/*2.10*/
/*$(document).ready(function(){
	$('td:contains(Henry)').addClass('highlight');//Henry라는 텍스트
	$('td:contains(Henry)').next().addClass('highlight');
});*/

/*2.12*/
/*$(document).ready(function(){
	$('td:contains(Henry)').nextAll().andSelf().addClass('highlight'); //prev() prevAll()
});*/

/*2.13*/
/*$(document).ready(function(){
	$('td:contains(Henry)').parent().children().addClass('highlight'); //prev() prevAll()
});
*/

/*2.15*/
/*$(document).ready(function(){
	$('td:contains(Henry)').parent()
	.find('td:eq(0)').addClass('highlight').end()
	.find('td:eq(2)').addClass('highlight');
});*/

/*실전1*/
/*$(document).ready(function(){
	$('#container >ul>li>ul').children().addClass('special');
});*/

/*$(document).ready(function(){
	  $('div ul:first-child').find('ul').find('li').addClass('special');
});*/

/*실전2*/
/*$(document).ready(function(){
	$('tr:eq(3)').addClass('year');
	//$('tr:eq(3)').children().addClass('year');
});
*/

/*실전3*/
/*$(document).ready(function(){
	$('td:contains(Tragedy)').parent().find('tr:nth-child(1)').addClass('special');
});*/

/*실전4*/
/*$(document).ready(function(){
	$('#container >ul>li>ul').children().addClass('special');
});

$(document).ready(function(){
	  $('div ul:first-child').has('li').has('ul').find('li').addClass('test');
});*/

/*실전5*/
$(document).ready(function(){
	$('a[href$=".pdf"]').parent().find('ul').addClass('tragedy');
});