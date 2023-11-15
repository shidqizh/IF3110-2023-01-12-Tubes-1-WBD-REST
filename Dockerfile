FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npx prisma generate

CMD ["node", "index.js"]