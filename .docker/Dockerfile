#Nivel 0, El equipo

FROM ubuntu:18.04 as home

#Nivel 1, El nodejs
FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install 

# ENV CHROME_BIN=/usr/bin/google-chrome

# RUN npm run cibuild

RUN npm run build

#Nivel 2, El Nginx

FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=node /app/dist/solemne2 .

EXPOSE 80

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

#Como correr Dockerfile? 
#Dentro del "cd solemne2_g1" 
#1.-[sudo] docker build -f .docker/Dockerfile .   
#2.-[sudo] docker run -p 70:80 <el-id>