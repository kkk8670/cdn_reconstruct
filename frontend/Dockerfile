# build 
FROM node:18 as build-stage
WORKDIR /app
COPY frontend/ ./
RUN npm install && npm run build:cdn_users

# run
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
EXPOSE 80