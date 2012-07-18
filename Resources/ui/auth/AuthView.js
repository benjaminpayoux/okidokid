function AuthView(dic) {
	
	var AuthController = require('lib/controller/AuthController');
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout: 'vertical',
	});
	
	var logo = Ti.UI.createImageView({
		image: '/images/logo-okidokid.png',
		width: 250,
		top: 90
	})
	
	var form_bg = Ti.UI.createImageView({
		image: '/images/bg_champ_connexion.png',
		width: 250,
		top: 40
	});
	
	var username_input = Ti.UI.createTextField({
		hintText: 'Nom d\'utilisateur',
		color: '#9d9d9d',
		top: 40,
		width: 250
	});
	
	var password_input = Ti.UI.createTextField({
		
		hintText: 'Mot de passe',
		passwordMask: true,
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
		top: 130
	});
	
	self.add(logo);
	//self.add(form_bg);
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