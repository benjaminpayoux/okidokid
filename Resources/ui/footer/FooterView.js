function FooterView(dic) {
	
	var self = Ti.UI.createView({
		bottom: 0,
		height: 61,
		zIndex: 100
	});
	
	var bg = Ti.UI.createView({
		backgroundImage:'/images/bottom_bar.png',
		height: 44,
		bottom: 0
	});
	
	var schedule_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_calendar.png',
		width: 30, height: 25,
		bottom: 5, left: 50
	});
	
	var new_alert_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_add.png',
		width: 56, height: 61
	});
	
	var notif_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_notif.png',
		width: 28, height: 23,
		right: 50, bottom: 5
	});
	
	self.add(bg);
	self.add(schedule_button);
	self.add(new_alert_button);
	self.add(notif_button);
	
	schedule_button.addEventListener('click', function(e) {
		var ScheduleWindow = require('ui/schedule/ScheduleWindow');
		new ScheduleWindow(dic).open();
	});
	
	new_alert_button.addEventListener('click', function(e) {
		dic.newAlert = {};
		var AlertWindow = require('ui/alert/AlertWindow');
		new AlertWindow(dic).open();
	});
	
	return self;
}

module.exports = FooterView;