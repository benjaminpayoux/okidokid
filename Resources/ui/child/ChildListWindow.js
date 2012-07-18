function ChildListWindow(dic) {
	var HeaderView = require('ui/header/HeaderView');
	var ChildListView = require('ui/child/ChildListView');
	var FooterView = require('ui/footer/FooterView');
	
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
	});
	
	var headerView = new HeaderView(dic);
	
	var button_modify = Ti.UI.createButton({
		backgroundImage:'/images/ico_modifier.png',
		backgroundSelectedImage:'/images/ico_modifier_hover.png',
		width: 26, height: 30,
		right: 10
	});
	
	headerView.add(button_modify);
	
	self.add(headerView);
	
	var childListView = new ChildListView(dic);
	self.add(childListView);
	
	var footerView = new FooterView(dic);
	self.add(footerView);
	
	return self;
}

module.exports = ChildListWindow;