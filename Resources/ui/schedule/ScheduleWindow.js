function ScheduleWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ScheduleView = require('ui/schedule/ScheduleView');
	var FooterView = require('ui/footer/FooterView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
		exitOnClose: true
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var scheduleView = new ScheduleView(dic);
	self.add(scheduleView);
	
	var footerView = new FooterView(dic);
	self.add(footerView);
	
	return self;
}

module.exports = ScheduleWindow;