function RegistrationView(dic) {
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical'
	});
	
	var logo_okidokid = Ti.UI.createImageView({
		image: '/images/logo_top.png',
		top: 15,
		width: 150
	});
	
	var username_input = Ti.UI.createTextField({
		hintText: 'Nom d\'utilisateur',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:16, fontStyle:'italic'},
		top:50,
		width:250
	});
	
	var email_input = Ti.UI.createTextField({
		hintText: 'Adresse email',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:16, fontStyle:'italic'},
		
		width:250
	});
	
	var password_input = Ti.UI.createTextField({
		hintText: 'Mot de passe',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:16, fontStyle:'italic'},
		passwordMask:true,
		
		width:250
	});
	
	var confirmPassword_input = Ti.UI.createTextField({
		hintText: 'Confirmer mot de passe',
		color: '#9d9d9d',
     	font: {fontFamily:'Helvetica', fontSize:16, fontStyle:'italic'},
		passwordMask:true,
		
		width:250
	});
	
	var registration_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_inscrireON.png',
		backgroundSelectedImage:'/images/btn/btn_inscrireON_hover.png',
		width: 250, height: 31
	});
	
	self.add(logo_okidokid);
	self.add(username_input);
	self.add(email_input);
	self.add(password_input);
	self.add(confirmPassword_input);
	self.add(registration_button);
	
	registration_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var RegistrationController = require('lib/controller/RegistrationController');
		var controller = new RegistrationController(dic);
		controller.registerUser(username_input.value,email_input.value, password_input.value, confirmPassword_input.value);
	});
	
	return self;
}

module.exports = RegistrationView;