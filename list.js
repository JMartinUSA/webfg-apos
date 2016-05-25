function fixQuote(element){
	return element.replace(/\'/g, '&#39').replace(/\"/g, '&#34');
}
function fixCrazyQuote(element){
	return element.replace(/\'/g, '%27').replace(/\"/g, '%22');
}
function fixRealCrazyQuote(element){
	return element.replace(/\'/g, '\\\'').replace(/\"/g, '&#34');
}
// function unfixRealCrazyQuote(element){
// 	return element.replace(/&#34/g, '\'' );
// }
function addToList(){

}

function pullList(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if( xhttp.readyState == 4 && xhttp.status == 200 ){
			var fromPHP = JSON.parse(xhttp.responseText);
			toPHP(fromPHP);
		}
	};
	xhttp.open("POST", "http://jaymartmedia.com/webfg/list.php", true);
	xhttp.send();
}

function searchList(){
	var search = document.getElementById('searchText').value;
	console.log(search);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var fromPHP = JSON.parse(xhttp.responseText);
			toPHP(fromPHP);
		}
	};
	xhttp.open("POST", "http://jaymartmedia.com/webfg/search.php?SEARCH="+search, true);
	xhttp.send();
}
function clearSearch(){
	document.getElementById('searchText').value = '';
}

function toPHP(fromPHP){
	var obj = fromPHP;

	document.getElementById('scroll').innerHTML = '';

	for(i=0;i<obj.length;i++){
		var DAYS;
		if(obj[i].FNAME == null){
			obj[i].FNAME = '';
		}
		if(obj[i].NOTE == null){
			obj[i].NOTE = '';
		}
		var NAME = obj[i].FNAME+' '+obj[i].LNAME;
		if(obj[i].RV == 1){
			NIGHTS = 'RV';
		}else{
			NIGHTS = obj[i].NIGHTS;
		}

		document.getElementById('scroll').innerHTML += '\
		<div class="item" onclick="Overlay(\''+obj[i].IDpre+'\',\''+fixRealCrazyQuote(obj[i].FNAME)+'\',\''+fixRealCrazyQuote(obj[i].LNAME)+'\',\''+fixRealCrazyQuote(obj[i].CAT)+'\',\''+fixRealCrazyQuote(obj[i].DAYS)+'\',\''+fixRealCrazyQuote(obj[i].NIGHTS)+'\',\''+fixRealCrazyQuote(obj[i].TOTALADMITTED)+'\',\''+fixRealCrazyQuote(obj[i].TOTALREGISTERED)+'\',\''+fixRealCrazyQuote(obj[i].RV)+'\',\''+fixRealCrazyQuote(obj[i].NOTE)+'\',\''+fixRealCrazyQuote(NIGHTS)+'\')">\
			<div class="left">\
				<div class="top">\
					<div class="name">'+obj[i].FNAME+' '+obj[i].LNAME+'</div>\
					<div class="days">'+obj[i].DAYS+'</div>\
				</div>\
				<div class="bottom">\
					<div class="cat">'+obj[i].CAT+'</div>\
					<div class="rvCamp">'+NIGHTS+'</div>\
				</div>\
			</div>\
			<div class="right">\
				<div class="left">\
					<div class="top">'+obj[i].TOTALADMITTED+'</div>\
					<div class="bottom">'+obj[i].TOTALREGISTERED+'</div>\
				</div>\
				<div class="right">\
					<div id="isNote'+i+'">Note:<br><input type="checkbox"></div>\
				</div>\
			</div>\
		</div>';
		if(obj[i].NOTE != ''){
			document.getElementById('isNote'+i).innerHTML = 'Note:<br><input type="checkbox" checked>';
		}
	}
}