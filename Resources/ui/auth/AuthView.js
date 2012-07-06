function AuthView(Cloud) {
	var self = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: '#FFF',
	});
	
	var AuthController = require('lib/controller/AuthController');
	var authController = new AuthController(Cloud);
	
	var label_debug = Ti.UI.createLabel({
		color: '#000',
		height: 'auto',
		width: 'auto'
	});
	
	Ti.App.addEventListener("debug.return", function(event) {
		label_debug.setText( (event.retour === true) ? "connecté" : "non connecté" );
	});
	authController.debugLog();
	
	var username_label = Ti.UI.createLabel({
		color: '#000',
		text: 'utilisateur',
		height: 'auto',
		width: 'auto'
	});
	var username_input = Ti.UI.createTextField({
		height: 60,
		width: 250
	});
	
	var password_label = Ti.UI.createLabel({
		color: '#000',
		text: 'mot de passe',
		height: 'auto',
		width: 'auto'
	}); 
	var password_input = Ti.UI.createTextField({
		passwordMask: true,
		height: 60,
		width: 250
	});
	
	var connection_button = Ti.UI.createButton({
		title: 'connexion',
		height: 60,
		width: 250
	});
	
	var registration_button = Ti.UI.createButton({
		title: 'créer un compte',
		height: 60,
		width: 250
	});
	
	var menu_button = Ti.UI.createButton({
		title: 'menu',
		height: 60,
		width: 250
	});
	
	// debug
	self.add(label_debug);
	
	self.add(username_label);
	self.add(username_input);
	self.add(password_label);
	self.add(password_input);
	self.add(connection_button);
	self.add(registration_button);
	
	//menu test
	self.add(menu_button);
	
	connection_button.addEventListener('click', function(e) {
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
		//activityIndicator.show();
		authController.loginUser(username_input.value, password_input.value);
	});
	
	registration_button.addEventListener('click', function(e) {
		var RegistrationWindow = require('ui/RegistrationWindow');
		new RegistrationWindow(Cloud).open();
	});
	
	menu_button.addEventListener('click', function(e) {
		var MenuWindow = require('ui/MenuWindow');
		var slide_it_left = Titanium.UI.createAnimation();
	    slide_it_left.left = 150; // to put it back to the left side of the window
	    slide_it_left.duration = 3000;
		var menuWindow = new MenuWindow(Cloud)
		menuWindow.open();
		menuWindow.animate(slide_it_left);
	});
	
	return self;
}

module.exports = AuthView;
