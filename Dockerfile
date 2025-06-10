# Builder

FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx tsc

#Production

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/index.js"]

