function Menu(){
	if(document.getElementById('messagesCont').innerHTML == ''){
		document.getElementById('menuCont').innerHTML = '<link rel="stylesheet" href="menu.css" />\
			<div id="transparentCover"></div>\
			<div id="menu">\
				<div id="menuTop" onclick="menuList()">List</div>\
				<div id="menuTopMid" onclick="menuPos()">POS</div>\
				<div id="menuMiddle" onclick="menuAdmin()">Admin</div>\
				<div id="menuBottom" onclick="menuLogout()">Logout</div>\
			</div>';
			sizeMenu();
	}
}
function Admin(){
		document.getElementById('menuCont').innerHTML = '<link rel="stylesheet" href="menu.css" />\
		<div id="transparentCover"></div>\
		<div id="menu">\
			<div id="menuTop" onclick="Menu()">Main Menu</div>\
			<div id="menuTopMid" onclick="menuSell()">Sell</div>\
			<div id="menuMiddle" onclick="menuAccounts()">Accounts</div>\
			<div id="menuBottom" onclick="menuAnalytics()">Analytics</div>\
		</div>';
		sizeMenu();
}
function menuList(){
	console.log('list');
	if(loggedIn){
		List();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuPos(){
	console.log('pos');
	if(loggedIn){
		POS();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuAdmin(){
	if(loggedIn){
		if(user.admin == 0){
			alert('You must be an admin to use this.');
		}else if(user.admin == 1){
			document.getElementById('overlayCont').innerHTML = '';
			document.getElementById('menuCont').innerHTML = '';
			Admin();
		}
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuAccounts(){
	Accounts();
	document.getElementById('overlayCont').innerHTML = '';
	document.getElementById('menuCont').innerHTML = '';
}
function menuAnalytics(){
	Analytics();
	document.getElementById('overlayCont').innerHTML = '';
	document.getElementById('menuCont').innerHTML = '';
}
function menuSell(){
	console.log('sell');
	if(loggedIn){
		addRegister();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuLogout(){
	console.log('logout');
	Login();
	loggedIn = false;
	document.getElementById('overlayCont').innerHTML = '';
	document.getElementById('menuCont').innerHTML = '';
	
}
function Messages(){
	if(document.getElementById('menuCont').innerHTML == ''){
		if(loggedIn){
			document.getElementById('messagesCont').innerHTML = '<link rel="stylesheet" href="messages.css" />\
			<div id="messageLog"></div>\
			<div id="messageWrite">\
				<div id="messageTextWrapper">\
					<textarea id="messageText"></textarea>\
				</div>\
				<div id="messageSend">Send</div>\
			</div>'
			console.log('messages');
			pullMessages();
		}else{
			alert("You must be logged in to access messages.");
		}
	}
}