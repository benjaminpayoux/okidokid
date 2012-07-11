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
	var dic = {};
	
	var Cloud = require('ti.cloud');
	Cloud.debug = true;  // optional; if you add this line, set it to false for production
	dic.cloud = Cloud;
	
	var activityIndicator = Ti.UI.createActivityIndicator({
		color: 'green',
      	font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
      	message: 'Loading...',
      	style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
      	top: 10,
      	left: 10,
      	height: 'auto',
      	width: 'auto'
    });
    dic.activityIndicator = activityIndicator;
    
    var softInput = Ti.UI.Android.SOFT_INPUT_STATE_HIDDEN | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
    dic.softInput = softInput;
	
	Ti.App.addEventListener("isLogged", function(e) {
		if (e.isLogged === true){
			dic.userProfile = e.userProfile;
			var ScheduleWindow = require('ui/schedule/ScheduleWindow');
			new ScheduleWindow(dic).open();
		}
		else{
			var AuthWindow = require('ui/AuthWindow');
			new AuthWindow(dic).open();
		}
	});
	
	var AuthController = require('lib/controller/AuthController');
	var controller = new AuthController(dic);
	controller.isLogged();
}
