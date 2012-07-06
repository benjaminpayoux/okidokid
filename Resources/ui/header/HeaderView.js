//FirstView Component Constructor
function HeaderView(Cloud) {
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		top: 0,
		height: '40',
		width: '340',
		backgroundColor: '#3B3B3C'
	});
	
	var menu_button = Ti.UI.createButton({
		title:'Menu',
		height:60,
		width:250
	});
	
	self.add(menu_button);
	
	var slide_it_left = Titanium.UI.createAnimation();
    slide_it_left.left = 0; // to put it back to the left side of the window
    slide_it_left.duration = 300;
	
	menu_button.addEventListener('click', function(e) {
		var MenuWindow = require('ui/MenuWindow');
		new MenuWindow(Cloud).open();
	});
	
	return self;
}

module.exports = HeaderView;
