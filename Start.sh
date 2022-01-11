[ -d "node_modules/node-fetch/" ] && clear && node main.js || npm i node-fetch@2 && npm audit fix && clear && node main.js
