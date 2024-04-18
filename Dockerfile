FROM node:20.11-alpine as build

WORKDIR /app

COPY package.json .

COPY . .

RUN yarn

RUN npm audit fix --force

RUN npm run build

FROM nginx:1.21.6-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


EXPOSE 8092