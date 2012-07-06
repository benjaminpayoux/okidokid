//FirstView Component Constructor
function ToolbarView(Cloud) {
	var AuthController = require('lib/controller/AuthController');
	var controller = new AuthController(Cloud);
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		bottom: 0,
		height: '40',
		width: '340',
		backgroundColor: '#CCC'
	});
	
	var test_button = Ti.UI.createButton({
		title:'test',
		height:30,
		width:50
	});
	
	self.add(test_button);
	
	test_button.addEventListener('click', function(e) {
		controller.logoutUser();
	});
	
	return self;
}

module.exports = ToolbarView;
