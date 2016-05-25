function onStartUp(){
	sizeWelcome();
	Login();

	setTimeout(animationEnd, 8200);
	function animationEnd(){
		document.getElementById('overlayCont').innerHTML = '';
	}
}
function Login(){
	document.getElementById('container').innerHTML = '<div id="loginPanel">\
				<div id="inputArea">\
					Welcome to WebFG<br>\
					Username:<input type="text" id="username" />\
					Password:<input type="password" id="password" />\
					<input type="button" id="submit" value="login" onclick="submit();" />\
				</div>\
			</div>';
			sizeLogin();
}
function List(){
	document.getElementById('container').innerHTML = '\
			<div id="header"><div id="headerWrapper"><input type="text" id="searchText"></input><input type="button" value="Search" onclick="searchList()"><input type="button" value="Clear" onclick="pullList();clearSearch();"></div></div>\
			<div id="scroll"\
			</div>';
			pullList();
			sizeList();
}
function Overlay(ID,FNAME,LNAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,RV,NOTE,NIGHTRV){
	assignValues(ID,FNAME,LNAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,RV,NOTE);
	document.getElementById('overlayCont').innerHTML = '<link rel="stylesheet" href="overlay.css">\
			<div id="overlay">\
				<div id="top">\
					<div id="left">\
						<div class="overlayText">Name:&nbsp</div>\
						<div class="overlayText">Category:&nbsp</div>\
						<div class="overlayText">Days:&nbsp</div>\
						<div class="overlayText">Nights:&nbsp</div>\
					</div>\
					<div id="center">\
						<div class="overlayText" id="ovName"><div id="ovNameF">'+FNAME+'</div><div id="ovNameL">'+LNAME+'</div></div>\
						<div class="overlayText" id="ovCat">'+CAT+'</div>\
						<div class="overlayText" id="ovDays">'+DAYS+'</div>\
						<div class="overlayText" id="ovNights">'+NIGHTRV+'</div>\
					</div>\
					<div id="right">\
						<div class="overlayText" id="ovNameEdit"><input type="button" id="ovNameEditButton" value="EDIT" onclick="edit(\'ovName\');"></div>\
						<div class="overlayText" id="ovCatEdit"><input type="button" id="ovCatEditButton" value="EDIT" onclick="edit(\'ovCat\');"></div>\
						<div class="overlayText" id="ovDaysEdit"><input type="button" id="ovDaysEditButton" value="EDIT" onclick="edit(\'ovDays\');"></div>\
						<div class="overlayText" id="ovNightsEdit"><input type="button" id="ovNightsEditButton" value="EDIT" onclick="edit(\'ovNights\');"></div>\
					</div>\
				</div>\
				<div id="bottom">\
					<div id="left">\
						Admitted:<br>\
						<br>\
						Total:\
					</div>\
					<div id="right">\
						<div id="admitted">\
							<div class="minus" onclick="admittedMinus();">-</div>\
							<div class="number" id="numAdmitted">'+ADMITTED+'</div>\
							<div class="plus" onclick="admittedPlus();">+</div>\
						</div>\
						<br>\
						<br>\
						<div id="total">\
							<div class="minus" onclick="totalMinus();">-</div>\
							<div class="number" id="numTotal">'+TOTAL+'</div>\
							<div class="plus" onclick="totalPlus();">+</div>\
						</div>\
					</div>\
					<div id="buttons">\
						<div id="ovNote">'+NOTE+'</div>\
						<div id="ovNoteEdit"><input type="button" id="ovNoteEditButton" value="Edit Note" onclick="edit(\'ovNote\');"></div>\
						<div id="cancel" onclick="goBack();">Cancel</div>\
						<div id="submit" onclick="submitChanges();">Submit</div>\
					</div>\
				</div>\
			</div>'
	sizeOverlay();
}
function addRegister(){
	document.getElementById('container').innerHTML = '<link rel="stylesheet" href="addRegister.css" />\
		<div id="addRegister">\
			<div id="addNameWrapper">\
				<div id="addFNameSpacer">Firstname</div>\
				<div id="addLNameSpacer">Lastname</div>\
				<div id="addName">\
					<input type="text" id="addFNameText" />\
					<input type="text" id="addLNameText" />\
				</div>\
			</div>\
			<div id="addCatWrapper">\
				<div id="addCatSpacer">Category:&nbsp</div><div id="addCat"><input type="text" id="addCatText"></div>\
			</div>\
			<div id="addDaysSpacer">Days</div>\
			<div id="addDays">\
				<div id="addFri"><div id="addFriBut" class="floatButton" onclick="toggleThis(this);" title="false">Fri</div></div>\
				<div id="addSat"><div id="addSatBut" class="floatButton" onclick="toggleThis(this);" title="false">Sat</div></div>\
				<div id="addSun"><div id="addSunBut" class="floatButton" onclick="toggleThis(this);" title="false">Sun</div></div>\
			</div>\
			<div id="addNightsSpacer">Nights</div><div id="addRVSpacer">RV</div>\
			<div id="addNights">\
				<div id="addFriNight"><div id="addFriNightBut" class="floatButton" onclick="toggleThis(this);" title="false">Fri</div></div>\
				<div id="addSatNight"><div id="addSatNightBut" class="floatButton" onclick="toggleThis(this);" title="false">Sat</div></div>\
				<div id="addRVWrapper"><div class="floatButton"><input type="checkbox" id="addRV"></div></div>\
			</div>\
			<div id="addAmount">\
				<div id="addAmountMinus" onclick="amountMinus();">-</div>\
				<div id="addAmountNumber">1</div>\
				<div id="addAmountPlus" onclick="amountPlus();">+</div>\
			</div>\
			<div id="addNote">\
				<div id="addNoteText"></div>\
			</div>\
			<div id="addNoteButtonWrapper">\
				<input type="button" id="addNoteButton" value="Edit Note" onclick="editNote();">\
			</div>\
			<div id="addButtonWrapper">\
				<div id="addCancel" onclick="addCancel();">Cancel</div>\
				<div id="addSubmit" onclick="addSubmit();">Submit</div>\
			</div>\
		</div>';
		sizeRegister();
}
function POS(){
	document.getElementById('container').innerHTML = '<link rel="stylesheet" href="POS.css" />\
		<div id="POS">\
			<div id="daysSpacer">Days</div>\
			<div id="days">\
				<div id="addFri"><div id="addFriBut" class="floatButton" onclick="toggleThis(this);calcChange();" title="false">Fri</div></div>\
				<div id="addSat"><div id="addSatBut" class="floatButton" onclick="toggleThis(this);calcChange();" title="false">Sat</div></div>\
				<div id="addSun"><div id="addSunBut" class="floatButton" onclick="toggleThis(this);calcChange();" title="false">Sun</div></div>\
			</div>\
			<div id="nightsSpacer">Nights</div>\
			<div id="nights">\
				<div id="addFriNight"><div id="addFriNightBut" class="floatButton" onclick="toggleThis(this);calcChange();" title="false">Fri</div></div>\
				<div id="addSatNight"><div id="addSatNightBut" class="floatButton" onclick="toggleThis(this);calcChange();" title="false">Sat</div></div>\
			</div>\
			<div id="amountSpacer">Amount of people</div>\
			<div id="addAmount">\
				<div id="addAmountMinus" onclick="amountMinus();calcChange();">-</div>\
				<div id="addAmountNumber">1</div>\
				<div id="addAmountPlus" onclick="amountPlus();calcChange();">+</div>\
			</div>\
			<div id="addNote">\
				<div id="addNoteText"></div>\
			</div>\
			<div id="addNoteButtonWrapper">\
				<input type="button" id="addNoteButton" value="Edit Note" onclick="editNote();">\
			</div>\
			<div id="totalDue">Total = $0</div>\
			<div id="addButtonWrapper">\
				<div id="addCancel" onclick="POSCancel();">Cancel</div>\
				<div id="addSubmit" onclick="POSSubmit();">Submit</div>\
			</div>\
		</div>';
		sizePOS();
}