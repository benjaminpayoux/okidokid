function ChildAddView(dic) {
	
	var ChildController = require('lib/controller/ChildController');
	var controller = new ChildController(dic);
	
	var self = Ti.UI.createView({
		layout:'vertical',
		top: 67
	});
	
	var child_name_textfield = Ti.UI.createTextField({
		hintText: 'Nom de l\'enfant'
	});
	
	var button_camera = Ti.UI.createButton({
		title: "PHOTO"
	});
	
	var image_view = Ti.UI.createImageView({
		
	});
	
	self.add(button_camera);
	
	var source_photo = "";
	
	button_camera.addEventListener('click', function (e) {
		Titanium.Media.showCamera({
		    success:function(event)
		    {
		        var image = event.media;
		        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
		        
		        f.write(image);
		        //image_view.url = f.nativePath;
		        
		        
		 
		        var data_to_send = { 
		            "file": f.read(), 
		            "name": 'camera_photo.png' 
		        };
		        /*xhr = Titanium.Network.createHTTPClient();
		        xhr.setRequestHeader("enctype", "multipart/form-data");
		        xhr.setRequestHeader("Content-Type", "image/png");
		        xhr.open("POST","http://mydomain.com/uploadfile.php");
		        xhr.send(data_to_send); 
		        xhr.onload = function() {
		            textfield.value = this.responseText;
		            Ti.API.info(this.responseText); 
		        };*/
		 
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
		childController.addChild(Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png'), child_name_textfield.value);
	});
	
	return self;
}

module.exports = ChildAddView;