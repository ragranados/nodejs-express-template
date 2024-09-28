# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "run", "dev"]
EXPOSE 3000