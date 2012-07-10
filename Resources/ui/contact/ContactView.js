//FirstView Component Constructor
function ContactView(Cloud) {
	var ContactController = require('lib/controller/ContactController');
	var controller = new ContactController(Cloud);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		backgroundColor:'#FFF'
	});
	
	var username_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto'
	});
	
	var email_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto'
	});
	
	var create_button = Ti.UI.createButton({
		top: 40,
		title: 'test create relation',
		height: 60,
		width: 250
	})
	
	self.add(create_button);
	
	create_button.addEventListener('click', function(e) {
		var ContactController = require('lib/controller/ContactController');
		var controller = new ContactController(Cloud);
		controller.createRelation();
	});
	
	Ti.App.addEventListener("profile.return", function(event) {
		var user = event.retour;
		username_label.setText( user.username );
		email_label.setText(user.email);
	});
	controller.getContacts(Cloud);
	
	
	
	
	return self;
}

module.exports = ContactView;
