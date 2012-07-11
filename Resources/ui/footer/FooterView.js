function FooterView(dic) {
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bottom_bar.png',
		bottom: 0,
		height: 44,
		zIndex: 100
	});
	
	var schedule_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_calendar.png',
		width: 49, height: 44,
		left: 10
	});
	
	var new_alert_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_add.png',
		width: 56, height: 61
	});
	
	var notif_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_notif.png',
		width: 47, height: 42,
		right: 10
	});
	
	self.add(schedule_button);
	self.add(new_alert_button);
	self.add(notif_button);
	
	schedule_button.addEventListener('click', function(e) {
		var MenuWindow = require('ui/MenuWindow');
		new MenuWindow(dic).open();
	});
	
	new_alert_button.addEventListener('click', function(e) {
		dic.newAlert = {};
		var AlertWindow = require('ui/alert/AlertWindow');
		new AlertWindow(dic).open();
	});
	
	return self;
}

module.exports = FooterView;