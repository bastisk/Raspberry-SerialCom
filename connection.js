var mqttdevice = require('azure-iot-device-mqtt').clientFromConnectionString;

var hubName = "MIPPrototype";
var hubSuffix = "azure-devices.net";

function connection(deviceId, SharedAccessKey){
	this.deviceId = deviceId
	this.SharedAccessKey = SharedAccessKey
	this.connectionString = "HostName=" + hubName + "." + hubSuffix + ";DeviceId=" + deviceId + ";SharedAccessKey=" + SharedAccessKey;
	this.iotclient = mqttdevice(this.connectionString);
}

module.exports = connection;
