function AlertWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var AlertView = require('ui/alert/AlertView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var alertView = new AlertView(dic);
	self.add(alertView);
	
	return self;
}

module.exports = AlertWindow;