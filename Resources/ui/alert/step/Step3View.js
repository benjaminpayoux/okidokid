function Step3View(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	self.add(label);
    
	return self;
}

module.exports = Step3View;