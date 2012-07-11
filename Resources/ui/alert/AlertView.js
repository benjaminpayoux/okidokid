function AlertView(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var Step1View = require('ui/alert/step/Step1View');
	var step1 = new Step1View(dic);
	
	var Step2View = require('ui/alert/step/Step2View');
	var step2 = new Step2View(dic);
	
	var Step3View = require('ui/alert/step/Step3View');
	var step3 = new Step3View(dic);
	
	var scrollableView = Ti.UI.createScrollableView({
		views: [step1, step2, step3]
	});
	
	self.add(scrollableView);
    
    
	
	return self;
}

module.exports = AlertView;