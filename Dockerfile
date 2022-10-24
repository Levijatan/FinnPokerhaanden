FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Using 2 copies instead of wildcard for personal prefrences.
COPY src/package.json ./
COPY src/package-lock.json ./

RUN npm install

# Bundle app source
COPY src/. .

EXPOSE 8080
CMD [ "node", "server.js" ]