
/*1.1*/
/*function addHighlihtClass(){
	$('div.poem-stanza').addClass('highlight');
}
$(document).ready(addHighlihtClass);
*/
/*1.2*/
/*$(document).ready(function(){
	$('div.poem-stanza').addClass('highlight');
});*/
/*1.3*/
/*window.onload = function() {
	var divs = document.getElementsByTagName('div');
	for(var i=0;i<divs.length;i++){
		if(hasClass(divs[i],'poem-stanza') && !hasClass(divs[i],'highlight')){
			divs[i].className +=' highlight';
		}
	}
	
	function hasClass(elem, cls){
		var reClass = new RegExp(' '+ cls + ' ');
		return reClass.test(' '+ elem.className + ' ');
	}
};*/
/*1.4 파이어폭스 파이어 버그 콘솔에 출력*/
$(document).ready(function() {
	console.log('aaa');
	console.log($('div.poem-stanza'));
});
