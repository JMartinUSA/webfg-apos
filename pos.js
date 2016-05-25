var totalAmountPOS,
	ammountOfPeople;
function calcChange(){
	var friPrice = 10,
		satPrice = 15,
		sunPrice = 5,
		friNightPrice = 15,
		satNightPrice = 15,
		perPerson = 0;
		ammountOfPeople = Number(document.getElementById('addAmountNumber').innerHTML);

		if( document.getElementById('addFriBut').title == 'true'){
			perPerson+=friPrice;
		}
		if( document.getElementById('addSatBut').title == 'true'){
			perPerson+=satPrice;
		}
		if( document.getElementById('addSunBut').title == 'true'){
			perPerson+=sunPrice;
		}
		// if( document.getElementById('addFriNightBut').title == 'true'){
		// 	perPerson+=friNightPrice;
		// }
		// if( document.getElementById('addSatNightBut').title == 'true'){
		// 	perPerson+=satNightPrice;
		// }
		totalAmountPOS = perPerson*ammountOfPeople;
		if( document.getElementById('addFriNightBut').title == 'true'){
			totalAmountPOS+=friNightPrice;
		}
		if( document.getElementById('addSatNightBut').title == 'true'){
			totalAmountPOS+=satNightPrice;
		}
		document.getElementById('totalDue').innerHTML = 'Total = $'+totalAmountPOS;
}

function POSSubmit(){
	var errorMessage = [];
	var d = new Date(),
		DATE = (d.getMonth())+1+'-'+(d.getDate())+'-'+(d.getFullYear()),
		TIME,
		HOURS = (d.getHours()),
		MINUTES = (d.getMinutes()),
		SECONDS = (d.getSeconds()),
		NAME = user.username,
		AMOUNT = ammountOfPeople,
		FRIDAY = 0,
		SATURDAY = 0,
		SUNDAY = 0,
		FRINIGHT = 0,
		SATNIGHT = 0,
		NOTE = '',
		TOTAL = totalAmountPOS;
		console.log(TOTAL);
		if(MINUTES < 10){
			MINUTES = '0'+MINUTES;
		}
		if(SECONDS < 10){
			SECONDS = '0'+SECONDS;
		}
		TIME = HOURS+':'+MINUTES+':'+SECONDS;

		if(document.getElementById('addNoteButtonWrapper').innerHTML == '<input type="button" id="addNoteButton" value="Save Note" onclick="saveNote();">'){
			saveNote();
		}
		NOTE = document.getElementById('addNoteText').innerHTML;

		if( document.getElementById('addFriBut').title == 'true'){
			FRIDAY = AMOUNT;
		}
		if( document.getElementById('addSatBut').title == 'true'){
			SATURDAY = AMOUNT;
		}
		if( document.getElementById('addSunBut').title == 'true'){
			SUNDAY = AMOUNT;
		}
		if( document.getElementById('addFriNightBut').title == 'true'){
			FRINIGHT = 1;
		}
		if( document.getElementById('addSatNightBut').title == 'true'){
			SATNIGHT = 1;
		}
		console.log('fri'+FRIDAY);
		if( (FRIDAY+SATURDAY+SUNDAY) > 0){
			insertPOS();
		}else{
			alert('You must select at least one day.');
		}
		if(document.getElementById('addNoteButtonWrapper').innerHTML == '<input type="button" id="addNoteButton" value="Save Note" onclick="saveNote();">'){
			saveNote();
		}
		NOTE = document.getElementById('addNoteText').innerHTML;
		

		function insertPOS(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var updateReturn = xhttp.responseText;
			}
		};
		//console.log("http://jaymartmedia.com/webfg/insert.php?ID="+added.ID+"&FNAME="+added.FNAME+"&LNAME="+added.LNAME+"&CAT="+added.CAT+"&DAYS="+added.DAYS+"&NIGHTS="+added.NIGHTS+"&ADMITTED="+added.ADMITTED+"&TOTAL="+added.TOTAL+"&RV="+added.RV+"&NOTE="+ovValues.NOTE);
		xhttp.open("POST", "http://jaymartmedia.com/webfg/pos.php?DATE="+DATE+"&HOURS="+HOURS+"&MINUTES="+MINUTES+"&SECONDS="+SECONDS+"&NAME="+NAME+"&AMOUNT="+AMOUNT+"&FRIDAY="+FRIDAY+"&SATURDAY="+SATURDAY+"&SUNDAY="+SUNDAY+"&FRINIGHT="+FRINIGHT+"&SATNIGHT="+SATNIGHT+"&NOTE="+NOTE+"&TOTAL="+TOTAL, true);
		xhttp.send();
		POS();
	}




}

function POSCancel(){
	List();
}