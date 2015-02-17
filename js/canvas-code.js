// Canvas code goes here
        var drawCanvas = function(){
			var c = document.getElementById("main");
			c.width = window.innerWidth;
			c.height = window.innerHeight;
			
			var ctx = c.getContext("2d");
			
			// Add in x and y values for other player here
			var initY = window.innerHeight - 100 - 140;
			
			
			
			// Draw images
			ctx.drawImage(player,0,window.innerHeight - 100,140,100);
			ctx.drawImage(otherPlayer,0,initY,47,132)
				
		}
		setInterval(drawCanvas, 20);