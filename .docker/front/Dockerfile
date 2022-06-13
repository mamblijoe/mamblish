FROM node:14.18-alpine
ARG APP_ENV
ARG API_URL
ARG SENTRY_DSN
ARG HTTP_AUTH_LOGIN
ARG HTTP_AUTH_PASSWORD

COPY apps/front /app

WORKDIR "/app"

RUN npm ci --silent

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]
