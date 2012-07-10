function MenuWindow(dic) {
	var self = Ti.UI.createWindow({
		navBarHidden: true
	});
	
	var MenuView = require('ui/menu/MenuView');
	var menuView = new MenuView(dic, self);
	self.add(menuView);
	
	return self;
}

module.exports = MenuWindow;
