# frontend/Dockerfile
FROM node:18.14.0

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install react-dom
RUN npm install tailwindcss
RUN npx tailwindcss init
RUN ls node_modules

COPY . .

CMD ["npm", "start"]
