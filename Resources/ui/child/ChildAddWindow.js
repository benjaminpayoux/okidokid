function ChildAddWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ChildAddView = require('ui/child/ChildAddView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var childAddView = new ChildAddView(dic);
	self.add(childAddView);
	
	return self;
}

module.exports = ChildAddWindow;