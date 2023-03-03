FROM node:18

RUN mkdir -p /home/app

COPY . C:/Users/jochoa/Desktop/ejemplo_docker

EXPOSE 3000

CMD [ "node", "C:/Users/jochoa/Desktop/ejemplo_docker/index.js" ]