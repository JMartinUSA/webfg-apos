// document.getElementById('submit').addEventListener("click", submit);
var loggedIn = false;
var user = {
	ID: '',
	username: '',
	admin: ''
}


function submit(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	//console.log('Username: '+username+' Password: '+password);
	checkPassword(username, password);
}

function checkPassword(username, password){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var isAccount = xhttp.responseText;
			if( isAccount = 0 ){
				isLogin(isAccount);
			}else{
				isAccount = JSON.parse(xhttp.responseText);
				isLogin(isAccount);
			}
		}
	};
	xhttp.open("POST", "http://jaymartmedia.com/webfg/login.php?USERNAME="+username+"&PASSWORD="+password, true);
	xhttp.send();
}

function isLogin(isAccount){
	if(isAccount == 0){
		alert('We couldn\'t find any account with this Username and Password. Please try again.');
	}else{
		user.ID = isAccount[0].ID;
		user.username = isAccount[0].USERNAME;
		user.admin = isAccount[0].ADMIN;
		onLogin();
		loggedIn = true;
	}
}

function onLogin(){
	POS();
}
