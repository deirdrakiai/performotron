// The fastest way to run the game is to create an ad-hoc local network on the computer on
// which you're running the server code, then have all the mobile devices connect to it.
// Once you've done so, replace the IP address below with one self-assigned to your
// computer. Everything should be nice and zippy, since it's all running locally.
var socket = io.connect('http://169.254.126.233:8080/');

// Alternatively, you can use a tunnel to localhost. I use ngrok (ngrok.com).
// You'll need all your devices to connect to reliable internet, though.
//var socket = io.connect('http://performotron.ngrok.com');

// If you just want to run stuff on one machine, just use localhost.
//var socket = io.connect('http://localhost:8080');

function flashScreen()
{
	$('#screen').css({
		display: 'block',
		opacity: 1,
		'width':$(document).width(),
		'height':$(document).height()
	});
	$('#screen').fadeOut("fast");
}