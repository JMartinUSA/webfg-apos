function overlayUpdatePHP(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var updateReturn = xhttp.responseText;
		}
	};
	console.log("http://jaymartmedia.com/webfg/update.php?ID="+ovValues.ID+"&FNAME="+ovValues.FNAME+"&LNAME="+ovValues.LNAME+"&CAT="+ovValues.CAT+"&DAYS="+ovValues.DAYS+"&NIGHTS="+ovValues.NIGHTS+"&ADMITTED="+ovValues.ADMITTED+"&TOTAL="+ovValues.TOTAL+"&RV="+ovValues.RV+"&NOTE="+ovValues.NOTE);
	xhttp.open("POST", "http://jaymartmedia.com/webfg/update.php?ID="+ovValues.ID+"&FNAME="+ovValues.FNAME+"&LNAME="+ovValues.LNAME+"&CAT="+ovValues.CAT+"&DAYS="+ovValues.DAYS+"&NIGHTS="+ovValues.NIGHTS+"&ADMITTED="+ovValues.ADMITTED+"&TOTAL="+ovValues.TOTAL+"&RV="+ovValues.RV+"&NOTE="+ovValues.NOTE, true);
	xhttp.send();
}