cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/iconjone/zoomutilswebsite.git master:gh-pages
cd ../
