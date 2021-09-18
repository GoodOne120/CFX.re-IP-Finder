if exist node_modules\xmlhttprequest\ (
  node main.js
) else (
  npm i xmlhttprequest
  npm audit fix
  cls
  node main.js
)