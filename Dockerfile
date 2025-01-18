FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

FROM python:3.11-alpine

WORKDIR /usr/src/app

COPY --from=build  /usr/src/app/dist .

CMD ["python3", "-m", "http.server", "8000"]
