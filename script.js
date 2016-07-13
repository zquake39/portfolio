


// var msg = 'Sign up to receive our newsletter for 10% off';

// function updateMessage() {

// 	var el = document.getElementById('message');

// 	el.textContent = msg;
// }

// updateMessage();

// function newMessage() {

// 	document.getElementById('message1').innerHTML = '<h1><center><b>3 things coding</b></center></h1>'
// 	document.getElementById('message2').innerHTML = '1. APplying'
// 	document.getElementById('message3').innerHTML = '2. making'
// 	document.getElementById('message4').innerHTML = '3. creating'

// }

// newMessage();

<!-- // Create a variable called el to hold the element whose id attribute has a value of info -->
var el = document.getElementById('info');
var randomNum = Math.floor((Math.random() * 10) + 1);

<!-- // Write the number into that element -->
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';

var saying = 'Home sweet home';
var message = '<h2>Lower:</h2><h1>' + saying[11] + '</h1>';
var element = document.getElementById('messageInABottle').innerHTML = message;