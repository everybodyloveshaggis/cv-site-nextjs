FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY app ./app
COPY public ./public

CMD ["npm", "run dev"]