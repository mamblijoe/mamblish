FROM node:14.17.0

WORKDIR /app

COPY package.json ./

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install -y nodejs

RUN npm install -g @nestjs/cli

RUN npm install

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]