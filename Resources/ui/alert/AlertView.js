function AlertView(dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 61
	});
	
	dic.currentAlert = {};
	
	var scrollableView = Ti.UI.createScrollableView({
		scrollingEnabled: false
	});
	
	
	var Step1View = require('ui/alert/step/Step1View');
	var step1 = new Step1View(scrollableView, dic);
	
	var Step2View = require('ui/alert/step/Step2View');
	var step2 = new Step2View(scrollableView, dic);
	
	var Step3View = require('ui/alert/step/Step3View');
	var step3 = new Step3View(scrollableView, dic);
	
	var Step4View = require('ui/alert/step/Step4View');
	var step4 = new Step4View(scrollableView, dic);
	
	var Step5View = require('ui/alert/step/Step5View');
	var step5 = new Step5View(scrollableView, dic);
	
	var Step6View = require('ui/alert/step/Step6View');
	var step6 = new Step6View(scrollableView, dic);
	
	
	
	scrollableView.setViews([step1, step2, step3, step4, step5, step6]);
	
	self.add(scrollableView);
    
    
	
	return self;
}

module.exports = AlertView;