  node -v 2> Nul
if "%errorlevel%" == "9009" (
  echo "Node.JS is not installed on your system!"
) else (
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
)