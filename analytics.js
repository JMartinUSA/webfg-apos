function getAnalytics(){
	console.log('getting analytics');
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if( xhttp.readyState == 4 & xhttp.status == 200){
			var fromPHP = JSON.parse(xhttp.responseText);
			analyticsPHP(fromPHP);
			console.log('got analytics');
		}
	}
	xhttp.open("GET", "http://jaymartmedia.com/webfg/analytics.php", true);
	xhttp.send();


	function analyticsPHP(fromPHP){
		document.getElementById('analyticsList').innerHTML = '';
		console.log(fromPHP);
		console.log('fromPHP');
		var obj = fromPHP;
		for(i=0;i<obj.length;i++){
			console.log('i<obj.length');
			document.getElementById('analyticsList').innerHTML += '\
			<div class="analyticsSpacer"></div>\
			<div class="analyticsItem">\
				<div class="analyticsData">\
					<div class="analyticsDate">'+obj[i].DATE.substring(0,4)+'</div>\
					<div class="analyticsAmount">'+obj[i].AMOUNTT+'</div>\
					<div class="analyticsFriday">'+obj[i].FRIDAYY+'</div>\
					<div class="analyticsSaturday">'+obj[i].SATURDAYY+'</div>\
					<div class="analyticsSunday">'+obj[i].SUNDAYY+'</div>\
					<div class="analyticsFriNight">'+obj[i].FRINIGHTT+'</div>\
					<div class="analyticsSatNight">'+obj[i].SATNIGHTT+'</div>\
					<div class="analyticsTotal">$'+obj[i].TOTALL+'</div>\
				</div>\
			</div>'
		}
	}
}