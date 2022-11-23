FROM node:16.0-slim


WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD sleep 15 && npm run start