var vh,
	vw,
	vmin,
	vmax;

	calcWindowSize();
	fullsize();


//styles.css

function sizeLogin(){
	fullsize();
	sizeID('loginPanel',30,70);
	positionID('loginPanel',30,'','',15);
	document.getElementById('inputArea').style.fontSize = 3.5*vh+'px';

	sizeID('username',4,60);
	document.getElementById('username').style.fontSize = 3.5*vh+'px';
	marginID('username','','',1.5);
	sizeID('password',4,60);
	document.getElementById('password').style.fontSize = 3.5*vh+'px';
	marginID('password','','',1.5);
	sizeID('submit',4.5,50);
	document.getElementById('submit').style.fontSize = 3.5*vh+'px';
	marginID('submit','','',1.5);
}

//pos.css

function sizePOS(){
	document.getElementById('POS').style.fontSize = 4*vh+'px';
	marginID('daysSpacer',8,'',1);
	marginID('nightsSpacer',3,'',1);
	for(i=0;i<document.getElementsByClassName('floatButton').length;i++){
		document.getElementsByClassName('floatButton')[i].style.paddingTop = 1.75*vh+'px';
	}
	marginID('amountSpacer',4);
	marginID('addAmount',1);
	sizeID('addAmount',7);
	document.getElementById('addAmount').style.fontSize = 6*vh+'px';
	marginID('addNote',1.5);
	marginID('totalDue',2);
	document.getElementById('totalDue').style.fontSize = 7*vh+'px';
}

//overlay.css

function sizeOverlay(){
	sizeID('overlay',100,100);
	document.getElementById('overlay').style.fontSize = 5*vw+'px';
	marginID('top',10);
	for(i=0;i<document.getElementsByClassName('overlayText').length;i++){
		document.getElementsByClassName('overlayText')[i].style.marginTop = 0.5*vh+'px';
	}
	document.getElementById('admitted').style.fontSize = 7*vw+'px';
	marginID('ovNote',14,'',1.5);
	sizeID('cancel',4);
	document.getElementById('cancel').style.fontSize = 4*vh+'px';
	sizeID('submit',4);
	document.getElementById('submit').style.fontSize = 4*vh+'px';
	sizeID('ovNoteEdit',4);
}	

//welcome.css

function sizeWelcome(){
	sizeID('welcome',100);
	document.getElementById('welcome').style.fontSize = 5*vh+'px';
	positionID('firstLine',27);
	positionID('secondLine',30);
	positionID('thirdLine',33);
	positionID('fourthLine',36);
}

// list.css

function sizeList(){
	sizeID('header',10,100);
	sizeID('headerWrapper',5);
	marginID('headerWrapper',5);
	sizeID('scroll',82,100);
	positionID('scroll',10);
	document.getElementById('scroll').style.paddingBottom = 8*vh+'px';
	document.getElementById('scroll').style.fontSize = 3.7*vw+'px';
}

function sizeMenu(){
	document.getElementById('menu').style.fontSize = 6*vh+'px';
	sizeID('menuTop',7.5,50);
	positionID('menuTop',15);
	marginID('menuTop','','','',25);
	sizeID('menuTopMid',7.5,50);
	positionID('menuTopMid',35);
	marginID('menuTopMid','','','',25);
	sizeID('menuMiddle',7.5,50);
	positionID('menuMiddle',55);
	marginID('menuMiddle','','','',25);
	sizeID('menuBottom',7.5,50);
	positionID('menuBottom',75);
	marginID('menuBottom','','','',25);
}
function sizeMenuAdmin(){
	document.getElementById('menu').style.fontSize = 6*vh+'px';
	sizeID('menuTop',7.5,50);
	positionID('menuTop',15);
	marginID('menuTop','','','',25);
	sizeID('menuTopMid',7.5,50);
	positionID('menuTopMid',35);
	marginID('menuTopMid','','','',25);
	sizeID('menuMiddle',7.5,50);
	positionID('menuMiddle',55);
	marginID('menuMiddle','','','',25);
	sizeID('menuBottom',7.5,50);
	positionID('menuBottom',75);
	marginID('menuBottom','','','',25);
}

function sizeRegister(){
	document.getElementById('addRegister').style.fontSize = 4*vh+'px';
	marginID('addNameWrapper',5);
	marginID('addDaysSpacer',3);
	for(i=0;i<document.getElementsByClassName('floatButton').length;i++){
		document.getElementsByClassName('floatButton')[i].style.height = 5*vh+'px';
		document.getElementsByClassName('floatButton')[i].style.marginTop = 2.5*vh+'px';
	}
	document.getElementById('addAmount').style.fontSize = 6*vh+'px';
	sizeID('addAmount',7);
	marginID('addAmount',5);
	marginID('addNote',1.5);
	marginID('addButtonWrapper',2);
}


//general functions
function fullsize(){
	sizeID('container', 100, 100);
}
function sizeID(element, height, width){
	height = height*vh+'px';
	document.getElementById(element).style.height = height;
	width = width*vw+'px';
	document.getElementById(element).style.width = width;
}

function marginID(element, top, right, bottom, left){
	//console.log("element:"+element+" top:"+top+" right:"+right+" bottom:"+bottom+" left:"+left)
	
	marginT = top*vh+'px';
	document.getElementById(element).style.marginTop = marginT;
	marginR = right*vw+'px';
	document.getElementById(element).style.marginRight = marginR;
	marginB = bottom*vw+'px';
	document.getElementById(element).style.marginBottom = marginB;
	marginL = left*vw+'px';
	document.getElementById(element).style.marginLeft = marginL;
	
}
function positionID(element, top, right, bottom, left){
	//console.log("element:"+element+" top:"+top+" right:"+right+" bottom:"+bottom+" left:"+left)
	
	positionT = top*vh+'px';
	document.getElementById(element).style.top = positionT;
	positionR = right*vw+'px';
	document.getElementById(element).style.right = positionR;
	positionB = bottom*vw+'px';
	document.getElementById(element).style.bottom = positionB;
	positionL = left*vw+'px';
	document.getElementById(element).style.left = positionL;
	
}

function calcWindowSize(){
	vh = window.innerHeight / 100;
	vw = window.innerWidth / 100;
	if(vh > vw){
		vmin = vw;
		vmax = vh;
	}else{
		vmin = vh;
		vmax = vw;
	};
	console.log("Inner Height:"+window.innerHeight+" vh: "+vh);
	console.log("Inner Width:"+window.innerWidth+" vw: "+vw);
	console.log("vmin: "+vmin+" vmax: "+vmax);
}