function AlertView(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 67
	});
	
	var Step1View = require('ui/alert/step/Step1View');
	var step1 = new Step1View(dic);
	
	var Step2View = require('ui/alert/step/Step2View');
	var step2 = new Step2View(dic);
	
	var Step3View = require('ui/alert/step/Step3View');
	var step3 = new Step3View(dic);
	
	var Step4View = require('ui/alert/step/Step4View');
	var step4 = new Step4View(dic);
	
	var Step5View = require('ui/alert/step/Step5View');
	var step5 = new Step5View(dic);
	
	var Step6View = require('ui/alert/step/Step6View');
	var step6 = new Step6View(dic);
	
	var scrollableView = Ti.UI.createScrollableView({
		views: [step1, step2, step3, step4, step5, step6]
	});
	
	self.add(scrollableView);
    
    
	
	return self;
}

module.exports = AlertView;