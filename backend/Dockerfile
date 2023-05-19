# Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install openai
RUN npm install dotenv
COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]
