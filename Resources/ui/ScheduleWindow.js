function ScheduleWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ScheduleView = require('ui/schedule/ScheduleView');
	var ToolbarView = require('ui/toolbar/ToolbarView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
		exitOnClose: true
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var scheduleView = new ScheduleView(dic);
	self.add(scheduleView);
	
	var toolbarView = new ToolbarView(dic);
	self.add(toolbarView);
	
	return self;
}

module.exports = ScheduleWindow;