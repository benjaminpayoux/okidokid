function HeaderView(dic) {
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/top_barre.png',
		top: 0,
		width: 'auto',
		height: 67,
		zIndex: 100
	});
	
	var menu_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/ico_menu.png',
		backgroundSelectedImage:'/images/btn/ico_menu_hover.png',
		width: 30, height: 30,
		left: 10
	});
	
	var image_logo = Ti.UI.createImageView({
		url: '/images/small-logo-okidokid.png',
		width: 150
	});
	
	self.add(menu_button);
	self.add(image_logo);
	
	menu_button.addEventListener('click', function(e) {
		var MenuWindow = require('ui/MenuWindow');
		new MenuWindow(dic).open();
	});
	
	return self;
}

module.exports = HeaderView;