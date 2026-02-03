FROM node:20-alpine AS development-dependencies-env
COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS build-env
COPY package.json package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY . /app/
RUN npm run build

FROM node:20-alpine
RUN npm install -g serve
COPY --from=build-env /app/dist /app/dist
WORKDIR /app
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]