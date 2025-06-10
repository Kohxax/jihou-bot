# Builder

FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx tsc

#Production

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/index.js"]

