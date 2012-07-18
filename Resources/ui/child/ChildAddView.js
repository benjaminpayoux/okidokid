function ChildAddView(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var controller = new ChildController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical',
		top: 67
	});
	
	var child_name_textfield = Ti.UI.createTextField({
		hintText: 'Nom de l\'enfant',
		width: 250
	});
	
	var button_camera = Ti.UI.createButton({
		title: "PHOTO"
	});
	
	var image_view = Ti.UI.createImageView({
		width: 50, height: 70
	});
	
	self.add(image_view);
	self.add(button_camera);
	
	var source_photo = "";
	var file = null;
	
	button_camera.addEventListener('click', function (e) {
		Titanium.Media.showCamera({
		    success:function(event)
		    {
		        var image = event.media;
		        
		        file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
		        file.write(image);
		        
		        image_view.setImage(file.nativePath);
		 
		    }
		 });
	});
	
	var add_child_button = Ti.UI.createButton({
		backgroundImage:'/images/btn/btn_enregistrer.png',
		backgroundSelectedImage:'/images/btn/btn_enregistrer_hover.png',
		width: 250, height: 31
	});
	
    
    self.add(child_name_textfield);
    self.add(add_child_button);
    
    add_child_button.addEventListener('click', function(e) {
		dic.activityIndicator.show();
		var childController = new ChildController(dic);
		childController.addChild(file, child_name_textfield.value);
	});
	
	return self;
}

module.exports = ChildAddView;