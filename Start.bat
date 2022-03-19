if exist node_modules\axios\ (
  cls
  title CFX.re-IP-Finder
  node main.js
) else (
  npm i axios
  npm audit fix
  cls
  title CFX.re-IP-Finder
  node main.js
)