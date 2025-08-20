"use strict";
let t = 0;
let themeValue = 2;
let panelValue = 1;
let myInputW = 810;
let myInputH = 240;
let myInputF = 96;
let myArea = 0;
// COMMANDS
function myChange() {
	let texts = document.getElementById("myInput").value.toString();
	let rules = document.getElementById("myPrompt").value.toString();
	if ( document.getElementById("myPrompt").value.toString().length < 3 ) {
		document.getElementById("myResult").value = texts;
	} else {
		let text = Transcribe(texts,rules);
		document.getElementById("myResult").value = text[0];
		document.getElementById("myPrompt").value = text[1];
	};
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myPrompt").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myClear() {
	document.getElementById("myInput").value = "";
	document.getElementById("myResult").value = "";
};
function myAaTex() {
	let amatex = document.getElementById("myInput").value.toString();
	document.getElementById("myInput").value = myMoTex(amatex);
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myMoTex(abtext) {
	abtext = abtext.toLowerCase();
	// let abtext = abtext.replace(/\s+/g, " ");
	// let abtext = abtext.trim();
	abtext = abtext.replace(/\n+/g, "êăõ");
	abtext = abtext.replace(/\s+/g, " ");
	abtext = abtext.replace(/êăõ* /g, "\n\n");
	abtext = abtext.replace(/êăõ/g, "\n\n");
	abtext = abtext.trim();
	return abtext;
};
function mySave() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myPrompt").value;
	let text3 = document.getElementById("myResult").value;
	let text4 = "=== PROPOSED TEXT ===" + "\n\n" + text1 + "\n\n" + "=== :INDICATIONS: ===" + "\n\n" + text2 + "\n\n" + "=== PRODUCED TEXT ===" + "\n\n" + text3;
	let text5 = text4.replace(/\n/g, "\r\n");
	let text6 = text5.replace(/\r+/g, "\r");
	let factor = document.createElement('a');
	factor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text6));
	factor.setAttribute("download", "text.txt");
	factor.style.display = "none";
	document.body.appendChild(factor);
	factor.click();
	document.body.removeChild(factor);
};
function myCopy() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myPrompt").value;
	let text3 = document.getElementById("myResult").value;
	let text4 = "=== PROPOSED TEXT ===" + "\n\n" + text1 + "\n\n" + "=== :INDICATIONS: ===" + "\n\n" + text2 + "\n\n" + "=== PRODUCED TEXT ===" + "\n\n" + text3;
	let text5 = text4.replace(/\n/g, "\r\n");
	let text6 = text5.replace(/\r+/g, "\r");
	const textArea = document.createElement("textarea");
	textArea.value = text3;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	// window.alert("Good");
	document.getElementById("myCopx").innerHTML = "Good";
	setTimeout( function() { document.getElementById("myCopx").innerHTML = "Copy"; }, 1800 );
};
// PANELS
function myPanel() {
	if ( panelValue == 1 ) {
		document.getElementById("menu-A").style.display = "none";
		document.getElementById("menu-B").style.display = "inline-block";
		panelValue = 0;
	} else {
		document.getElementById("menu-B").style.display = "none";
		document.getElementById("menu-A").style.display = "inline-block";
		panelValue = 1;
	};
};
// WEB
function myWeb() {
	document.getElementById("myResult").value = "" + 
	"Project : https://github.com/armotus/universal-transcriber" + "\n" + 
	"License : MIT" + "\n" + 
	"Armotus";
};
// THEME
function myTheme() {
	if ( themeValue == 2 ) {
		document.body.style.color = "#efefef";
		document.body.style.backgroundColor = "#303030";
		let i = 0;
		while ( i < 3 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#efefef";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#303030";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #969696";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#2b2b2b #363636";
			i = i + 1;
		};
		let u = 0;
		while ( u < 9 ) {
			document.getElementsByTagName("button")[u].style.color = "#efefef";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#303030";
			document.getElementsByTagName("button")[u].style.border = "1px solid #969696";
			u = u + 1;
		};
		themeValue = 1;
		t = 2;
		myCookie();
	} else {
		document.body.style.color = "#181818";
		document.body.style.backgroundColor = "#ffffff";
		let i = 0;
		while ( i < 3 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#181818";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #999999";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#c9c9c9 #fbfbfb";
			i = i + 1;
		};
		let u = 0;
		while ( u < 9 ) {
			document.getElementsByTagName("button")[u].style.color = "#181818";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("button")[u].style.border = "1px solid #999999";
			u = u + 1;
		};
		themeValue = 2;
		t = 1;
		myCookie();
	};
};
// TEXTAREA
function mySize() {
	myInputW = document.getElementById("myInput").offsetWidth;
	myInputH = document.getElementById("myInput").offsetHeight;
	myTextarea();
};
function mySize2() {
	myInputF = document.getElementById("myPrompt").offsetHeight;
	myTextarea();
};
function myTextarea() {
	if ( myInputW < 810 ) { myInputW = 810; };
	if ( myInputH < 240 ) { myInputH = 240; };
	if ( myInputF < 96 ) { myInputF = 96; };
	if ( myInputW > document.getElementById("main").offsetWidth ) { myInputW = document.getElementById("main").offsetWidth; };
	if ( myInputH > screen.height ) { myInputH = screen.height; };
	if ( myArea == 1 ) {
		myInputW = document.getElementById("main").offsetWidth;
		myInputH = screen.height;
	};
	let i = 0;
	while ( i < 3 ) {
		document.getElementsByTagName("textarea")[i].style.width = myInputW + "px";
		document.getElementsByTagName("textarea")[i].style.height = myInputH + "px";
		i = i + 1;
	};
	if ( myArea == 1 && myInputF < screen.height / 4 ) { myInputF = screen.height / 4; };
	document.getElementById("myPrompt").style.height = myInputF + "px";
	myCookie();
};
// COOKIES
function myCookie() {
	document.cookie = "universal=" + t + "," + myInputW + "," + myInputH + "," + myInputF + "," + myArea + ",~" + "; max-age=31415926 ; path=/";
};
// SETTING
function mySetting() {
	if ( document.cookie.search(/universal=/) !== -1 ) {
		let settingDecode = decodeURIComponent(document.cookie);
		let settingValue = settingDecode.replace(/^.*(universal=)(.*)(,~).*/,"$2");
		let settingLista = settingValue.trim().split(",");
		if ( settingLista[0] == 1 || settingLista[0] == 2 ) { themeValue = settingLista[0] ; myTheme(); };
		if ( settingLista[1] !== undefined ) { myInputW = settingLista[1]; };
		if ( settingLista[2] !== undefined ) { myInputH = settingLista[2]; };
		if ( settingLista[3] !== undefined ) { myInputF = settingLista[3]; };
		if ( settingLista[4] !== undefined ) { myArea = settingLista[4]; };
		myTextarea();
	};
};
// TEXTAREA
function myModo() {
	if ( myArea == 0 ) {
		myArea = 1;
		myCookie();
		myTextarea();
	} else {
		myInputW = 810;
		myInputH = 240;
		myInputF = 96;
		myArea = 0;
		myCookie();
		myTextarea();
	};
};
// RESPONSIVE
function myResponsive() {
	let widthMain = document.getElementById("main").offsetWidth;
	// MARGENS VALUES
	let valueMargen = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("main").style.margin = 0 + "em" + " " + valueMargen + "em" ;
	// FONT-SIZE MAIN
	let valueMfs = myCalculation( widthMain, 200, 600, 16, 20 ) ;
	document.getElementById("main").style.fontSize = valueMfs + "px" ;
	// FONT-SIZE H1
	let valueHfs = myCalculation( widthMain, 200, 600, 24, 36 ) ;
	let widthH1s = myCalculation( widthMain, 120, 230, 0.60, 1 ) ;
	document.getElementsByTagName("h1")[0].style.fontSize = valueHfs * widthH1s + "px" ;
	myTextarea();
};
// RESPONSIVE CALCULATION
function myCalculation ( X, Xa, Xb, Ya, Yb ) {
	if ( Xa !== Xb ) {
		if ( ( Xa < Xb ) && ( X <= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa < Xb ) && ( X >= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( Xa > Xb ) && ( X >= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa > Xb ) && ( X <= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( X > Xa && X < Xb ) || ( X > Xb && X < Xa ) ) {
			let Y = Number ( [ Yb * ( X - Xa ) + Ya * ( Xb - X ) ] / [ ( Xb - Xa ) ] );
			return Y;
		};
	} else {
		return false;
	};
};
// START
mySetting();
myResponsive();
window.addEventListener( "resize", myResponsive );