function ProfileView(dic) {
	
	var ProfileController = require('lib/controller/ProfileController');
	var controller = new ProfileController(dic);
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/bg.png',
		layout:'vertical'
	});
	
	var username_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto',
		top: 100,
		text: dic.userProfile.username
	});
	
	var email_label = Ti.UI.createLabel({
		color:'#000',
		height:'auto',
		width:'auto',
		text: dic.userProfile.email
	});
	
	self.add(username_label);
	self.add(email_label);
	
	var button_camera = Ti.UI.createButton({
		title: "PHOTO"
	});
	
	var image_view = Ti.UI.createImageView({
		
	});
	
	self.add(button_camera);
	
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
	
	return self;
}

module.exports = ProfileView;