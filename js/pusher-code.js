
		// Load in player Images
    var pusher = new Pusher('bf741a8a4c211bec9b6b');
	var channel = pusher.subscribe('private-game-id');

	var player1 = {'x':50, 'shouldShoot':false, 'bullets': []};
	var player2 = {'x':50, 'shouldShoot':false, 'bullets': []};

    channel.bind('client-coord-update',function(data) {
    //do something soon

    	if(data.player == "1"){
    		player1.x = (data.y + 90) /1.8;
    		player1.shouldShoot = data.touched;
    	}else{
    		player2.x = (data.y + 90) /1.8;
    		player2.shouldShoot = data.touched;
    	}
		
  	});

        
    	