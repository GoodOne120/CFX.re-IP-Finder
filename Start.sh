if which node >/dev/null; then
    [ -d "node_modules/axios/" ] && clear && node main.js || npm i axios && npm audit fix && clear && node main.js
else
    echo "Node.JS is not installed on your system!"
fi
