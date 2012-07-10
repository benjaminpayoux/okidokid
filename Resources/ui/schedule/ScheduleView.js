//FirstView Component Constructor
function ScheduleView(Cloud) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout: 'vertical',
	});
	
	var labelo = Ti.UI.createLabel({
		top: 40,
		color:'#000',
		text:'calendrier! ',
		height:'auto',
		width:'auto'
	});
	
	var calendrier_button = Ti.UI.createButton({
		title:'calendrier',
		height:60,
		width:250
	});
	
	self.add(labelo);
	self.add(calendrier_button);
	
	return self;
}

module.exports = ScheduleView;
