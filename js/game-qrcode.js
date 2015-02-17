/*// QR Code goes here
function generateQR(urlToEncode){
	alert(urlToEncode);
	var qrcode = new QRCode(document.getElementById("#QRplayer1_qr"), {
	width : 100,
	height : 100
	});
	qrcode.makeCode(urlToEncode);

}
//var sessionNum = Math.floor(Math.random() * 100000);
generateQR("https://smithyproductions.ngrok.com/mobile");
//?sessionNumber=" + sessionNum + "&player=1"
//var y1 = generateQR("qrcode2", "https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
/*var qrcode = new QRCode(document.getElementById("QRcode1"), {
	width : 100,
	height : 100
	});
	qrcode.makeCode("https://smithyproductions.ngrok.com/mobile?sessionNumber=" + sessionNum + "&player=2");
	
	*/
	
	
	
/*	
	function generateQR(idName,urlToEncode){
                      var qrcode = new QRCode(document.getElementById("qrcode"), {
                      width : 100,
                      height : 100
                      });
                      qrcode.makeCode(urlToEncode);
                      
                  }
                 */