function listUser(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var fromPHP = JSON.parse(xhttp.responseText);
			listPHP(fromPHP);
		}
	}
	xhttp.open("GET", "http://jaymartmedia.com/webfg/accounts.php?TYPE=LIST", true);
	xhttp.send();

	function listPHP(fromPHP){
		document.getElementById('userList').innerHTML = '';
		var obj = fromPHP;
		for(i=0;i<obj.length;i++){
			document.getElementById('userList').innerHTML += '\
			<div class="listUserWrapper">\
				<div class="listUsername">Username: '+obj[i].USERNAME+'</div><div class="listPassword">Password: '+obj[i].PASSWORD+'</div>\
			</div>';
		}
	}
}
function addUser(){
	var addUsername = document.getElementById('userUsername').value;
	var addPassword = document.getElementById('userPassword').value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			listUser();
		}
	};
	xhttp.open("GET", "http://jaymartmedia.com/webfg/accounts.php?TYPE=INSERT&USERNAME="+addUsername+"&PASSWORD="+addPassword, true);
	xhttp.send();
}
function changeUser(){
	var addUsername = document.getElementById('userUsername').value;
	var addPassword = document.getElementById('userPassword').value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			listUser();
			console.log(addUsername+addPassword);
		}
	};
	xhttp.open("GET", "http://jaymartmedia.com/webfg/accounts.php?TYPE=CHANGE&USERNAME="+addUsername+"&PASSWORD="+addPassword, true);
	xhttp.send();
}