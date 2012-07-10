function HeaderView(dic) {
	
	var self = Ti.UI.createView({
		top: 0,
		width: 'auto',
		height: 80,
		zIndex: 100,
		backgroundColor: '#3B3B3C'
	});
	
	var menu_button = Ti.UI.createButton({
		title:'M',
		height:60,
		width:60,
		left: 10
	});
	
	self.add(menu_button);
	
	menu_button.addEventListener('click', function(e) {
		var MenuWindow = require('ui/MenuWindow');
		new MenuWindow(dic).open();
	});
	
	return self;
}

module.exports = HeaderView;