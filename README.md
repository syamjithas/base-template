
docker build -f Dockerfile.prod -t sample:prod .
docker run -it --rm -p 1337:80 sample:prod     
http://localhost:1337/
