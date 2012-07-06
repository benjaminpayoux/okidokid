/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}
else {
	var Cloud = require('ti.cloud');
	Cloud.debug = true;  // optional; if you add this line, set it to false for production
	
	Ti.App.addEventListener("isLogged.return", function(event) {
		//alert(event.retour);
		//label_debug.setText( (event.retour === true) ? "connecté" : "non connecté" );
		if (event.retour === true){
			var ScheduleWindow = require('ui/ScheduleWindow');
			new ScheduleWindow(Cloud).open();
		}
		else{
			var AuthWindow = require('ui/AuthWindow');
			new AuthWindow(Cloud).open();
		}
	});
	
	var AuthController = require('lib/controller/AuthController');
	var controller = new AuthController(Cloud);
	controller.isLogged();
}
