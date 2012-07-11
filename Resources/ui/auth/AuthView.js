function AuthView(dic) {
	
	var AuthController = require('lib/controller/AuthController');
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout: 'vertical',
	});
	
	var imageView = Ti.UI.createImageView({
		url: '/images/logo-okidokid.png',
		width: 250,
		top: 80
	})
	
	
	
	var username_input = Ti.UI.createTextField({
		hintText: 'Nom d\'utilisateur ou adresse email',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:26, fontStyle:'italic'},
		height: 60,
		width: 250
	});
	
	var password_input = Ti.UI.createTextField({
		hintText: 'Mot de passe',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:26, fontStyle:'italic'},
		passwordMask: true,
		height: 60,
		width: 250
	});
	
	var connection_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_connexion.png',
		backgroundSelectedImage:'/images/btn/btn_connexion_hover.png',
		width: 250, height: 31
	});
	
	var registration_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_inscrire.png',
		backgroundSelectedImage:'/images/btn/btn_inscrire_hover.png',
		width: 250, height: 31,
		bottom: 10
	});
	
	self.add(imageView);
	self.add(username_input);
	self.add(password_input);
	self.add(connection_button);
	self.add(registration_button);
	
	connection_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var authController = new AuthController(dic);
		authController.loginUser(username_input.value, password_input.value);
	});
	
	registration_button.addEventListener('click', function(e) {
		var RegistrationWindow = require('ui/RegistrationWindow');
		new RegistrationWindow(dic).open();
	});
	
	return self;
}

module.exports = AuthView;