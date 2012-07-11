function ScheduleTabsView(Cloud) {
	
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
	
	self.add(labelo);
	self.add(calendrier_button);
	
	return self;
}

module.exports = ScheduleView;
