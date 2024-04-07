FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Build 
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]