function Step5View(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step5.png'
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	self.add(stepImage);
    self.add(label);
    
	return self;
}

module.exports = Step5View;