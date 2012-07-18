function ProfileView(dic) {
	
	var ProfileController = require('lib/controller/ProfileController');
	var controller = new ProfileController(dic);
	
	
	var self = Ti.UI.createView({
		backgroundImage: '/images/Manon.png',
		top: 61,
		layout:'vertical'
	});
	
	var username_label = Ti.UI.createLabel({
		color:'#3B3B3C',
		text: dic.userProfile.username,
		left: 10,
		font:{fontFamily:'Arial', fontSize:26, fontWeight:'bold'}
	});
	
	var email_label = Ti.UI.createLabel({
		color:'#3B3B3C',
		text: dic.userProfile.email,
		left: 10,
		font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}
	});
	
	
	
	var button_camera = Ti.UI.createButton({
		title: "PHOTO"
	});
	
	var image_view = Ti.UI.createImageView({
		
	});
	
	//self.add(button_camera);
	
	button_camera.addEventListener('click', function (e) {
		Titanium.Media.showCamera({
		    success:function(event)
		    {
		        var image = event.media;
		        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'camera_photo.png');
		        
		        f.write(image);
		        //image_view.url = f.nativePath;
		        
		        
		 
		    }
		 });
	});
	
	var infos_view = Ti.UI.createView({
		backgroundColor: '#E7E7E9',
		layout: 'vertical',
		top: 260,
		opacity: 0.9
	});
	
	
	infos_view.add(username_label);
	infos_view.add(email_label);
	self.add(infos_view);
	
	return self;
}

module.exports = ProfileView;