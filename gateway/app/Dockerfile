FROM node:8-alpine

RUN mkdir -p /src/app

RUN npm install nodemon -g --target=8.12.0 --target_platform=linux --target_arch=x64

WORKDIR /src/app
ADD package.json /src/app/package.json
RUN npm install --target=8.12.0 --target_platform=linux --target_arch=x64

ADD nodemon.json /src/app/nodemon.json

EXPOSE 3000

CMD npm start