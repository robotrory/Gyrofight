// QR Code goes here
		function generateQR(qrDivName,urlToEncode){
			alert(urlToEncode);
			var qrcode = new QRCode(document.getElementById("qrcode1"), {
			width : 100,
			height : 100
			});
			qrcode.makeCode(urlToEncode);
		
		}
		var sessionNum = Math.floor(Math.random() * 100000);
		//var x1 = generateQR("qrcode1", "https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=1");
		//var y1 = generateQR("qrcode2", "https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
  		var qrcode = new QRCode(document.getElementById("qrcode1"), {
			width : 100,
			height : 100
			});
			qrcode.makeCode("https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");