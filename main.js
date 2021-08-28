const readline = require('readline');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please type server's CFX.re IP here >>> ", (url) => {

if (url.startsWith("https://")) {
  
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send();
  var response = req.getResponseHeader('x-citizenfx-url');
  var answer = url.replace("https://", "");
}

else if (url.startsWith("http://")) {

  var req = new XMLHttpRequest();
	req.open('GET', url.replace("http://", "https://"), false);
	req.send();
	var response = req.getResponseHeader('x-citizenfx-url');
  var answer = url.replace("https://", "");
}

else {
  
  var req = new XMLHttpRequest();
	req.open('GET', "https://" + url, false);
	req.send();
	var response = req.getResponseHeader('x-citizenfx-url');
  var answer = url;
}

var answer2 = response.replace("http://", "").replace("/", "");
  console.log();
  console.log(`CFX.re IP: ${answer}`);
  console.log(`IP Adress: ${answer2}`);
  rl.close();

});