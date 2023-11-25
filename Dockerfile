FROM node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY app ./app
COPY public ./public
COPY lib ./lib
COPY components ./components
COPY tailwind.config.ts ./tailwind.config.ts
COPY postcss.config.js ./postcss.config.js

CMD ["npm","run" ,"dev"]