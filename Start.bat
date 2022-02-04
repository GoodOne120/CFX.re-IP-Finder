if exist node_modules\axios\ (
  cls
  node main.js
) else (
  npm i axios
  npm audit fix
  cls
  node main.js
)