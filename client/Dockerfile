FROM node:14.17.0

WORKDIR /app

COPY package.json ./

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]