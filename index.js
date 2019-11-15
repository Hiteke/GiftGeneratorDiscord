const request = require('request');
const generator = require('generate-password');
var fs = require('fs');

var i = 0;
var i1 = 0;
var c = 0;
var arr = [];

a();

function a() {
	console.clear();
var id = generator.generate({
    length: 16,
    numbers: true
})

request({url: `https://discordapp.com/api/v6/entitlements/gift-codes/${id}`, json: true}, function(err, res, json) {
	i++;
	
	if (json.code === id)
	{
		 c++;
	 fs.appendFileSync("gifts.txt", "\nhttps://discord.gift/"+id);
	 arr.push(json.code);
	 fs.appendFileSync("log.txt", "\n"+json);
	 a();
	}
	else
	{
	if (json.message === 'You are being rate limited.') { setTimeout(a, 60000); console.log('waiting...'); } else a(); 
	}
	console.log(c + ' of ' + i);
	for (i1 = 0; i1 < arr.length; i1) { 
		console.log(arr[i1]);
		}
})
}

