FROM node:18-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]