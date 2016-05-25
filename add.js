function amountMinus(){
	if( document.getElementById('addAmountNumber').innerHTML > 1){
		document.getElementById('addAmountNumber').innerHTML = (Number(document.getElementById('addAmountNumber').innerHTML))-1;
	}
}
function amountPlus(){
	document.getElementById('addAmountNumber').innerHTML = (Number(document.getElementById('addAmountNumber').innerHTML))+1;
}
function editNote(){
	document.getElementById('addNoteText').innerHTML = '<textarea id="textAreaValue">'+document.getElementById('addNoteText').innerHTML+'</textarea>';
	document.getElementById('addNoteButtonWrapper').innerHTML = '<input type="button" id="addNoteButton" value="Save Note" onclick="saveNote();">';
}
function saveNote(){
	document.getElementById('addNoteText').innerHTML = document.getElementById('textAreaValue').value;
	document.getElementById('addNoteButtonWrapper').innerHTML = '<input type="button" id="addNoteButton" value="Edit Note" onclick="editNote();">';
}
function toggleThis(element){
	if(element.title == "false"){
		element.style.background = 'green';
		element.title = "true";
	}else if(element.title == "true"){
		element.style.background = 'black';
		element.title = "false";
	}
}

function addCancel(){
	List();
}
function addSubmit(){
	var errorMessage = [];

	//getting days
	var addDays = '';
	if(document.getElementById('addFriBut').title == "true"){
		if(document.getElementById('addSatBut').title == "true"){
			if(document.getElementById('addSunBut').title == "true"){
				addDays = 'Fri-Sun';
			}else{
				addDays = 'Fri-Sat';
			}
		}else if(document.getElementById('addSunBut').title == "true"){
			addDays = 'Fri,Sun';
		}else{
			addDays = 'Fri';
		}
	}else if(document.getElementById('addSatBut').title == "true"){
		if(document.getElementById('addSunBut').title == "true"){
			addDays = 'Sat-Sun';
		}else{
			addDays = 'Sat';
		}
	}else if(document.getElementById('addSunBut').title == "true"){
		addDays = 'Sun';
	}

	//getting nights
	var addNights = '';
	if(document.getElementById('addFriNightBut').title == "true"){
		if(document.getElementById('addSatNightBut').title == "true"){
			addNights = 'Fri-Sat';
		}else{
			addNights = 'Fri';
		}
	}else if(document.getElementById('addSatNightBut').title == "true"){
		addNights = 'Sat';
	}else{
		addNights = 'None';
	}

	//getting RV
	var addRV = 0;
	if(document.getElementById('addRV').checked == true){
		addRV = 1;
	}

	//getting NOTE
	if(document.getElementById('addNoteButtonWrapper').innerHTML == '<input type="button" id="addNoteButton" value="Save Note" onclick="saveNote();">'){
		saveNote();
	}

	console.log(addDays);
	console.log(addNights);
	console.log(addRV);

	var added = {
		FNAME:fixCrazyQuote(document.getElementById('addFNameText').value),
		LNAME:fixCrazyQuote(document.getElementById('addLNameText').value),
		CAT:fixCrazyQuote(document.getElementById('addCatText').value),
		DAYS:addDays,
		NIGHTS:addNights,
		TOTALADMITTED:0,
		TOTALREGISTERED:document.getElementById("addAmountNumber").innerHTML,
		RV:addRV,
		NOTE:fixCrazyQuote(document.getElementById('addNoteText').innerHTML)
	}

	if((added.LNAME == '')||(added.CAT == '')){
		errorMessage.push('You must fill out all text fields, not including firstname.')
	}
	if(added.DAYS == ''){
		errorMessage.push('You must select at least one day.');
	}
	if(Number(added.TOTALREGISTERED) < 1){
		errorMessage.push('You must select a valid amount of people registered')
	}

	console.log(added.FNAME);
	console.log(added.TOTALREGISTERED);
	console.log(added.NOTE);
	if(errorMessage.length != 0){
		for(i=0;i<errorMessage.length;i++){
			alert(errorMessage[i]);
		}
		
	}
	if(errorMessage.length == 0){
		insertPHP();
	}

	function insertPHP(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var updateReturn = xhttp.responseText;
			}
		};
		//console.log("http://jaymartmedia.com/webfg/insert.php?ID="+added.ID+"&FNAME="+added.FNAME+"&LNAME="+added.LNAME+"&CAT="+added.CAT+"&DAYS="+added.DAYS+"&NIGHTS="+added.NIGHTS+"&ADMITTED="+added.ADMITTED+"&TOTAL="+added.TOTAL+"&RV="+added.RV+"&NOTE="+ovValues.NOTE);
		xhttp.open("POST", "http://jaymartmedia.com/webfg/insert.php?FNAME="+added.FNAME+"&LNAME="+added.LNAME+"&CAT="+added.CAT+"&DAYS="+added.DAYS+"&NIGHTS="+added.NIGHTS+"&TOTALADMITTED="+added.TOTALADMITTED+"&TOTALREGISTERED="+added.TOTALREGISTERED+"&RV="+added.RV+"&NOTE="+added.NOTE, true);
		xhttp.send();
		addRegister();
	}
}



