FROM node:22-alpine

WORKDIR /user/app

COPY package.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

ARG MONGO_URI
ENV MONGO_URI=${MONGO_URI}

RUN echo "MONGO_URI=${MONGO_URI}" > .env

RUN pnpm build

EXPOSE 3010

CMD ["node", "dist/main"]
