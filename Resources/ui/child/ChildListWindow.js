function ChildListWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ChildListView = require('ui/child/ChildListView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	self.add(headerView);
	
	var childListView = new ChildListView(dic);
	self.add(childListView);
	
	return self;
}

module.exports = ChildListWindow;