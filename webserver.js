var express = require( 'express' );
var Pusher = require( 'pusher' );
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var pusher = new Pusher( { appId: '107012', key: 'bf741a8a4c211bec9b6b', secret: '4fe4169269b1c8746e84' } );

app.post( '/pusher/auth', function( req, res ) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate( socketId, channel );
  res.send( auth );
} );

app.all('*', function( req, res ) {
  console.log(req.originalUrl);
  res.sendfile( __dirname + req.originalUrl );
} );

var port = 8080;
app.listen( port );