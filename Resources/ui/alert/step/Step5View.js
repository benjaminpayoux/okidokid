function Step5View(scrollableView, dic) {
	
	var ActivityController = require('lib/controller/ActivityController');
	var controller = new ActivityController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		url: '/images/step5.png'
	});
	
	var label = Ti.UI.createLabel({
		text: 'Step3'
	});
	
	var notes = Ti.UI.createTextArea({
		
	});
	
	var validate = Ti.UI.createButton({
		title: 'Valider'
	});
	
	self.add(stepImage);
    self.add(label);
    self.add(notes);
    self.add(validate);
    
    validate.addEventListener('click', function (e){
    	dic.currentAlert.notes = notes.value;
    	Ti.App.fireEvent(
        	"validateAlert",
        	{ 
    			alert: dic.currentAlert
		 	}
    	);
    	scrollableView.scrollToView(5);
    });
    
    var previous_button = Ti.UI.createButton({
		title:'previous'
	});
	previous_button.addEventListener('click', function (e) {
		scrollableView.scrollToView(3);
	});
	self.add(previous_button);
    
	return self;
}

module.exports = Step5View;