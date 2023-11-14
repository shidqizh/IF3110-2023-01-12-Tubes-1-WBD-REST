FROM node:16-alpine

WORKDIR /src

COPY package*.json ./

RUN rm -rf node_modules
RUN npm install
COPY . .
EXPOSE 8000

RUN npx prisma migrate dev


CMD [ "npm", "run", "dev" ]