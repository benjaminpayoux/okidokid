function MenuWindow(Cloud) {
	var self = Ti.UI.createWindow({
		navBarHidden: true
	});
	
	var MenuView = require('ui/menu/MenuView');
	var menuView = new MenuView(Cloud, self);
	self.add(menuView);
	
	return self;
}

module.exports = MenuWindow;
