console.log("\x1b[31m   _____ ________   __              _____ _____     ______ _           _           ");
console.log("  / ____|  ____\\ \\ / /             |_   _|  __ \\   |  ____(_)         | |          ");
console.log(" | |    | |__   \\ V /   _ __ ___     | | | |__) |  | |__   _ _ __   __| | ___ _ __ ");
console.log(" | |    |  __|   > <   | '__/ _ \\    | | |  ___/   |  __| | | '_ \\ / _` |/ _ \\ '__|");
console.log(" | |____| |     / . \\ _| | |  __/   _| |_| |       | |    | | | | | (_| |  __/ |   ");
console.log("  \\_____|_|    /_/ \\_(_)_|  \\___|  |_____|_|       |_|    |_|_| |_|\\__,_|\\___|_|   ");
console.log("\x1b[0m");

const readline = require('readline');
const fetch = require('node-fetch');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
rl.question("Please type server's CFX.re IP address here: ", (url) => {

if (url.startsWith("cfx.re/join/")) {
  
  var request = url.replace("cfx.re/join/", "");

}

else {
  
  var request = url.replace("https://cfx.re/join/", "");
  var url = url.replace("https://", "");
  
}

  async function storejson() {

try {
  
  var response = (await (await fetch("https://servers-frontend.fivem.net/api/servers/single/" + request)).json()).Data.connectEndPoints[0];

} catch (error) {

  var response = "Server was not found! Check server's CFX.re IP address."

}

console.log();
  console.log(`CFX.re IP: \x1b[36m${url}`);
  console.log(`\x1b[0mIP address: \x1b[36m${response}\x1b[0m`);
  console.log();
  console.log(`\x1b[32mNote: Remember that some servers have their IP hidden and there is no other way to get server IP.`)
  console.log();
  console.log(`\x1b[33mYou can contact me on Discord, just be kind - GoodOne#4446.`);
  console.log(`\x1b[33mFeel free to request features and report bugs. I will fix them or implement features as fast as I can. :)\x1b[0m`);
  console.log();
  recursiveAsyncReadLine();

}

storejson()
});
};
recursiveAsyncReadLine();
