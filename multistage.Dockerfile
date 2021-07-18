# Build Stage 1
# This build created a staging docker image
#
FROM node:14 AS appbuild
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY --from=appbuild . .

EXPOSE 9001
CMD [ "node", "server.js"]

