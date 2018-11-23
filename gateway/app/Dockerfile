FROM node:8-alpine

RUN mkdir -p /src/app

RUN npm install nodemon -g

WORKDIR /src/app
ADD package.json /src/app/package.json
RUN npm install

# ADD nodemon.json /src/app/nodemon.json

EXPOSE 3000

CMD npm start