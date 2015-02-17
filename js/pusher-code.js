
		// Load in player Images
    var pusher = new Pusher('bf741a8a4c211bec9b6b');
	var channel = pusher.subscribe('private-channel');

	var player1 = {'y':50, 'shouldShoot':false};
	var player2 = {'y':50, 'shouldShoot':false};

    channel.bind('client-coord-update',function(data) {
    //do something soon

    	if(data.player == "1"){
    		player1.y = (data.y + 90) /1.8;
    		player1.shouldShoot = data.touched;
    	}else{
    		player2.y = (data.y + 90) /1.8;
    		player2.shouldShoot = data.touched;
    	}
		
  	});

        
    	