var serialport = require('serialport');
var device = require('azure-iot-device');
var con = require('./connection.js');
var SerialPort = serialport.SerialPort;
var serials = [];

connection.iotclient.open(function(x) {
  console.log(x);
});
//console.log('Detecting Arduinos ...');

/*
serialport.list(function (err, ports){
	ports.forEach(function(port){
		if(port.comName.indexOf("AMA") < 0){
			var com = new SerialPort(port.comName, { baudrate: 9600});
			serials.push({port: port.comName, com: com});
			console.log('--' + port.manufacturer + '-' + port.comName + '-' + port.pnpId);
		}
	});
   });
*/

/*
var ard01serial = new SerialPort('/dev/ttyUSB0', {
  baudrate: 115200
});
var ard02serial = new SerialPort('/dev/ttyUSB1', {
  baudrate: 115200
});*/
var ard03serial = new SerialPort('/dev/ttyUSB2', {
  baudrate: 115200
});

/*
ard01serial.on('open', function() {
  console.log('Connected to USB2...');
  ard01serial.on('data', function(data) {
    console.log('....USB1/DATA: ' + data);
    try {
      var payload = JSON.parse(data);
      if (payload.number) {
        ard01serial.write("ac:1,r:255,g:255,b:255,sp:0100,so:0\n", function(err, results) {
          console.log('Error: ' + err);
        });
      }
      var message = new device.Message(payload);
      connection.iotclient.sendEvent(message, printResultFor('send'));

    } catch (e){
      console.log("Recieved code is no JSON!!");

    }

  });
});

ard02serial.on('open', function() {
  console.log('Connected to USB2...');
  ard02serial.on('data', function(data) {
    console.log('....USB2/DATA: ' + data);
    try {
      var payload = JSON.parse(data);
      if (payload.number) {
        ard02serial.write("ac:1,r:255,g:255,b:255,sp:0100,so:0\n", function(err, results) {
          console.log('Error: ' + err);
        });
      }
      var message = new device.Message(payload);
      connection.iotclient.sendEvent(message, printResultFor('send'));

    } catch (e){
      console.log("Recieved code is no JSON!!");

    }

  });
});
*/
ard03serial.on('open', function() {
  console.log('Connected to USB2...');
  ard03serial.on('data', function(data) {
    console.log('....USB3/DATA: ' + data);
    try {
      var payload = JSON.parse(data);
      if (payload.number) {
        ard03serial.write("ac:1,r:255,g:255,b:255,sp:0100,so:0\n", function(err, results) {
          console.log('Error: ' + err);
        });
      }
      var message = new device.Message(payload);
      connection.iotclient.sendEvent(message, printResultFor('send'));

    } catch (e){
      console.log("Recieved code is no JSON!!");

    }

  });
});

function printResultFor(op) {
  return function printResult(err, res) {
    if (err) console.log(err + op);
    if (res && (res.statusCode !== 204)) console.log(op + " " + res.statusCode + "." + res.statusMessage);
  }
}
