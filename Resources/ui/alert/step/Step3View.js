function Step3View(scrollableView, dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step3.png'
	});
	
	var child_label = Ti.UI.createLabel({
		//text: dic.currentAlert.child.name
	});
	
	var activity_label = Ti.UI.createLabel({
		//text: dic.currentAlert.activity.name
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	var picker = Ti.UI.createPicker({
      type:Ti.UI.PICKER_TYPE_DATE,
      minDate:new Date(2009,0,1),
      maxDate:new Date(2014,11,31),
      value:new Date(2014,3,12)
    });
	
	var validate = Ti.UI.createButton({
		title: 'Valider la date'
	});
	
	var previous_button = Ti.UI.createButton({
		title:'previous'
	});
	
	
    
    
	
	self.add(stepImage);
    self.add(label);
    self.add(picker);
    self.add(validate);
    self.add(previous_button);
    
    picker.addEventListener('change', function(e){
    	dic.currentAlert.date_alert = e.value;
    });
    
    validate.addEventListener('click', function (e) {
    	scrollableView.scrollToView(3);
    });
    
    previous_button.addEventListener('click', function (e) {
		scrollableView.scrollToView(1);
	});
    
	return self;
}

module.exports = Step3View;