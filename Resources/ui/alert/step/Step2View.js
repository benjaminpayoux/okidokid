function Step2View(scrollableView, dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step2.png'
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step2'
	});
	
	var previous_button = Ti.UI.createButton({
		title:'previous'
	});
    
    self.add(stepImage);
    self.add(label);
    self.add(previous_button);
    
    Ti.App.addEventListener("test", function(e) {
		
		for (var i = 0; i < dic.currentAlert.child.activities.length; i++) {
			var activity = dic.currentAlert.child.activities[i];
			
			var activityPicto = Ti.UI.createButton({
				title: activity.name,
				activity: activity
			});
			
			activityPicto.addEventListener('click', function(e) {
				dic.currentAlert.start_activity = e.source.activity;
				scrollableView.scrollToView(2);
			});
			
			self.add(activityPicto);
			
			
		}
	});
	
	previous_button.addEventListener('click', function (e) {
		scrollableView.scrollToView(0);
	});
    
	return self;
}

module.exports = Step2View;