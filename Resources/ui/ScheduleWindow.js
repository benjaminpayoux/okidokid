function ScheduleWindow(Cloud) {
	var HeaderView = require('ui/header/HeaderView');
	var ScheduleView = require('ui/schedule/ScheduleView');
	var ToolbarView = require('ui/toolbar/ToolbarView');
	
	var self = Ti.UI.createWindow({
		//exitOnClose: true,
		navBarHidden: true
	});
	
	var scheduleView = new ScheduleView(Cloud);
	self.add(scheduleView);
	
	var headerView = new HeaderView(Cloud);
	self.add(headerView);
	
	var toolbarView = new ToolbarView(Cloud);
	self.add(toolbarView);
	
	return self;
}

module.exports = ScheduleWindow;
