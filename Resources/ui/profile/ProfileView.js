function ProfileView(dic) {
	var ProfileController = require('lib/controller/ProfileController');
	var controller = new ProfileController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical'
	});
	
	var username_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto',
		top: 100,
		text: dic.userProfile.username
	});
	
	var email_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto',
		text: dic.userProfile.email
	});
	
	self.add(username_label);
	self.add(email_label);
	
	return self;
}

module.exports = ProfileView;