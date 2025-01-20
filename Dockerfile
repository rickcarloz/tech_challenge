FROM node:18-alpine

WORKDIR /user/app

COPY package.json ./

RUN npm install

COPY . .

ARG MONGO_URI

ENV MONGO_URI=${MONGO_URI}

RUN echo "MONG_URI=${MONGO_URI}" > .env

RUN npm i -g pnpm

RUN pnpm build

EXPOSE 3010

CMD ["node", "dist/main"]