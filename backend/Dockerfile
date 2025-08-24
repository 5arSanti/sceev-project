FROM node:18.19.1-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT:-3080}

CMD ["npm", "run", "dev"] 