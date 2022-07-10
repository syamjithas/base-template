
docker build -f Dockerfile.prod -t sample:prod .
docker run -it --rm -p 1337:80 sample:prod     
http://localhost:1337/

npm install husky --save-dev
npx husky install
npm pkg set scripts.prepare "husky install"
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit