var ws281x = require('rpi-ws281x-native');

var numLeds = 48;
var data = new Uint32Array(numLeds);

function setFrontLogic(){
	for(var i = 0; i < 32; i++) {
		var color = Math.random() > 0.5 ? 0xffffff : 0x0000ff;
		var on = Math.random() > 0.5;
		data[i] = on ? color : 0x000000;
	}
}

function setRearLogic(){
	for(var i = 32; i < 48; i++) {
		var color = Math.random();
		if(color > 0.66
			color = 0xff0000;
		else if(color > 0.33)
			color = 0x00ff00;
		else
			color = 0xffff00;
		
		var on = Math.random() > 0.5;
		data[i] = on ? color : 0x000000;
	}
}

ws281x.init(numLeds);
ws281x.setBrightness(32);

setInterval(function(){
	setFrontLogic();
	setRearLogic();
	ws281x.render(data);
	
}, 150);