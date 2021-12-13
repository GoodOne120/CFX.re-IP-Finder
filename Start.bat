if exist node_modules\node-fetch\ (
  cls
  node main.js
) else (
  npm i node-fetch@2
  npm audit fix
  cls
  node main.js
)