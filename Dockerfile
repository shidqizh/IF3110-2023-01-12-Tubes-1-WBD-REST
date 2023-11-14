FROM node:14-alpine

WORKDIR /src

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install
COPY . .
EXPOSE 8080

RUN npx prisma migrate dev

CMD [ "npm", "run", "dev" ]