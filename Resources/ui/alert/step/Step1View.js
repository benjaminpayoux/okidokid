function Step1View(scrollableView, dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var childController = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 61
	});
	
	var stepImage = Ti.UI.createImageView({
		image: '/images/step1.png'
	});
	
	var title_label = Ti.UI.createLabel({
		text:'Aller chercher :',
		color: '#3B3B3C',
		font:{fontSize:26, fontWeight:'bold'},
	});
	
	self.add(stepImage);
	self.add(title_label);
	
	var childs_view = Ti.UI.createView({
		layout: 'horizontal',
		top: 0
	});
	self.add(childs_view);
	
	Ti.App.addEventListener("childsAndActivitiesReturn", function(e) {
		for (var i = 0; i < e.childs.length; i++) {
			
			var child = e.childs[i];
			
			var childPortrait = Ti.UI.createView({
				backgroundColor: '#FFF',
				layout: 'vertical',
				width: 100, height: 160,
				left: 10,
				child: child
			});
			
			var photo_child = Ti.UI.createImageView({
				image: child.photo,
				width: 100, height: 133,
				child: child
			});
			
			var label_name = Ti.UI.createLabel({
				text: child.name,
				color: '#18A7CB',
				font:{fontSize:20, fontWeight:'bold'},
				child: child
			});
			
			childPortrait.add(photo_child);
			childPortrait.add(label_name);
			
			childPortrait.addEventListener('click', function(e) {
				//alert(e.source.child.id);
				dic.currentAlert.child = e.source.child;
				
				Ti.App.fireEvent(
			        	"test",
			        	{ 
		        			
		    		 	}
		        	);
				//childController.getChildActivities(dic.currentAlert.child);
				scrollableView.scrollToView(1);
			});
			
			childs_view.add(childPortrait);
			
			
		}
	});
	childController.getChildsAndActivities();
	
	
	
	
	return self;
}

module.exports = Step1View;