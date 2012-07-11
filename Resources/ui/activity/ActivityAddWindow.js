function ActivityAddWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ActivityAddView = require('ui/activity/ActivityAddView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var activityAddView = new ActivityAddView(dic);
	self.add(activityAddView);
	
	return self;
}

module.exports = ActivityAddWindow;